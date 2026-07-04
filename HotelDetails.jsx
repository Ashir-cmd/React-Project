import {Link, useParams} from  "react-router-dom";
import { useEffect, useState } from "react";

export default function HotelDetails()
{
    const {id} = useParams();
    const[hotel,setHotel]=useState(null);
        useEffect(() => {
  async function getHotel() {
    const response = await fetch(
      "https://demohotelsapi.pythonanywhere.com/hotels/"
    );
    const data = await response.json();
    console.log(data.data);
    console.log(id);


    const selectedHotel = data.data.find(
      (item) => item.id === Number(id)
    );

    setHotel(selectedHotel);
  }

  getHotel();
}, [id]);

 if (!hotel) {
    return <h2>Loading...</h2>;
  }
    return(
        <div id="root">
            <h1>Hotel Details</h1>
        <h2>Hotel id: {id}</h2>
  <img src={hotel.thumbnail}  height={300} alt={hotel.name} />
         <div className="details">
      <h2>{hotel.name}</h2>

      <p> <strong>Description: </strong> {hotel.description}</p>
    
        <p><strong>Price: </strong>  ₹ {hotel.price}</p>

      <p><strong>Location: </strong>  {hotel.location}</p>

      <p> <strong>Rating: </strong> ⭐ {hotel.rating}</p>

      <Link to={`/hotels/${hotel.id}`}>
          <button   className="button"
        onClick={() => alert("Added to Wishlist")}>Add To Wishlist</button>
    </Link>
       </div>
       </div>
   
     
    )
}