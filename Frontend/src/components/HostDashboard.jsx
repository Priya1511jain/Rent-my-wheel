import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfileDocumentPage from './ProfileDocumentPage';
import MyAccount from './MyAccount';
import ManageVehicles from './ManageVehicles';
import MyRentals from './MyRentals';
import Earnings from './Earnings';

const HostDashboard = () => {
  // Centralized profile state
  const [profile, setProfile] = useState({
    email: "15priya11jain@gmail.com",
    mobile: "9329622029",
    name: "Priya Jain",
    gender: "Female",
    city: "Indore",
  });

  return (
    <div className="flex min-h-screen bg-gray-100">
      <ProfileDocumentPage profile={profile} />
      <div className="flex-1 p-8">
        <Routes>
          <Route path="my-account" element={<MyAccount profile={profile} setProfile={setProfile} />} />
          <Route path="manage-vehicles" element={<ManageVehicles />} />
          <Route path="my-rentals" element={<MyRentals />} />
          <Route path="earnings" element={<Earnings />} />
        </Routes>
      </div>
    </div>
  );
};

export default HostDashboard;
