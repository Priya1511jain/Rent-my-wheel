import React, { useState } from "react";

const Earnings = () => {
  // Mock earnings data, replace with backend data
  const [earnings, setEarnings] = useState([
    { id: 1, amount: 1500, date: "2024-09-20", vehicle: "Honda City" },
    { id: 2, amount: 500, date: "2024-09-25", vehicle: "Bajaj Pulsar" },
  ]);

  const totalEarnings = earnings.reduce((total, earning) => total + earning.amount, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Earnings</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        {earnings.map(earning => (
          <div key={earning.id} className="mb-4">
            <h3 className="text-lg font-semibold">Vehicle: {earning.vehicle}</h3>
            <p>Amount: ₹{earning.amount}</p>
            <p>Date: {earning.date}</p>
          </div>
        ))}
        <div className="mt-6 text-xl font-bold">
          Total Earnings: ₹{totalEarnings}
        </div>
      </div>
    </div>
  );
};

export default Earnings;
