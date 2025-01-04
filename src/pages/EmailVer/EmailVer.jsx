import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import OtpInput from "react-otp-input";
import heroimg from "../../assets/verify.svg"
import logo from "../../assets/spiraleE4.png"

const EmailVer = () => {
  const [otp, setOtp] = useState("");

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
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
    borderColor: "#007BFF",
    boxShadow: "0 0 3px rgba(0, 123, 255, 0.5)",
  };

  return (
    <div className=" w-full flex flex-col lg:flex-row">
      <div className="w-full h-screen lg:w-1/2 p-6 md:p-12 bg-neutral-100 flex items-center justify-center">
        <form className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl m-8 p-8">
          <h3 className="text-2xl md:text-2xl font-bold flex justify-center gap-2 text-gray-800 mb-6">
            <img src={logo} alt="" className="App-logo h-8" />
            <span>
              Spiral
              <span className="text-pink-900">Event</span>
            </span>
          </h3>
          <div className="smallerdiv">
            <div>
              <button className="text-2xl bg-pink-900 text-white hover:text-gray-100 rounded-full p-2 duration-200">
                <FaArrowRight />
              </button>
            </div>

            <div className="words py-5 px-6">
              <h3 className="text-4xl text-gray-800 font-bold">
                Email Verification
              </h3>
              <h2 className="text-gray-600 pt-5 font-semibold">
                We sent a code to{" "}
                <span className="font-bold text-black">
                  barbex.jy@gmail.com
                </span>
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

            <div className="pt-5 flex justify-center">
              <button className="h-[50px] w-2/3  text-white bg-pink-900 rounded-md font-semibold hover:bg-pink-700 hover:scale-105 shadow-md">
                Continue
              </button>
            </div>

            <div className="pt-5">
              <h2 className="text-gray-600 flex items-center pl-4">
                Didn't receive the email?{" "}
                <span className="text-blue-700 cursor-pointer underline pl-2">
                  {" "}
                  Click Here
                </span>
              </h2>
            </div>
          </div>
        </form>
      </div>
      <div className="hidden lg:block lg:w-1/2 h-screen">
        <img src={heroimg} alt="Event" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default EmailVer;
