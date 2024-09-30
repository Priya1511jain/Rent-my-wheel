import React from "react";
import { NavLink } from "react-router-dom"; 


function Sidebar() { 

  return (
    <aside
      className="rounded-lg shadow-customShadow bg-gray-200 hover:bg-gra-300
     h-[625px] w-[180px] left-2 top-2 flex flex-col"
    >
      <h1 className="text-[20px] font-bold mt-3 ml-2 py-1 px-3 w-[160px] bg-red-100 rounded-lg shadow-customShadow">
        Vehicle Rental
      </h1>
      <div className="mt-8 w-[170px]">
        <div className="p-1 flex items-center">
          <img src={dashboard} className="" />
          <label className="font-bold text-[20px] ml-2">Dashboard</label>
        </div>
        <div className="mt-2 flex flex-col"> 
          <NavLink
            to={"newRide"}
            className={({ isActive }) => `${
              isActive ? " shadow-customShadow bg-gray-100 " : ""
            }
            flex items-center rounded-lg hover:shadow-customShadow mt-2 ml-3 px-3 py-2 text-[18px] text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700`}
          >
            <img src={plus} className="w-6 h-6" />
            <span className="ml-2">New Ride</span>
          </NavLink>
          <NavLink
            to={"activeRide"}
            className={({ isActive }) =>
              `${
                isActive ? "shadow-customShadow bg-gray-100 " : ""
              } flex items-center rounded-lg hover:shadow-customShadow mt-2 ml-3 text-[18px] text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700`
            }
          >
            <img src={activeRide} className="w-8 h-8 ml-1.5" />
            <span className="py-2 ml-1">Active Rides</span>
          </NavLink>
          <NavLink
            to={"history"}
            className={({ isActive }) =>
              `${
                isActive ? "shadow-customShadow bg-gray-100 " : ""
              } flex items-center rounded-lg hover:shadow-customShadow mt-2 ml-3 px-3 py-2 text-[18px] text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700`
            }
          >
            <img src={history} className="w-[22px]" />
            <span className="ml-[10px]">History</span>
          </NavLink> 
          <NavLink
            to={"vehicles"}
            className={({ isActive }) =>
              `${
                isActive ? "shadow-customShadow bg-gray-100 " : ""
              } flex items-center rounded-lg hover:shadow-customShadow mt-2 ml-3 px-3 py-2 text-[18px] text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700`
            }
          >
            <img src={vehicle} className="w-[27px]" />
            <span className="ml-[8px]">Vehicles</span>
          </NavLink>
        </div>
      </div>

      <div className="mt-12 w-[170px]">
        <div className="p-1 flex items-center">
          <img src={profile} className="w-8 h-8 ml-0.5" />
          <label className="font-bold text-[20px] ml-2">
            Profile
          </label>
        </div>
        <div className="flex flex-col">
        <NavLink
            to={"profile/setting"}
            className={({ isActive }) =>
              `${
                isActive ? "shadow-customShadow bg-gray-100 " : ""
              } flex items-center rounded-lg hover:shadow-customShadow px-3 py-2 mt-6 ml-3 text-[18px] text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700`
            }
          >
            <img
              src={settingsvg}
              className="h-[22px] w-[22px]"
            />
            <span className="ml-3">Setting</span>
          </NavLink>  
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;