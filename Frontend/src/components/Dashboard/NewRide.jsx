import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function NewRide() {
  return (
    <>
      {/* <div className="relative flex top-1 bg-gree-200">
        <NavLink to={'newrideform'}
          className={({isActive}) => `${isActive?'shadow-customShadow' : ''} hover:shadow-customShadow bg-gray-100 rounded-md py-2 px-3
          w-[150px] text-center ml-7 border border-gray-300`}
        >
          New Ride
        </NavLink>

        <NavLink to={'qrform'}
          className={({isActive}) =>`${isActive ? 'shadow-customShadow' : ''} hover:shadow-customShadow bg-gray-100 rounded-md py-2 px-3
          w-[150px] text-center ml-5 border border-gray-300`}
        >
          QR Code Form
        </NavLink>
      </div> */}

      <div className=" rounded-md mt-3 ml-3">
        <Outlet/>
      </div>
    </>
  );
}

export default NewRide;