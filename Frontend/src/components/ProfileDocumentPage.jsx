import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import ManageVehicles from "./ManageVehicles";
import MyRentals from "./MyRentals";
import Earnings from "./Earnings";
import MyAccount from "./MyAccount";

const ProfileDocumentPage = () => {
  const [profile, setProfile] = useState(null); // Initialize with null to simulate loading

  useEffect(() => {
    // Simulate fetching profile data (replace with actual backend call)
    const fetchProfile = async () => {
      // Simulate delay and fetch logic
      setTimeout(() => {
        setProfile({
          email: "15priya11jain@gmail.com",
          mobile: "9329622029",
          name: "Priya Jain",
          gender: "Female",
          city: "Indore",
        });
      }, 1000); // Simulated delay
    };

    fetchProfile();
  }, []);

  if (!profile) {
    // Show a loading state if profile data is not yet available
    return <div>Loading...</div>;
  }

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    // Add your backend integration logic here.
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
          </ul>
        </div>

        {/* Sidebar Options */}

        <ul className="space-y-4">
          <li className="text-lg font-semibold">Host Dashboard</li>
          <li>
            <NavLink
              to="/host-dashboard/my-account"
              className={({ isActive }) =>
                isActive ? "text-green-600" : "text-gray-600"
              }
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host-dashboard/manage-vehicles"
              className={({ isActive }) =>
                isActive ? "text-green-600" : "text-gray-600"
              }
            >
              Manage Vehicles
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host-dashboard/my-rentals"
              className={({ isActive }) =>
                isActive ? "text-green-600" : "text-gray-600"
              }
            >
              My Rentals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host-dashboard/earnings"
              className={({ isActive }) =>
                isActive ? "text-green-600" : "text-gray-600"
              }
            >
              Earnings
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Routes>
          <Route path="manage-vehicles" element={<ManageVehicles />} />
          <Route path="my-rentals" element={<MyRentals />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="my-account" element={<MyAccount profile={profile} />} />
          {/* Default Route */}
          <Route
            path="/"
            element={
              <div className="bg-white p-8 shadow-md rounded-lg">
                <h1 className="text-2xl font-bold text-center mb-6">
                  MY ACCOUNT
                </h1>
                <form onSubmit={handleUpdateProfile}>
                  {/* Account Details */}
                  <section className="mb-8">
                    <h2 className="text-xl font-semibold">Account Details</h2>
                    <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                      <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                        <label className="block text-gray-700">Email</label>
                        <input
                          type="email"
                          value={profile.email}
                          disabled
                          className="w-full px-3 py-2 border rounded-lg bg-gray-100"
                        />
                      </div>
                      <div className="w-full sm:w-1/2 sm:pl-4">
                        <label className="block text-gray-700">Mobile *</label>
                        <input
                          type="text"
                          value={profile.mobile}
                          onChange={(e) =>
                            setProfile({ ...profile, mobile: e.target.value })
                          }
                          className="w-full px-3 py-2 border rounded-lg"
                          required
                        />
                      </div>
                    </div>
                  </section>

                  {/* Personal Details */}
                  <section className="mb-8">
                    <h2 className="text-xl font-semibold">Personal Details</h2>
                    <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                      <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                        <label className="block text-gray-700">Name *</label>
                        <input
                          type="text"
                          value={profile.name}
                          onChange={(e) =>
                            setProfile({ ...profile, name: e.target.value })
                          }
                          className="w-full px-3 py-2 border rounded-lg"
                          required
                        />
                      </div>
                      <div className="w-full sm:w-1/2 sm:pl-4">
                        <label className="block text-gray-700">Gender</label>
                        <select
                          value={profile.gender}
                          onChange={(e) =>
                            setProfile({ ...profile, gender: e.target.value })
                          }
                          className="w-full px-3 py-2 border rounded-lg"
                        >
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                        </select>
                      </div>
                    </div>
                  </section>

                  {/* Location Details */}
                  <section className="mb-8">
                    <h2 className="text-xl font-semibold">Location Details</h2>
                    <div className="w-full">
                      <label className="block text-gray-700">
                        Please share your current city for optimized experience
                      </label>
                      <select
                        value={profile.city}
                        onChange={(e) =>
                          setProfile({ ...profile, city: e.target.value })
                        }
                        className="w-full px-3 py-2 border rounded-lg"
                      >
                        <option value="Indore">Indore</option>
                        <option value="Bhopal">Bhopal</option>
                        <option value="Vidisha">Vidisha</option>
                        <option value="Damoh">Damoh</option>
                      </select>
                    </div>
                  </section>

                  <button
                    type="submit"
                    className="w-1/12 bg-[#1E90FF] text-white py-2 rounded-lg hover:bg-[#1C86EE]"
                  >
                    UPDATE
                  </button>
                </form>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default ProfileDocumentPage;
