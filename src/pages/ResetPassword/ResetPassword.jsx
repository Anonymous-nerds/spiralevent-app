import React from "react";
import "./ResetPassword.scss";
import { FaArrowRight } from "react-icons/fa";
import heroimg from "../../assets/reset.svg";
import logo from "../../assets/spiraleE4.png";
import {Lock, LockKeyhole} from "lucide-react"

const ResetPassword = () => {
  return (
    <div className=" w-full flex flex-col lg:flex-row">
      <div className="w-full h-screen lg:w-1/2 p-6 md:p-12 bg-neutral-100 flex items-center justify-center">
        <form className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl m-8 p-8">
          <h3 className="text-2xl md:text-2xl font-bold flex justify-center gap-2 text-gray-800 mb-8">
            <img src={logo} alt="" className="App-logo h-8" />
            <span>
              Spiral
              <span className="text-pink-900">Event</span>
            </span>
          </h3>
          <div className="ResetPassword">
            <div className="smallerdiv ">
              {/*icon*/}
              <div>
                <button className="text-2xl bg-pink-900 text-white hover:text-gray-100 rounded-full p-2 duration-200">
                  <FaArrowRight />
                </button>
              </div>

              <div className="words pt-10">
                <h2 className="text-4xl text-gray-800 font-semibold">
                  Enter your new password
                </h2>
                {/*note for smaller screen set to text-4xl also change text to must be diifrent to prev*/}
                <h3 className="text-gray-600 pt-5 font-semibold  ">
                  Your new password must be different to previous passwords.{" "}
                </h3>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="LabelI flex pt-5 text-neutral-600 font-semibold"
                >
                  <Lock className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
                  Create Password:
                </label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Enter new password"
                  className="restInput "
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="LabelI flex pt-5 text-neutral-600  font-semibold"
                >
                  <LockKeyhole className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
                  Confirm Password:
                </label>
                <input
                  type="password"
                  name="pass2"
                  id="pass2"
                  placeholder="Confirm password"
                  className="restInput"
                />
              </div>

              <div className="pt-8">
                <button className="restBtn hover:scale-105 py-2 px-2">
                  Reset password
                </button>
              </div>
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

export default ResetPassword;
