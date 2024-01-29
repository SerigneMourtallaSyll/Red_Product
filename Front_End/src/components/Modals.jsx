import React from "react";
// import AddHotelLogique from "./AddHotelLogique";
import FormModals from "./FormModals";

function Modals(props) {

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal")) {
      props.onHide();
    }
  };
  const handleImageChange = (selectedFile) => {
    props.setImage(selectedFile);
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
            <button
              type="button"
              className="btn arrow"
              onClick={props.onHide}
            >
              <i className="bi bi-arrow-left fs-4"></i>
            </button>
            <h5 className="modal-title" id="contained-modal-title-vcenter">
              Créer un nouveau hôtel
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={props.onHide}
              aria-label="Close"
            ></button>
          </div>
          <FormModals
            nameHotel={props.nameHotel}
            adresse={props.adresse}
            email={props.email}
            number={props.number}
            price={props.price}
            devise={props.devise}
            funcName={(e) => props.setNameHotel(e.target.value)}
            funcAdresse={(e) => props.setAdresse(e.target.value)}
            funcEmail={(e) => props.setEmail(e.target.value)}
            funcNumber={(e) => props.setNumber(e.target.value)}
            funcPrice={(e) => props.setPrice(e.target.value)}
            funcDevise={(e) => props.setDevise(e.target.value)}
            funcImage={handleImageChange}
            handleSubmit={props.handleSubmit}
        />
        </div>
      </div>
    </div>
  );
}

export default Modals;
