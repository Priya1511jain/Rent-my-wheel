import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import ManageVehicles from './ManageVehicles';
import MyRentals from './MyRentals';
import Earnings from './Earnings';
import MyAccount from './MyAccount';

const ProfileDocumentPage = () => {
    const location = useLocation();
  const [profile, setProfile] = useState({
    email: "15priya11jain@gmail.com",
    mobile: "9329622029",
    name: "Priya Jain",
    gender: "Female",
    city: "Indore",
    address: "jabalpur naka",
    aadharno: "234567892344",
    aadharphoto: "img"
  });

  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile); // Update the profile in the sidebar
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-md p-6">
        <div className="text-center mb-6">
          <img
            className="mx-auto rounded-full w-24 h-24"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <h2 className="text-xl font-bold mt-4">{profile.name}</h2>
          <p className="text-sm text-gray-600">{profile.mobile}</p>
          <p className="text-sm text-gray-600">{profile.email}</p>
        </div>

        {/* My Account Section */}
        <div className="mt-8 mb-5">
          <ul className="space-y-4">
            <li className="text-lg font-semibold">My Account</li>
            <li className="flex items-center justify-between">
              <span>Profile Document</span>
              <span className="text-red-500">&#x2716;</span> {/* Cross icon */}
            </li>
            <li className="flex items-center justify-between">
              <span>Mobile Number</span>
              <span className="text-green-500">&#x2714;</span> {/* Tick icon */}
            </li>
            <li className="flex items-center justify-between">
              <span>Paytm Wallet</span>
              <span className="text-red-500">&#x2716;</span>
            </li>
            <li className={location.pathname === '/host-dashboard/my-account' ? 'text-green-600' : ''}>
              <Link to="/host-dashboard/my-account">My Account</Link>
            </li>
          </ul>
        </div>

        {/* Sidebar Options */}
        <ul className="space-y-4">
          <li className="text-lg font-semibold">Host Dashboard</li>
          <li className={location.pathname === '/host-dashboard/manage-vehicles' ? 'text-green-600' : ''}>
            <Link to="/host-dashboard/manage-vehicles">Manage Vehicles</Link>
          </li>
          <li className={location.pathname === '/host-dashboard/my-rentals' ? 'text-green-600' : ''}>
            <Link to="/host-dashboard/my-rentals">My Rentals</Link>
          </li>
          <li className={location.pathname === '/host-dashboard/earnings' ? 'text-green-600' : ''}>
            <Link to="/host-dashboard/earnings">Earnings</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <Routes>
          <Route path="manage-vehicles" element={<ManageVehicles />} />
          <Route path="my-rentals" element={<MyRentals />} />
          <Route path="earnings" element={<Earnings />} />
          <Route
            path="my-account"
            element={<MyAccount profile={profile} onUpdateProfile={handleProfileUpdate} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default ProfileDocumentPage;