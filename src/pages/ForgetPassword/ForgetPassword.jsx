import React from "react";
import "./ForgetPassword.scss";
import { FaArrowRight } from "react-icons/fa";
import heroimg from "../../assets/forgotpass.svg";
import logo from "../../assets/spiraleE4.png";
import { Mail } from "lucide-react";
const ForgetPassword = () => {
  return (
    <div className="ForgetPassword">
      <div className=" w-full flex flex-col lg:flex-row">
        <div className="w-full h-screen lg:w-1/2 p-6 md:p-12 bg-neutral-100 flex items-center justify-center">
          <form className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl m-8 p-8">
            <h3 className="text-2xl md:text-2xl font-bold flex justify-center gap-2 text-gray-800 mb-10">
              <img src={logo} alt="" className="App-logo h-8" />
              <span>
                Spiral
                <span className="text-pink-900">Event</span>
              </span>
            </h3>
            {/*icon*/}
            <div>
              <button className="text-2xl bg-pink-900 text-white hover:text-gray-100 rounded-full p-2 duration-200">
                <FaArrowRight />
              </button>
            </div>

            <div className="text">
              <h2 className="text-4xl font-semibold text-gray-800 py-5">
                Forgot password?
              </h2>
              <p className="text-gray-700">
                Enter your email to recieve a verification code
              </p>
            </div>

            <div>
              <label
                htmlFor="email"
                className="flex pt-5 text-neutral-600 font-semibold"
              >
                <Mail className="w-4 h-6 text-gray-800 mr-2 flex items-center" />
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="e.g: example@gmail.com"
                className="forgetInput "
                required
              />
            </div>
            <div className="p-5 items-center px-4">
              <button className="w-1/3 px-2 py-2 bg-pink-900 rounded-md text-white font-semibold hover:bg-pink-700 hover:scale-105">
                Reset
              </button>
            </div>
          </form>
        </div>
        <div className="hidden lg:block lg:w-1/2 h-screen">
          <img
            src={heroimg}
            alt="Event"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
