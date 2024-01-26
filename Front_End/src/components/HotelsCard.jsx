import React, { useCallback, useEffect, useState } from "react";
import CardContentHotels from "./CardContentHotels";
import axios from "axios";
import toast from "react-hot-toast";

function HotelsCard(props) {
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
  console.log(hotels);

  const handleUpdate = async (hotelId) => {
    const formData = new FormData();
    formData.append("nameHotel", nameHotel);
    formData.append("adresse", adresse);
    formData.append("email", email);
    formData.append("number", number);
    formData.append("price", price);
    formData.append("devise", devise || "F XOF");
    formData.append("image", image);
    // if(image){
    // }

    try {
      const res = await axios.put(
        `https://red-product-api.onrender.com/hotels/${hotelId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      fetchData();
      toast.success("Modification réussie avec succès");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteHotel = async(hotelId) => {
    try {
      const res = await axios.delete(
        `https://red-product-api.onrender.com/hotels/${hotelId}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      fetchData();
      toast.success("Suppréssion réussie avec succès");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="">
      <div className="row m-0 px-2 d-flex justify-content-around flex-wrap">
        {hotels.map((hotel, index) => (
          <CardContentHotels
            {...hotel}
            key={index}
            image={`https://red-product-api.onrender.com/api/uploads/${hotel.image}`}
            handleUpdate={() => handleUpdate(hotel._id)}
            handleDeleteHotel={() => handleDeleteHotel(hotel._id)}
            setNameHotel={(e) => setNameHotel(e.target.value)}
            setAdresse={(e) => setAdresse(e.target.value)}
            setEmail={(e) => setEmail(e.target.value)}
            setNumber={(e) => setNumber(e.target.value)}
            setDevise={(e) => setDevise(e.target.value)}
            setPrice={(e) => setPrice(e.target.value)}
            setImage={(selectedFile) => setImage(selectedFile)}
          />
        ))}
      </div>
    </div>
  );
}

export default HotelsCard;
