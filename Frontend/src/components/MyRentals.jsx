import React, { useState } from "react";

const MyRentals = () => {
  // Mock rental data, replace with backend data
  const [rentals, setRentals] = useState([
    { id: 1, vehicle: "Honda City", renter: "Alice", date: "2024-09-20", status: "Returned" },
    { id: 2, vehicle: "Bajaj Pulsar", renter: "Bob", date: "2024-09-25", status: "Active" },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">My Rentals</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        {rentals.map(rental => (
          <div key={rental.id} className="mb-4">
            <h3 className="text-lg font-semibold">{rental.vehicle}</h3>
            <p>Renter: {rental.renter}</p>
            <p>Date: {rental.date}</p>
            <p>Status: {rental.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRentals;
