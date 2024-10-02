import React, { useState } from 'react';

const MyAccount = ({ profile, onUpdateProfile }) => {
  const [isEditing, setIsEditing] = useState(false); // Track if user is in edit mode
  const [updatedProfile, setUpdatedProfile] = useState({ ...profile });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onUpdateProfile(updatedProfile); // Call the parent component's update function
  };

  const handleCancelClick = () => {
    setUpdatedProfile({ ...profile }); // Reset profile changes
    setIsEditing(false); // Exit edit mode
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white p-8 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">MY ACCOUNT</h1>

      <form>
        {/* Account Details */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold">Account Details</h2>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <label className="block text-gray-700">Email Id</label>
              <input
                type="email"
                name="email"
                value={updatedProfile.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full px-3 py-2 border rounded-lg bg-gray-100"
              />
            </div>
            <div className="w-full sm:w-1/2 sm:pl-4">
              <label className="block text-gray-700">Mobile No.</label>
              <input
                type="text"
                name="mobile"
                value={updatedProfile.mobile}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                disabled={!isEditing}
              />
            </div>
          </div>
        </section>

        {/* Personal Details */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold">Personal Details</h2>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={updatedProfile.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                disabled={!isEditing}
              />
            </div>
            <div className="w-full sm:w-1/2 sm:pl-4">
              <label className="block text-gray-700">Gender</label>
              <select
                name="gender"
                value={updatedProfile.gender}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                disabled={!isEditing}
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <label className="block text-gray-700">Aadhar card no.</label>
              <input
                type="number"
                name="aadharno" // Corrected name
                value={updatedProfile.aadharno}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                disabled={!isEditing}
              />
            </div>
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <label className="block text-gray-700">Aadhar card photo</label>
              <input
                type="file" // Corrected input type for file upload
                name="aadharphoto" // Corrected name
                onChange={(e) => {
                  const file = e.target.files[0];
                  setUpdatedProfile((prevProfile) => ({
                    ...prevProfile,
                    aadharphoto: file,
                  }));
                }}
                className="w-full px-3 py-2 border rounded-lg"
                disabled={!isEditing}
              />
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
              name="city"
              value={updatedProfile.city}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
              disabled={!isEditing}
            >
              <option value="Indore">Indore</option>
              <option value="Bhopal">Bhopal</option>
              <option value="Vidisha">Vidisha</option>
              <option value="Damoh">Damoh</option>
            </select>
          </div>
          <div className="w-full sm:w-1/2 mt-4 sm:mb-0">
              <label className="block text-gray-700">Current address</label>
              <input
                type="text"
                name="address"
                value={updatedProfile.address}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                disabled={!isEditing}
              />
            </div>
        </section>

        {/* Buttons */}
        {!isEditing ? (
          <button
            type="button"
            onClick={handleEditClick}
            className="w-1/12 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Edit
          </button>
        ) : (
          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleSaveClick}
              className="w-1/12 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancelClick}
              className="w-1/12 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default MyAccount;
