import React, { useRef } from "react";
import InputModal from "./InputModal";
import Button from "./Button";

function FormModals({nameHotel, adresse, email,number,price, devise, funcName, funcAdresse, funcEmail,
  funcNumber,
  funcPrice,
  funcDevise,
  funcImage,
  handleSubmit,
  Annulation
}) {
  const fileInputRef = useRef(null);

  const handleImageIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile)
    if (selectedFile) {
      funcImage(selectedFile);
    }
  };
  
  return (
    <div className="modal-body px-5 border-0 formModals">
      <form onSubmit={handleSubmit} className="border-none" encType="multipart/form-data">
        <div className="row inputs">
          <InputModal type={"text"} label={"Nom de l'hotel"} func={funcName} value={nameHotel} id={"name"} />
          <InputModal type={"text"} label={"Adresse"} func={funcAdresse} value={adresse} id={"adresse"} />
        </div>
        <div className="row inputs">
          <InputModal type={"email"} label={"E-mail"} func={funcEmail} value={email} id={"email"} />
          <InputModal type={"number"} label={"Numéro de téléphone"} func={funcNumber} value={number} id={"number"} />
        </div>
        <div className="row inputs">
          <InputModal type={"text"} label={"Prix par nuit"} func={funcPrice} value={price} id={"price"} />
          <div className="col py-2">
            <label htmlFor="devise" className="form-label">
              Devise
            </label>
            <select className="form-select" id="devise" onChange={funcDevise} value={devise}>
              <option>F XOF</option>
              <option>Euro</option>
              <option>Dollar</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 mt-3 px-2">
          <div className="col p-0 border rounded py-4 mx-1 d-flex align-items-center justify-content-center flex-column">
            <input type="file"
              className="form-control visually-hidden"
              id="image"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              name="image"
            />
            <span className="ms-2 imageModal" onClick={handleImageIconClick}>
              <i className="bi bi-image fs-1"></i>
            </span>
            <p className="textImg">Ajouter une image</p>
          </div>
        </div>
        <div className="modal-footer border-0">
          <div className="col-3">
            <Button text={"Enrégistré"} id={"save"} type={"submit"} />
          </div>
          {Annulation}
        </div>
      </form>
    </div>
  );
}

export default FormModals;
