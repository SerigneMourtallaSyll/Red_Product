const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersModel = require("./models/users");
const RouteHotels = require('./routes/hotelsRoutes');

require("dotenv").config();
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
// Image Upload
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  }
});

let upload = multer({
  storage: storage
});

app.use(express.json());
app.use(cors());

app.use(cors({
  origin: ["https://red-product-frontend.vercel.app"],
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true
}))

app.get("/", (req, res) => {
  res.send("Hello");
})

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Base de données connecté");
  })
  .catch((err) => {
    console.log(err);
  });

app.post('/register', (req, res) => {
  UsersModel.create(req.body)
  .then(user => user.json(user))
  .catch(err => res.json(err))
})

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  UsersModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json({ success: true, message: "Connexion réussie", user });
        } else {
          res.json({
            success: false,
            message: "Le mot de passe est incorrect",
          });
        }
      } else {
        res.json({
          success: false,
          message: "Aucun compte n'est enregistré avec cet e-mail",
        });
      }
    })
    .catch((err) => {
      console.error(err); 
      res
        .status(500)
        .json({ success: false, message: "Une erreur s'est produite" });
    });
});

app.use('/api/uploads', express.static("uploads"));
app.use(upload.single("image"));

app.use('/hotels', RouteHotels);

app.listen(3001, () => {
  console.log("Serveur is running");
});
