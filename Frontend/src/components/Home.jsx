import React, { useState } from 'react';

const Home = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log('Searching for vehicles from', source, 'to', destination);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Find Your Ride</h1>
        <p className="text-lg text-gray-500">Flexible and affordable vehicle rentals.</p>
      </div>
      <form className="bg-white p-8 shadow-lg rounded-lg max-w-lg w-full" onSubmit={handleSearch}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Source Location</label>
          <input
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
            placeholder="Enter source"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Destination Location</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
            placeholder="Enter destination"
            required
          />
        </div>
        <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">Search Vehicle</button>
      </form>
    </div>
  );
};

export default Home;
