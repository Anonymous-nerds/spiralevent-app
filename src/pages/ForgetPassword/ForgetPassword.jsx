import React from "react";
import { CiLock } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const ForgetPassword = () => {
  return (
    <div className="container main flex justify-center h-[min-100vh] w-full p-20 ">
      <div className="border-black">
        {/*icon*/}
        <div>
          <button className="text-2xl bg-pink-900 hover:text-white rounded-full p-2 duration-200">
            <FaArrowRight />
          </button>
        </div>

        <div className="text">
          <h2 className="text-5xl font-semibold  p-5">Forgot password?</h2>
          <p className="text-gray-600">
            Enter your email to recieve a verification code
          </p>
        </div>

        <div>
          <label htmlFor="email" className="flex pt-5">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            className={`w-full px-3 py-2 border  border-pink-900 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-900`}
            required
          />
        </div>
        <div className="p-5 items-center px-4">
          <button className="w-full px-8 py-3 bg-pink-800 rounded-md text-white font-semibold hover:bg-pink-700">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
