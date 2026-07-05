import { useState } from "react";

const HOTELS_PER_PAGE = 33;

export default function HotelList({ hotels }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(hotels.length / HOTELS_PER_PAGE);

  const currentHotels = hotels.slice(
    (currentPage - 1) * HOTELS_PER_PAGE,
    currentPage * HOTELS_PER_PAGE
  );

  return (
    <>
      {currentHotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}

      {/* Pagination buttons */}
     
    </>
  );
}