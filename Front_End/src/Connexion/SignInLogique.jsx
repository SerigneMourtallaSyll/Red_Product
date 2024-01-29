import React, { useEffect, useState } from 'react'
import FormConnexion from './FormConnexion'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
function SignInLogique() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
      // Vérifiez si l'utilisateur est déjà connecté
      const user = localStorage.getItem("userName");
      if (user) {
        navigate("/admin/dashboard");
      }
    }, [navigate]);

    const handleSubmit = (e) => {
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem("userName"));
      axios.post('https://red-product-api.onrender.com/login', {email, password})
      .then(res => {
        console.log(res.data);
        localStorage.setItem("userName", res.data.user.name);
        if (res.data.success) {
          toast.success("Connexion réussie avec succès")
          setTimeout(() => {
              navigate("/admin/dashboard");
          }, 1000);
        } else {
            // Gérez les erreurs ici
            console.error(res.data.message);
        }
    })
    .catch(err => console.log(err));
  };
  return (
    <FormConnexion
    funcEmail={(e) => setEmail(e.target.value)}
    funcPassword={(e) => setPassword(e.target.value)}
    handleSubmit={handleSubmit}
    email={email}
    password={password}
  />
  )
}

export default SignInLogique
