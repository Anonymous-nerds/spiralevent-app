import React from "react";
import { CiLock } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const EmailVer = () => {
  return (
    <div className="w-full h-full flex justify-center pb-20 pt-20">
      <div className="smallerdiv">
        <div>
          <button className="text-2xl bg-pink-900 hover:text-white rounded-full p-2 duration-200">
            <FaArrowRight />
          </button>
        </div>

        <div className="words pt-10">
          <h3 className="text-5xl font-bold">Email Verification</h3>
          <h2 className="text-gray-600 pt-5 font-semibold">
            We sent a code to{" "}
            <span className="font-bold text-black">barbex.jy@gmail.com</span>
          </h2>
        </div>

        <div className="input div pt-5 justify-around flex">
          <input
            type="text"
            name="num"
            id="num"
            className="w-[40px] h-[50px] px-2 border rounded-md"
          />
          <input
            type="text"
            name="num"
            id="num"
            className="w-[40px]  h-[50px] px-4 border rounded-md"
          />
          <input
            type="text"
            name="num"
            id="num"
            className="w-[40px] h-[50px] px-4 border rounded-md"
          />
          <input
            type="text"
            name="num"
            id="num"
            className="w-[40px] h-[50px] px-4 border rounded-md"
          />
        </div>

        <div className="pt-5">
          <button className="h-[50px] w-full text-white bg-pink-800 rounded-md font-semibold hover:bg-pink-700 shadow-md">
            Continue
          </button>
        </div>

        <div className="pt-5">
          <h2 className="text-gray-600 flex items-center pl-10">
            Didn't receive the email?{" "}
            <span className="text-blue-700 cursor-pointer underline pl-2">
              {" "}
              Click Here
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default EmailVer;
