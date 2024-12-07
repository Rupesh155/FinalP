
import React, { useState } from "react";

const SeatBooking = () => {

  const movie = { name: "Example Movie" };

  const [selectedSeats, setSelectedSeats] = useState([]);
console.log(selectedSeats,"aa");


  const seats = Array.from({ length: 50 }, () => Math.random() < 0.3);
  console.log(seats,"hellooo dfata");
  

  const toggleSeat = (index) => {

    if (seats[index]) {
      alert("This seat is already booked.");
      return;
    }

    if (selectedSeats.includes(index)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== index));
    } else {
      setSelectedSeats([...selectedSeats, index]);
    }
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }
    alert(`You have successfully booked seats: ${selectedSeats.map((seat) => seat + 1).join(", ")}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">{movie.name} - Seat Booking</h1>

      <div className="grid grid-cols-10 gap-2 bg-white p-4 rounded shadow-lg">
        {seats.map((isBooked, index) => (
          <div
            key={index}
            className={`w-10 h-10 flex items-center justify-center text-sm font-bold rounded cursor-pointer transition-all duration-300
              ${isBooked ? "bg-red-500 text-white cursor-not-allowed" : selectedSeats.includes(index) ? "bg-green-500 text-white" : "bg-gray-300"}
            `}
            onClick={() => toggleSeat(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>

      <button
        onClick={handleBooking}
        className="mt-6 px-8 py-2 bg-blue-600 text-white font-bold rounded shadow-lg hover:bg-blue-700 transition-all duration-300"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default SeatBooking;
