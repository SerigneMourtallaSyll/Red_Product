import React from "react";
import AddHotelLogique from "./AddHotelLogique";

function Modals(props) {

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal")) {
      props.onHide();
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
          <AddHotelLogique fetchData={props.fetchData} onHide={props.onHide}/>
        </div>
      </div>
    </div>
  );
}

export default Modals;
