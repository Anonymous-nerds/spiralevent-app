import React, { useState } from "react";
import logo from "../../assets/spiraleE4.png";
import { Link } from "react-router-dom";
import { User, UserCircle, Mail, Lock } from "lucide-react";
import "../../App.css"

const RegisterForm = () => {
  const [errors, setErrors] = useState({});
  const [borderColors, setBorderColors] = useState({
    name: "border-gray-300",
    username: "border-gray-300",
    email: "border-gray-300",
    password: "border-gray-300",
    conPassword: "border-gray-300",
  });
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    conPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    const newBorderColors = { ...borderColors };

    Object.keys(data).forEach((field) => {
      if (!data[field]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
        newBorderColors[field] = "border-red-500";
      } else {
        newBorderColors[field] = "border-gray-300";
      }
    });

    if (
      data.password &&
      data.conPassword &&
      data.password !== data.conPassword
    ) {
      newErrors.conPassword = "Passwords do not match";
      newBorderColors.conPassword = "border-red-500";
    }

    setErrors(newErrors);
    setBorderColors(newBorderColors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully", data);
      // Proceed with form submission logic
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-50 rounded-2xl shadow-xl mt-10 p-8"
      >
        <h3 className="text-2xl md:text-2xl font-bold flex justify-center gap-2 text-gray-800 mb-4">
          <img src={logo} alt="" className=" App-logo h-8" />
          <span>
            Spiral
            <span className="text-pink-900">Event</span>
          </span>
        </h3>

        <h2 className="text-2xl font-bold mb-6 text-pink-900 flex justify-center">
          Create an Account
        </h2>

        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700 font-semibold flex items-center mb-1">
                <User className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
                Full Name:
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className={`w-full border ${borderColors.name} rounded-lg p-2 focus:ring-2 focus:ring-pink-900 focus:outline-none`}
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>
            <div>
              <label className="text-sm text-gray-700 font-semibold mb-1 flex items-center">
                <UserCircle className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
                Username:
              </label>
              <input
                type="text"
                placeholder="Username"
                className={`w-full border ${borderColors.username} rounded-lg p-2 focus:ring-2 focus:ring-pink-900 focus:outline-none`}
                value={data.username}
                onChange={(e) => setData({ ...data, username: e.target.value })}
              />
              {errors.username && (
                <span className="text-red-500 text-sm">{errors.username}</span>
              )}
            </div>
          </div>

          <label className="text-sm text-gray-700 font-semibold mb-1 flex items-center">
            <Mail className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className={`w-full border ${borderColors.email} rounded-lg p-2 focus:ring-2 focus:ring-pink-900 focus:outline-none`}
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}

          <label className="text-sm text-gray-700 font-semibold mb-1 flex items-center">
            <Lock className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
            Create Password:
          </label>
          <input
            type="password"
            placeholder="Create Password"
            className={` text-sm w-full border ${borderColors.password} rounded-lg p-2 focus:ring-2 focus:ring-pink-900 focus:outline-none`}
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password}</span>
          )}

          <label className="text-sm text-gray-700 font-semibold mb-1 flex items-center">
            <Lock className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
            Confirm Password:
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className={`w-full border ${borderColors.conPassword} rounded-lg p-2 focus:ring-2 focus:ring-pink-900 focus:outline-none`}
            value={data.conPassword}
            onChange={(e) => setData({ ...data, conPassword: e.target.value })}
          />
          {errors.conPassword && (
            <span className="text-red-500 text-sm">{errors.conPassword}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-1/3 text-sm mx-auto mt-6 bg-pink-900 text-white py-3 rounded-lg flex justify-center hover:bg-pink-700 hover:scale-105 shadow-lg transition-transform duration-300"
        >
          Sign Up
        </button>
        <p className="text-sm text-gray-600 flex gap-2 justify-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-900 underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
