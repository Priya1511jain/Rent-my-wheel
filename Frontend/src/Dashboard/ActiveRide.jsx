import axios from "axios";
import api from "../../auth/auth";
import React, { useEffect, useState } from "react";
import base_url from "../../api/bootapi";

export default function ActiveRides() {
  const [rides, setRides] = useState([]);
  const [ride, setRide] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get(`${base_url}/getActiveRides`)
  //     .then((response) => {
  //       setRides(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("Error : ", error);
  //     });
  // }, []);

  const showRide = async (aadhar) => {
    await api
      .get(`${process.env.REACT_APP_BASE_URL}/rides/activeRide`)
      .then((response) => {
        console.log(response);
        const data = response.data.data
        setRides(data);
        // console.log(response.data[0]);
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
    // setPopupOpen(true);
  };

  useEffect(() =>{
    showRide();
  }, [])

  return (
    // <div className="">
    //   <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    //     <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
    //       <tr>
    //         {/* <th scope="col" class="p-4">
    //             <div class="flex items-center">
    //                 <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
    //                 <label for="checkbox-all-search" class="sr-only">checkbox</label>
    //             </div>
    //         </th> */}
    //         <th class="px-3">
    //           Sr No
    //         </th>
    //         <th scope="col" class=" py-3">
    //           Customer Name
    //         </th>
    //         <th scope="col" class="px-6 py-3">
    //           license Number
    //         </th>
    //         <th scope="col" class="px-6 py-3">
    //           Aadhar Number
    //         </th>
    //         <th scope="col" class="px-6 py-3">
    //           Mobile No
    //         </th> 
    //         <th scope="col" class="px-6 py-3">
    //           Vehicle No
    //         </th>
    //         <th scope="col" class="px-6 py-3">
    //           Vehicle type
    //         </th>
    //         <th scope="col" class="px-6 py-3">
    //           Date
    //         </th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    //         <td class="w-4 p-4">
    //             <div class="flex items-center">
    //                 <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
    //                 <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
    //             </div>
    //         </td>      
    //     </tr> */}
    //       {rides.map((ride,index) => (
    //         <tr
    //           key={ride.aadhar}
    //           class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    //           onClick={() => showRide(ride.aadhar)}
    //         >
    //           {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"> */}
    //           {/* <td class="w-4 p-4">
    //               <div class="flex items-center">
    //                 <input
    //                   id="checkbox-table-search-1"
    //                   type="checkbox"
    //                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    //                 ></input>
    //                 <label for="checkbox-table-search-1" class="sr-only">
    //                   checkbox
    //                 </label>
    //               </div>
    //             </td>  */}
    //           <td className="px-5">
    //             {index+1}
    //           </td>
    //           <td scope="col" className="py-3 text-[16px]">
    //             {`${ride.firstName} ${ride.lastName}`}
    //           </td>
    //           <td scope="col" class="px-6 py-3">
    //             {ride.license}
    //           </td>
    //           <td scope="col" class="px-6 py-3">
    //             {ride.aadhar}
    //           </td>
    //           <td scope="col" class="px-6 py-3">
    //             {ride.mob}
    //           </td> 
    //           <td scope="col" class="px-6 py-3">
    //             {ride.vehicleNumber}
    //           </td>
    //           <td scope="col" class="px-6 py-3">
    //             {ride.vehicleType}
    //           </td>
    //           <td scope="col" class="px-6 py-3">
    //             {ride.date}
    //           </td>
    //           {/* <td>
    //             <button onClick={()=>alert( )}>
    //               show data
    //             </button>
    //           </td> */}
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    //   {popupOpen && (<PopupWindow ride={ride} setPopupOpen={setPopupOpen}/>)}
    // </div>

    // code repaired by Chat-gpt
    <div className="">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {/* <th scope="col" className="p-4">
          <div className="flex items-center">
            <input
              id="checkbox-all-search"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
          </div>
        </th> */}
        <th className="px-3">
          Sr No
        </th>
        <th scope="col" className="py-3">
          Customer Name
        </th>
        <th scope="col" className="px-6 py-3">
          License Number
        </th>
        <th scope="col" className="px-6 py-3">
          Aadhar Number
        </th>
        <th scope="col" className="px-6 py-3">
          Mobile No
        </th>
        <th scope="col" className="px-6 py-3">
          Vehicle No
        </th>
        <th scope="col" className="px-6 py-3">
          Vehicle Type
        </th>
        <th scope="col" className="px-6 py-3">
          Date
        </th>
      </tr>
    </thead>
    <tbody>
      {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
          </div>
        </td>
      </tr> */}
      {rides.map((ride, index) => (
        <tr
          key={ride.aadhar}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
          onClick={() => showRide(ride.aadhar)}
        >
          {/* <td className="w-4 p-4">
            <div className="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
            </div>
          </td> */}
          <td className="px-5">
            {index + 1}
          </td>
          <td className="py-3 text-lg">
            {`${ride.firstName} ${ride.lastName}`}
          </td>
          <td className="px-6 py-3">
            {ride.license}
          </td>
          <td className="px-6 py-3">
            {ride.aadhar}
          </td>
          <td className="px-6 py-3">
            {ride.mob}
          </td>
          <td className="px-6 py-3">
            {ride.vehicleNumber}
          </td>
          <td className="px-6 py-3">
            {ride.vehicleType}
          </td>
          <td className="px-6 py-3">
            {ride.date}
          </td>
          {/* <td>
            <button onClick={() => alert('Show data')}>
              Show Data
            </button>
          </td> */}
        </tr>
      ))}
    </tbody>
  </table>
  {popupOpen && <PopupWindow ride={ride} setPopupOpen={setPopupOpen} />}
</div>

  );
}
 


// Popup window component

const PopupWindow = ({ride,setPopupOpen}) =>{
  return(
    <div className="absolute top-[130px] h-[450px] w-[600px] ml-[260px] bg-gray-100 rounded-lg shadow-customShadow flex justify-items-center">
          
          <div>
            <ul className="">
              <li>Name : {`${ride.firstName} ${ride.lastName}`}</li>
              <li>Mobile NO : {ride.mob}</li>
              <li></li>
            </ul>
          </div>

          <button
            type="button"
            className="bg-red-500 hover:bg-red-600 rounded-md w-[30px] text-white absolute end-3 top-3"
            onClick={() => setPopupOpen(false)}
          >
            X
          </button>
        </div>
  );
}