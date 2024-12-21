import React from "react";
import "./ForgetPassword.scss";
import { FaArrowRight } from "react-icons/fa";

const ForgetPassword = () => {
  return (
    <div className="ForgetPassword">
      <div className="container main flex justify-center h-screen w-full  p-20 bg-neutral-100">
        <div className="border-black py-24">
          {/*icon*/}
          <div>
            <button className="text-2xl bg-pink-900 text-white hover:text-gray-100 rounded-full p-2 duration-200">
              <FaArrowRight />
            </button>
          </div>

          <div className="text">
            <h2 className="text-5xl font-semibold py-5">Forgot password?</h2>
            <p className="text-gray-600">
              Enter your email to recieve a verification code
            </p>
          </div>

          <div>
            <label htmlFor="email" className="flex pt-5">
              Email Address :
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="e.g: example@gmail.com"
              className={`w-full mt-2 px-3 py-2 border  text-sm border-pink-900 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-900`}
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
    </div>
  );
};

export default ForgetPassword;
