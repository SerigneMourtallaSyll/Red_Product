import React, { useState } from "react";
import HotelsInfo from "./HotelsInfo";

function CardContentHotels({
  image,
  nameHotel,
  adresse,
  price,
  devise,
  number,
  email,
  handleUpdate,
  handleDeleteHotel,
  setAdresse,
  setEmail,
  setNumber,
  setNameHotel,
  setDevise,
  setPrice,
}) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="card p-0 mb-4 cardHotels" style={{ width: "14rem" }}>
      <img
        src={image}
        className="card-img-top img-fluid pe-auto imageCard"
        alt="img"
        onClick={() => setModalShow(true)}
      />
      <div className="card-body">
        <p style={{ color: "#8D4B38", fontSize: "10px" }}>{adresse}</p>
        <h6 className="card-title fw-bold" style={{ color: "#222222" }}>
          {nameHotel}
        </h6>
        <div className="">
          <p className="card-text">
            {price} {devise}
          </p>
        </div>
      </div>
      <HotelsInfo
        show={modalShow}
        nameHotel={nameHotel}
        devise={devise}
        image={image}
        numberHotel={number}
        emailHotel={email}
        adresse={adresse}
        price={price}
        onHide={() => setModalShow(false)}
        handleUpdate={handleUpdate}
        handleDeleteHotel={handleDeleteHotel}
        setNameHotel={setNameHotel}
        setAdresse={setAdresse}
        setEmail={setEmail}
        setPrice={setPrice}
        setNumber={setNumber}
        setDevise={setDevise}
      />
    </div>
  );
}

export default CardContentHotels;
