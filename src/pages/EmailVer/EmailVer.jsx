import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import OtpInput from "react-otp-input";

const EmailVer = () => {
  const [otp, setOtp] = useState("");

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px", // Space between inputs
  };

  const inputStyle = {
    width: "50px",
    height: "50px",
    fontSize: "18px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    transition: "border-color 0.2s ease-in-out",
  };

  const inputFocusStyle = {
    borderColor: "#007BFF", // Change color on focus
    boxShadow: "0 0 3px rgba(0, 123, 255, 0.5)",
  };

  return (
    <div className="w-full h-full flex justify-center p-10 pb-20 pt-20">
      <div className="smallerdiv">
        <div>
          <button className="text-2xl bg-pink-900 text-white hover:text-gray-100 rounded-full p-2 duration-200">
            <FaArrowRight />
          </button>
        </div>

        <div className="words py-5">
          <h3 className="text-5xl font-bold">Email Verification</h3>
          <h2 className="text-gray-600 pt-5 font-semibold">
            We sent a code to{" "}
            <span className="font-bold text-black">barbex.jy@gmail.com</span>
          </h2>
        </div>

        <div className="py-5">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            containerStyle={containerStyle}
            inputStyle={inputStyle}
            renderInput={(props) => (
              <input
                {...props}
                style={{
                  ...inputStyle,
                  ...(props.focused ? inputFocusStyle : {}),
                }}
              />
            )}
          />
        </div>

        {/* <div className="input div pt-5 justify-around flex">
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
        </div> */}

        <div className="pt-5">
          <button className="h-[50px] w-full text-white bg-pink-800 rounded-md font-semibold hover:bg-pink-700 shadow-md">
            Continue
          </button>
        </div>

        <div className="pt-5">
          <h2 className="text-gray-600 flex items-center pl-10">
            Didn`t receive the email?{" "}
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
