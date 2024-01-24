import React, { useState } from "react";
import Button from "./Button";
import FormModals from "./FormModals";

function HotelsInfo(props) {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal")) {
      props.onHide();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.handleUpdate();
    setIsEditing(false);
  };

  const renderContent = () => {
    if (isEditing) {
      return (
        <FormModals
          funcName={props.setNameHotel}
          funcAdresse={props.setAdresse}
          funcDevise={props.setDevise}
          funcEmail={props.setEmail}
          funcNumber={props.setNumber}
          funcPrice={props.setPrice}
          handleSubmit={handleSubmit}
          Annulation={
            <div className="col-3 cancel">
              <Button text={"Annuler"} id={"cancel"} type={"button"} func={() => setIsEditing(false)} />
            </div>
          }
        />
      );
    } else {
      return (
        <div>
          <div className="modal-body px-3 border-0">
            <h6 className="py-1">
              <span className="h6 fw-bold">Nom de l'hotel :</span>{" "}
              {props.hotelName}
            </h6>
            <h6 className="py-1">
              <span className="h6 fw-bold">Adresse :</span> {props.adresse}
            </h6>
            <h6 className="py-1">
              <span className="h6 fw-bold">Email :</span> {props.emailHotel}
            </h6>
            <h6 className="py-1">
              <span className="h6 fw-bold">Numéro de téléphone :</span>{" "}
              {props.numberHotel}
            </h6>
            <h6 className="py-1">
              <span className="h6 fw-bold">Prix par nuit :</span> {props.price}
            </h6>
            <h6 className="py-1">
              <span className="h6 fw-bold">Devise :</span> {props.devise}
            </h6>
            <h6 className="d-flex align-items-center">
              <div className="imageModalUpdate">
                <img src={props.image} alt="img" />
              </div>
            </h6>
          </div>
          <div className="modal-footer border-0">
            <div className="col-7 d-flex justify-content-end">
              <div className="col-4">
                <Button
                  text={isEditing ? "Enregistrer" : "Modifier"}
                  id={isEditing ? "update" : "saveUpdate"}
                  type={"button"}
                  func={handleEditClick}
                />
              </div>
              <div className="col-4 mx-3">
                <Button text={"Supprimer"} id={"delete"} type={"button"} func={props.handleDeleteHotel} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className={`modal fade ${props.show ? "show" : ""}`}
      tabIndex="-1"
      style={{ display: props.show ? "block" : "none" }}
      role="dialog"
      aria-labelledby="contained-modal-title-vcenter"
      onClick={handleOutsideClick}
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content px-3 border-none">
          <div className="modal-header border-0">
            <h5 className="modal-title" id="contained-modal-title-vcenter">
              Détails de l' HÔTEL
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={props.onHide}
              aria-label="Close"
            ></button>
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default HotelsInfo;
