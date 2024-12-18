import React from "react";
import logo from '../../assets/spiraleE4.png'

const contactForm = () => {
  return (
    <div>
      <form className="max-w-lg mx-auto bg-gray-50 rounded-2xl shadow-xl m-8 p-8">
        {/* <h3 className="text-3xl md:text-4xl font-bold flex gap-3 text-gray-800 mb-2">
          <img src={logo} alt="" className="h-10" />{" "}
          <span>
            Spiral
            <span className="text-pink-900">Event</span>
          </span>
        </h3> */}

        <h2 className="text-2xl font-bold mb-4 text-pink-900 flex justify-center">
          Create an Account
        </h2>

        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                First Name:
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Last Name:
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-900 focus:outline-none"
              />
            </div>
          </div>
          <label className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-900 focus:outline-none"
          />
          <label className="block text-gray-700 font-bold mb-2">
            Create Password:
          </label>
          <input
            type="password"
            placeholder="create password"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-900 focus:outline-none"
          />
          <label className="block text-gray-700 font-bold mb-2">
            Confirm Password:{" "}
          </label>
          <input
            type="password"
            placeholder="confirm password"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-900 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-1/3 mx-auto mt-6 bg-pink-900 text-white py-3 rounded-lg flex justify-center hover:bg-pink-700 hover:scale-105 shadow-lg transition-transform duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default contactForm;
