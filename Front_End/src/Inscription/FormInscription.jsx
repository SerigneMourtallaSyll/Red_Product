import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
function FormInscription({funcName, funcEmail, funcPassword, handleSubmit, name, email, password}) {
  return (
    <div className="">
    <Toaster />
      <div className="card form-demo">
        <h5 className="text-start">Inscrivez-vous en tant que Admin</h5>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <label>Nom</label>
              <input type="text" className="form-control no-outline" onChange={funcName} value={name}/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Email</label>
              <input type="email" className="form-control no-outline" onChange={funcEmail} value={email}/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Mot de passe</label>
              <input type="password" className="form-control no-outline" onChange={funcPassword} value={password}/>
            </div>
          </div>
          <div className="row py-3">
            <div className="col">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  Accepter les termes et la politique
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Button text={"S'inscrire"} id={"signUp"} type={"submit"} />
            </div>
          </div>
        </form>
      </div>
      <div className="form-footer mt-3">
        <div>
          <p className="m-0 text-center">
            Vous avez déjà un compte?{" "}
            <Link to="/connexion" style={{ textDecoration: "none" }}>
              <span>Se connecter</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormInscription;
