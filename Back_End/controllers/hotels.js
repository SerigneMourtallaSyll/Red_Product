const Hotel = require("../models/hotels");

exports.createHotel = async (req, res) => {
  const data = req.body;
  const image = req.file ? req.file.filename : null;
  data.image = image;
  const hotel = new Hotel(data);

  try {
    const result = await hotel.save();
    return res.status(201).send({ message: "Ajout réussi" });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getOneHotel = (req, res) => {
  const id = req.params.id;
  Hotel.findOne({ _id: id })
    .then((hot) => {
      return res.status(200).json(hot);
    })
    .catch((error) => {
      return res.status(400).json({ error });
    });
};

exports.getAllHotels = (req, res) => {
  Hotel.find()
    .then((hotels) => {
      return res.status(200).json(hotels);
    })
    .catch((error) => {
      return res.status(400).json({ error });
    });
};

exports.updateHotel = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  Hotel.findById(id)
    .then((hot) => {
      if (!hot) {
        return res.status(404).json({ message: "Hotel non trouvé" });
      }

      // Mettez à jour les propriétés de l'hotel avec les nouvelles données
      hot.set(data);
      hot.save();

      return res.status(200).json(hot);
    })
    .catch((error) => {
      return res.status(400).json({ error });
    });
};

exports.deleteHotel = (req, res) => {
  const id = req.params.id;
  Hotel.findOneAndDelete({ _id: id })
    .then((hot) => {
      if (!hot) {
        return res.status(404).json({ message: "Hotel non trouvé" });
      }
      return res.status(200).json(hot);
    })
    .catch((error) => {
      return res.status(400).json({ error });
    });
};
