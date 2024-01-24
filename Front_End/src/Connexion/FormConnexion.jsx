import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function FormConnexion({
  funcEmail,
  funcPassword,
  handleSubmit,
  email,
  password,
}) {
  return (
    <div className="">
    <Toaster />
      <div className="card form-demo">
        <h5 className="text-start">Connectez-vous en tant que Admin</h5>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <label>Email</label>
              <input
                type="email"
                className="form-control outline-0"
                onChange={funcEmail}
                value={email}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Mot de passe</label>
              <input
                type="password"
                className="form-control outline-0"
                onChange={funcPassword}
                value={password}
              />
            </div>
          </div>
          <div className="row py-3">
            <div className="col">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Gardez-moi connecté</label>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col">
                <Button text={"Se connecter"} id={"signIn"} type={"submit"} />
              </div>
          </div>
        </form>
      </div>
      <div className="form-footer mt-2">
        <Link to="/rejet" style={{ textDecoration: "none" }}>
          <h5 className="text-center">Mot de passe oublié?</h5>
        </Link>
        <div>
          <p className="text-center">
            Vous n'avez pas de compte?{" "}
            <Link to="/inscription" style={{ textDecoration: "none" }}>
              <span>S'inscrire</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormConnexion;
