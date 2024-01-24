import React, { useState } from "react";
import FormInscription from "./FormInscription";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';


function SignUpLogique() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://red-product-frontend.vercel.app/register", { name, email, password })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Inscription réussie avec succès")
          setTimeout(() => {
            navigate("/connexion");
          }, 1000);
        } else {
            // Gérez les erreurs ici
            console.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error("Un compte existe déjà avec ce mail")
        console.log(err)
      });
  };
  return (
    <FormInscription
      funcName={(e) => setName(e.target.value)}
      funcEmail={(e) => setEmail(e.target.value)}
      funcPassword={(e) => setPassword(e.target.value)}
      handleSubmit={handleSubmit}
      name={name}
      email={email}
      password={password}
    />
  );
}

export default SignUpLogique;
