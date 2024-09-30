import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [currentForm, setCurrentForm] = useState("signIn"); // Start with Sign In form
  const [ownerData, setOwnerData] = useState({
    fullname: "",
    email: "",
    password: "",
    contactNo: "",
    aadharCardPhoto: null, // Initialize as null for file upload
    profilePic: null, // Initialize as null for file upload
    address: "",
  });

  const navigate = useNavigate();

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    navigate("/user-dashboard"); // Navigate to User Dashboard after Sign In
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    navigate("/user-dashboard"); // Navigate to User Dashboard after Sign Up
  };

  const handleRegisterOwnerSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(); // Use FormData to handle file uploads
      Object.keys(ownerData).forEach((key) => {
        formData.append(key, ownerData[key]);
      });

      const response = await fetch('http://localhost:8000/api/v1/owner/registerOwner', {
        method: 'POST',
        body: formData, // Send form data with files
      });

      const result = await response.json();

      if (response.ok) {
        alert('Owner registered successfully!');
        navigate("/host-dashboard"); // Navigate to Host Dashboard after Registration
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error registering owner:', error);
      alert('There was an error registering the owner.');
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "aadharCardPhoto" || e.target.name === "profilePic") {
      // If file input, store the file object
      setOwnerData({ ...ownerData, [e.target.name]: e.target.files[0] });
    } else {
      // For other input types, store the value as normal
      setOwnerData({ ...ownerData, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg w-full max-w-lg p-8">
        <div className="flex justify-center mb-6">
          <button
            className={`w-1/2 p-2 text-lg font-semibold ${currentForm === "signIn" ? "text-[#1E90FF] border-b-4 border-[#1E90FF]" : "text-gray-500"}`}
            onClick={() => setCurrentForm("signIn")}
          >
            Sign In
          </button>
          <button
            className={`w-1/2 p-2 text-lg font-semibold ${currentForm === "registerOwner" ? "text-[#1E90FF] border-b-4 border-[#1E90FF]" : "text-gray-500"}`}
            onClick={() => setCurrentForm("registerOwner")}
          >
            Register as Owner
          </button>
        </div>

        {/* Register as Owner Form */}
        {currentForm === "registerOwner" && (
          <form onSubmit={handleRegisterOwnerSubmit}>
            <div className="mt-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullname"
                value={ownerData.fullname}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Contact No</label>
              <input
                type="text"
                name="contactNo"
                value={ownerData.contactNo}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={ownerData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={ownerData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Aadhar Card Photo</label>
              <input
                type="file"
                name="aadharCardPhoto"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={ownerData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Profile Picture</label>
              <input
                type="file"
                name="profilePic"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#FFA500] text-white py-2 rounded-lg hover:bg-[#ff8c00]"
            >
              Register as Owner
            </button>
            <p className="text-center mt-4">
              Already registered?{" "}
              <span
                onClick={() => setCurrentForm("signIn")}
                className="text-[#1E90FF] cursor-pointer hover:underline"
              >
                Sign In
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
