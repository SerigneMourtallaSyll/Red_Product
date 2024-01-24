import React from 'react';
import iconLogo from "../assets/icons/logo.svg";
import SignInLogique from './SignInLogique';

function PageConnexion() {
  return (
    <div className="connexion">
      <div className="d-flex justify-content-center align-items-center">
        <h2 className="mx-3">
          <img src={iconLogo} alt="icon" className="logoIns" />
        </h2>
        <h2 className="text-white fw-bold titleAppli">RED PRODUCT</h2>
      </div>
      <div className="">
        <SignInLogique />
      </div>
    </div>
  );
}

export default PageConnexion