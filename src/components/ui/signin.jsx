import React from "react";
import logo from "../../assets/spiraleE4.png";
import { Link } from "react-router-dom";


const signin = () => {
  return (
    <div>
      <form className="max-w-lg mx-auto bg-gray-50 rounded-2xl shadow-xl m-8 p-8">
        <h3 className="text-2xl md:text-2xl font-bold flex justify-center gap-2 text-gray-800 mb-4">
          <img src={logo} alt="" className="h-8" />
          <span>
            Spiral
            <span className="text-pink-900">Event</span>
          </span>
        </h3>

        <h2 className="text-2xl font-bold mb-4 text-pink-900 flex justify-center lg:text-2xl sm:text-xl">
          Log in with your account
        </h2>

        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Full Name:
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )} */}
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Username:
              </label>
              <input
                type="text"
                placeholder="Username"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                // value={data.username}
                // onChange={(e) => setData({ ...data, username: e.target.value })}
              />
              {/* {errors.username && (
                <span className="text-red-500 text-sm">{errors.username}</span>
              )} */}
            </div>
          </div>

          <label className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            // value={data.email}
            // onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          {/* {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )} */}

          <label className="block text-gray-700 font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            // value={data.password}
            // onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          {/* {errors.password && (
            <span className="text-red-500 text-sm">{errors.password}</span>
          )} */}
        </div>

        <button
          type="submit"
          className="w-1/3 mx-auto mt-6 bg-pink-900 text-white py-3 rounded-lg flex justify-center hover:bg-pink-700 hover:scale-105 shadow-lg transition-transform duration-300"
        >
          Log in
        </button>
          <p className="text-sm text-gray-600 flex justify-center mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-pink-900 underline">
              Sign Up
            </Link>
          </p>
      </form>
    </div>
  );
};

export default signin;
