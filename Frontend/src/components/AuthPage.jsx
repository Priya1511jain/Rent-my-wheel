import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [currentForm, setCurrentForm] = useState("signIn"); // Start with Sign In form
  const navigate = useNavigate();

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    navigate("/user-dashboard"); // Navigate to User Dashboard after Sign In
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    navigate("/user-dashboard"); // Navigate to User Dashboard after Sign Up
  };

  const handleRegisterOwnerSubmit = (e) => {
    e.preventDefault();
    navigate("/host-dashboard"); // Navigate to Host Dashboard after Registration
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg w-full max-w-lg p-8">
        <div className="flex justify-center mb-6">
          <button
            className={`w-1/2 p-2 text-lg font-semibold ${
              currentForm === "signIn" ? "text-[#1E90FF] border-b-4 border-[#1E90FF]" : "text-gray-500"
            }`}
            onClick={() => setCurrentForm("signIn")}
          >
            Sign In
          </button>
          <button
            className={`w-1/2 p-2 text-lg font-semibold ${
              currentForm === "registerOwner" ? "text-[#1E90FF] border-b-4 border-[#1E90FF]" : "text-gray-500"
            }`}
            onClick={() => setCurrentForm("registerOwner")}
          >
            Register as Owner
          </button>
        </div>

        {/* Sign In Form */}
        {currentForm === "signIn" && (
          <form onSubmit={handleSignInSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#FFA500] text-white py-2 rounded-lg hover:bg-[#ff8c00]"
            >
              Sign In
            </button>
            <p className="text-center mt-4">
              Don't have an account?{" "}
              <span
                onClick={() => setCurrentForm("signUp")}
                className="text-[#1E90FF] cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </p>
          </form>
        )}

        {/* Sign Up Form */}
        {currentForm === "signUp" && (
          <form onSubmit={handleSignUpSubmit}>
            <h2 className="text-xl font-semibold text-center mb-4">Sign Up</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Mobile No</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email ID</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#FFA500] text-white py-2 rounded-lg hover:bg-[#ff8c00]"
            >
              Sign Up
            </button>
            <p className="text-center mt-4">
              Already have an account?{" "}
              <span
                onClick={() => setCurrentForm("signIn")}
                className="text-[#1E90FF] cursor-pointer hover:underline"
              >
                Sign In
              </span>
            </p>
          </form>
        )}

        {/* Register as Owner Form */}
        {currentForm === "registerOwner" && (
          <form onSubmit={handleRegisterOwnerSubmit}>
            <div className="mt-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Mobile No</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Vehicle Type</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Aadhar No</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Vehicle No</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">License</label>
              <input
                type="text"
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
