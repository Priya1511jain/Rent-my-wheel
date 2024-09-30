import axios from "axios"; 
import base_url from "../../api/bootapi";
import { useForm } from "react-hook-form"; 

const NewRideForm = () =>{
  const {register, handleSubmit, formState: { errors }, reset, getValues,} = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      aadhar: "",
      license: "",
      mob: "",
      email: "",
      vehicleType: "",
      vehicleNumber: "",
    },
  });

  const onSubmit = (data) => {
    const date = new Date().toISOString().split('T')[0].split('-').reverse().join('-');
    // const time = new Date().toLocaleTimeString("en-IN");
    const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: 'numeric', hour12: true });
    data = { ...data, date: date, time: time };
    // console.log('form submitted : ',data);

    axios
      .post(`${base_url}/activeRide`, data)
      .then((response) => {
        alert("Ride saved");
      })
      .catch((error) => {
        alert('Error while submitting form')
        console.log("Error : ", error);
      });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-1 px-3 w-[460px]">
      <div className="flex ">
        <div>
          <label
            for="first Name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            {...register("firstName", {
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "*only Alphabets allowed",
              },
            })}
          />
          {errors.firstName && (
            <p className="text-red-500 text-[14px]">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="ml-5">
          <label
            for="Last Name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
            {...register("lastName", {
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "*only Alphabets allowed",
              },
            })}
          />
          {errors.lastName && (
            <p className="text-red-500 text-[14px]">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex">
        <div className="mb-5 mt-4 w-[200px]">
          <label
            for="aadhar"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Aadhar Number
          </label>
          <input
            type="text"
            id="aadhar"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123408805012"
            required
            {...register("aadhar", {
              pattern: {
                value: /^[0-9]{12}$/,
                message: "*Invalid Aadhar number",
              },
            })}
          />
          {errors.aadhar && (
            <p className="text-red-500 text-[14px]">{errors.aadhar.message}</p>
          )}
        </div>
        <div className="mb-5 mt-4 ml-5 w-[200px]">
          <label
            for="License"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            License Number
          </label>
          <input
            type="text"
            id="License"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="MH1420110012345"
            required
            {...register("license", {
              pattern: {
                value: /^[A-Z]{2}\d{13}$/,
                message: "*Invalid license number",
              },
            })}
          />
          {errors.license && (
            <p className="text-red-500 text-[14px]">{errors.license.message}</p>
          )}
        </div>
      </div>

      <div className="mb-5 w-[200px]">
        <label
          for="mobile"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Mobile Number
        </label>
        <input
          type="text"
          id="mobile"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
          {...register("mob", {
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Invalid phone number",
            },
          })}
        />
        {errors.mob && (
          <p className="text-red-500 text-[14px]">{errors.mob.message}</p>
        )}
      </div>

      <div class="mb-5 w-[420px]">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="abcd@gmail.com"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("email", {
            pattern: {
              value: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/,
              message: "*Invalid email",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-[14px]">{errors.email.message}</p>
        )}
      </div>

      <div className="flex ">
        <div>
          <label
            for="vehicle type"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Vehicle Type
          </label>
          <input
            type="text"
            id="vehicleType"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
            {...register("vehicleType", {})}
          />
        </div>

        <div className="ml-5">
          <label
            for="Vehicle Number"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Vehicle Number
          </label>
          <input
            type="text"
            id="vehicleNumber"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
            {...register("vehicleNumber", {})}
          />
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <button
          type="submit"
          className="text-white text-[19px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default NewRideForm;