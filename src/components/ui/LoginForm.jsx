import React from "react";
import logo from "../../assets/spiraleE4.png";
import { Link } from "react-router-dom";
import { UserCircle, Lock } from "lucide-react";
import "../../App.css"

const LoginForm = () => {
  return (
    <div>
      <form className="max-w-lg mx-auto bg-gray-50 rounded-2xl shadow-xl m-8 p-8">
        <h3 className="text-2xl md:text-2xl font-bold flex justify-center gap-2 text-gray-800 mb-4">
          <img src={logo} alt="" className=" App-logo h-8" />
          <span>
            Spiral
            <span className="text-pink-900">Event</span>
          </span>
        </h3>

        <h2 className="text-2xl font-bold mb-5 text-pink-900 flex justify-center lg:text-2xl sm:text-xl">
          Log in with your account
        </h2>

        <div className="space-y-4">
          <label className="text-sm text-gray-700 font-semibold mb-1 flex items-center">
            <UserCircle className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-900"
            // value={data.email}
            // onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          {/* {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )} */}

          <label className="text-sm text-gray-700 font-semibold mb-1 flex items-center">
            <Lock className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-900"
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
        <p className="text-sm text-gray-600 flex gap-2 justify-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-pink-900 underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
