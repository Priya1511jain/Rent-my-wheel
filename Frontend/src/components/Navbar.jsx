import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Rent-My-Wheel</Link>
        <div>
          <Link to="/signin" className="text-white px-4 hover:text-gray-300">Sign In</Link>
          <Link to="/signup" className="text-white px-4 hover:text-gray-300">Sign Up</Link>
          <Link to="/host-dashboard" className="text-white px-4 hover:text-gray-300">Host Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
