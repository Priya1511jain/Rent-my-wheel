import React, { useState } from "react";

const ManageVehicles = () => {
  // Mock data, replace with API data when backend is ready
  const [vehicles, setVehicles] = useState([
    { id: 1, type: "Car", model: "Honda City", regNo: "MP-09-XYZ1234", status: "Available" },
    { id: 2, type: "Bike", model: "Bajaj Pulsar", regNo: "MP-09-ABC5678", status: "Rented" },
  ]);

  const handleDelete = (id) => {
    setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
  };

  const handleAddVehicle = () => {
    // Add vehicle logic
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Manage Vehicles</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        {vehicles.map(vehicle => (
          <div key={vehicle.id} className="mb-4">
            <h3 className="text-lg font-semibold">{vehicle.model}</h3>
            <p>{vehicle.type}</p>
            <p>Registration No: {vehicle.regNo}</p>
            <p>Status: {vehicle.status}</p>
            <div className="flex space-x-4 mt-2">
              <button className="p-2 bg-green-500 text-white rounded-lg">Edit</button>
              <button
                onClick={() => handleDelete(vehicle.id)}
                className="p-2 bg-red-500 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={handleAddVehicle}
          className="mt-4 p-2 bg-[#FFA500] text-white rounded-lg hover:bg-[#ff8c00]"
        >
          Add New Vehicle
        </button>
      </div>
    </div>
  );
};

export default ManageVehicles;
