import React, { useCallback, useEffect, useState } from "react";
import HotelsCard from "../components/HotelsCard";
import Modals from "../components/Modals";
import Button from "../components/Button";
import axios from "axios";
import toast from "react-hot-toast";
import AddHotelLogique from "../components/AddHotelLogique";
import { useNavigate } from "react-router-dom";

function Hotels() {
  const [modalShow, setModalShow] = useState(false);
  const [hotels, setHotels] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    // Vérifiez si l'utilisateur est déjà connecté
    const user = localStorage.getItem("userName");
      // Si l'utilisateur est connecté, redirigez-le vers le tableau de bord approprié
      if (!user) {
        navigate("/connexion");
      }
  }, [navigate]);
  const fetchData = useCallback(() => {
    try {
      const unsubscribeHotels = async () => {
        const response = await axios.get("https://red-product-api.onrender.com/hotels");
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
        <AddHotelLogique show={modalShow} onHide={() => setModalShow(false)} />
      </div>
  );
}

export default Hotels;
