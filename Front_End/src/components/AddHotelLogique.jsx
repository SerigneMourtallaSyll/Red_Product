import React, { useEffect, useState } from "react";
import FormModals from "./FormModals";
import axios from "axios";
import toast from "react-hot-toast"

function AddHotelLogique(props) {
  const [nameHotel, setNameHotel] = useState("");
  const [adresse, setAdresse] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [price, setPrice] = useState(0);
  const [devise, setDevise] = useState("");
  const [image, setImage] = useState(null);

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
    props.fetchData
    toast.success("Ajout réussi avec succès");
    setNameHotel("");
    setAdresse("");
    setEmail("");
    setNumber(0);
    setPrice(0);
    setImage("");
    props.onHide();
    } catch (err) {
      console.log(err);
    }
  };
  
  const handleImageChange = (selectedFile) => {
    setImage(selectedFile);
  };
  
  return (
    <FormModals
      nameHotel={nameHotel}
      adresse={adresse}
      email={email}
      number={number}
      price={price}
      devise={devise}
      funcName={(e) => setNameHotel(e.target.value)}
      funcAdresse={(e) => setAdresse(e.target.value)}
      funcEmail={(e) => setEmail(e.target.value)}
      funcNumber={(e) => setNumber(e.target.value)}
      funcPrice={(e) => setPrice(e.target.value)}
      funcDevise={(e) => setDevise(e.target.value)}
      funcImage={handleImageChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default AddHotelLogique;
