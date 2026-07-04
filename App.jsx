import HomePage from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";



 export default function App() {
  const [hotels,setHotels] = useState([])
 
  useEffect(() => {
    async function getHotels() {
      const response = await fetch("https://demohotelsapi.pythonanywhere.com/hotels/");
      const data = await response.json();
      console.log(data);
      setHotels(data.data);
      
    }

    getHotels();
  }, []);

const navigate = useNavigate();

function handleViewDetails(id) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    navigate(`/hotels/${id}`);
  } else {
    navigate("/login");
  }
}
return (
<div>

      <h1>Hotels</h1>

      {hotels.map((hotel) => (
        <div key={hotel.id}  className="Hotels">
          <img src={hotel.thumbnail} className="image"  alt={hotel.name} width ="200"/>
          <div className="HotelDetails">
          <h2>{hotel.name}</h2>
          <p><strong>Price:</strong> ₹{hotel.price}</p>
          <p><strong>Location:</strong> {hotel.location}</p>
          <p>{hotel.description.slice(0,68)}<b> .........</b></p>
          <button
         className="button"
         onClick={() => handleViewDetails(hotel.id)}
         >
          View Details
         </button>
         </div>
         </div>
          ))}
         </div>
  );


}