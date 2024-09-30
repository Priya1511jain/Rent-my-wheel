import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    navigate("/user-dashboard"); // Navigate to User Dashboard after Sign In
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg w-full max-w-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">Sign In</h2>
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
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/auth")}
            className="text-[#1E90FF] cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
