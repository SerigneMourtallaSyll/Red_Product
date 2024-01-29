import React, { useCallback, useEffect, useState } from "react";
import FormModals from "./FormModals";
import Modals from "./Modals";
import axios from "axios";
import toast from "react-hot-toast";
import HotelsCard from "./HotelsCard";

function AddHotelLogique(props) {  
  const [hotels, setHotels] = useState([]);
  const [nameHotel, setNameHotel] = useState("");
  const [adresse, setAdresse] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [price, setPrice] = useState(0);
  const [devise, setDevise] = useState("");
  const [image, setImage] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nameHotel", nameHotel);
    formData.append("adresse", adresse);
    formData.append("email", email);
    formData.append("number", number);
    formData.append("price", price);
    formData.append("devise", devise || "F XOF");
    if(image){
      formData.append("image", image);
    }
    try {
      const res = await axios.post("https://red-product-api.onrender.com/hotels/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Ajout réussi avec succès");
      setNameHotel("");
      setAdresse("");
      setEmail("");
      setNumber(0);
      setPrice(0);
      setImage("");
      fetchData();
      props.onHide();
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div>
    <div className="hotelsCard py-5 mt-1">
      <HotelsCard Hotel={hotels ? hotels : ""} onHide={props.onHide} fetchData={fetchData} />
    </div>
      <Modals show={props.show} onHide={props.onHide} nameHotel={nameHotel} adresse={adresse} email={email}
        number={number}
        price={price}
        devise={devise}
        image={image}
        setNameHotel={setNameHotel}
        setAdresse={setAdresse}
        setEmail={setEmail}
        setNumber={setNumber}
        setPrice={setPrice}
        setDevise={setDevise}
        setImage={setImage}
        handleSubmit={handleSubmit}
        />
    </div>
  );
}

export default AddHotelLogique;
