import React from 'react';
import Button from "../components/Button";
import { Link } from "react-router-dom";

function FormReset() {
  return (
    <div className="" style={{ width: "40%" }}>
      <div className="card form-demo">
        <h5 className="text-start">Mot de passe oublié?</h5>
        <p>
          Entrez votre adresse e-mail ci-dessous et nous vous envoyons des
          instructions sur la façon de modifier votre mot de passe.
        </p>
        <div className="form">
          <div className="row">
            <div className="col">
              <label>Email</label>
              <input type="email" className="form-control outline-0" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Button text={"Envoyer"} id={"signIn"} />
            </div>
          </div>
        </div>
      </div>
      <div className="form-footer mt-3">
        <div>
          <p>
            Revenir à la{" "}
            <Link to="/connexion" style={{ textDecoration: "none" }}>
              <span>Connexion</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormReset