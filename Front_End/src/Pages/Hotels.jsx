import React, { useCallback, useEffect, useState } from "react";
import HotelsCard from "../components/HotelsCard";
import Modals from "../components/Modals";
import Button from "../components/Button";
import axios from "axios";

function Hotels() {
  const [modalShow, setModalShow] = useState(false);
  const [hotels, setHotels] = useState([]);
  const fetchData = useCallback(() => {
    try {
      const unsubscribeHotels = async () => {
        const response = await axios.get("http://localhost:3001/hotels");
        setHotels(response.data);
      };

      unsubscribeHotels();
    } catch (error) {
      console.error("Error loading hotels:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
      <div className="hotels">
        <div className="titleHotels d-flex justify-content-between px-4 py-1 my-1 align-items-center">
          <h6>Hotels <span className="totalHotel">{hotels ? hotels.length : ""}</span></h6>
          <div className="pb-2">
            <Button
              text={"Créer un nouveau hôtel"}
              func={() => setModalShow(true)}
              id={"createHotel"}
              icon={<i className="bi bi-plus fs-4"></i>}
            />
          </div>
        </div>
        <div className="hotelsCard py-5 mt-1">
          <HotelsCard />
        </div>
        <Modals show={modalShow} onHide={() => setModalShow(false)} fetchData={() => fetchData()} />
      </div>
  );
}

export default Hotels;
