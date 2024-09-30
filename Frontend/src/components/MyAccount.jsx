import React from 'react';

const MyAccount = ({ profile, setProfile }) => {
    if (!profile) {
        // Display a loading state or fallback if the profile is undefined
        return <div>Loading profile...</div>;
      }
    
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    // Add backend integration logic here
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold text-center mb-6">MY ACCOUNT</h1>

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
                    onChange={(e) => setProfile({ ...profile, mobile: e.target.value })}
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
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2 sm:pl-4">
                  <label className="block text-gray-700">Gender</label>
                  <select
                    value={profile.gender}
                    onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
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
                  onChange={(e) => setProfile({ ...profile, city: e.target.value })}
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
              className="w-full bg-[#1E90FF] text-white py-2 rounded-lg hover:bg-[#1C86EE]"
            >
              UPDATE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
