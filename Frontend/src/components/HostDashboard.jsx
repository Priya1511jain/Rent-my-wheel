import React from "react";

const HostDashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-300 shadow-md  rounded-lg  text-black h-screen p-6 ">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img
            src="/logo.png" // replace with actual logo path
            alt="Logo"
            className="w-24 h-24 rounded-full mb-4"
          />
          {/* Host Info */}
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-black">+91 9876543210</p>
          <p className="text-black">johndoe@example.com</p>
        </div>

        {/* Profile Details */}
        <nav className="mt-8">
          <ul className="space-y-4">
            <li className="hover:bg-gray-700 p-3 rounded-md cursor-pointer">
              Profile Documents
            </li>
            <li className="hover:bg-gray-700 p-3 rounded-md cursor-pointer">
              Add Vehicle
            </li>
            <li className="hover:bg-gray-700 p-3 rounded-md cursor-pointer">
              Active Rentals
            </li>
            <li className="hover:bg-gray-700 p-3 rounded-md cursor-pointer">
              Earrings
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Dashboard */}
      <main className="w-3/4 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Host Dashboard</h1>

        {/* Section for Vehicle Management */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-600 mb-3">
            Your Vehicles
          </h2>
          <div className="bg-white shadow-md p-4 rounded-lg">
            {/* Replace this static list with dynamic vehicle data */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Vehicle 1</h3>
              <p>Car - Honda City</p>
              <p>Registration No: MP-09-XYZ1234</p>
              <p>Status: Available</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">Vehicle 2</h3>
              <p>Bike - Bajaj Pulsar</p>
              <p>Registration No: MP-09-ABC5678</p>
              <p>Status: Rented</p>
            </div>

            <button className="mt-4 p-2 bg-[#FFA500] text-white rounded-lg hover:bg-[#ff8c00]">
              Add New Vehicle
            </button>
          </div>
        </section>

        {/* Section for Payment and Wallet */}
        <section>
          <h2 className="text-xl font-semibold text-gray-600 mb-3">
            Payment & Wallet
          </h2>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <p>Wallet Balance: ₹5,000</p>
            <button className="mt-4 p-2 bg-[#1E90FF] text-white rounded-lg hover:bg-[#1C86EE]">
              Withdraw Funds
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HostDashboard;
