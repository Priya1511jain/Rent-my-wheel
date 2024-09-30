import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-[#1E90FF] text-white p-4">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
      </header>

      <div className="flex flex-grow p-4">
        <aside className="w-1/4 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Profile</h2>
          <p className="mb-2">Name: John Doe</p>
          <p className="mb-2">Email: johndoe@example.com</p>
          <p className="mb-4">Mobile No: +91-XXXXXXXXXX</p>
          <Link to="/edit-profile" className="text-[#1E90FF] hover:underline">Edit Profile</Link>
        </aside>

        <main className="w-3/4 ml-4">
          <h2 className="text-lg font-semibold mb-4">My Bookings</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Vehicle</th>
                  <th className="py-2 text-left">Booking Date</th>
                  <th className="py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Honda City</td>
                  <td className="py-2">2024-09-28</td>
                  <td className="py-2 text-green-600">Confirmed</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Yamaha FZ</td>
                  <td className="py-2">2024-09-20</td>
                  <td className="py-2 text-red-600">Cancelled</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold mt-6 mb-4">Search for Vehicles</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FFA500]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#FFA500] text-white py-2 rounded-lg hover:bg-[#ff8c00]"
              >
                Search
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
