import React, { useState } from "react";
import logo from "../../assets/spiraleE4.png";
import { Link } from "react-router-dom";
import { UserCircle, Lock } from "lucide-react";
import "../../App.css";
import "../styles.scss";

const LoginForm = () => {
  const [errors, setErrors] = useState({});
  const [borderColors, setBorderColors] = useState({
    email: "border-gray-300",
    password: "border-gray-300",
  });
  const [data, setData] = useState({ email: "", password: "", });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    const newBorderColors = { ...borderColors };

    Object.keys(data).forEach((field) => {
      if (!data[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
        newBorderColors[field] = "border-red-500";
      } else { newBorderColors[field] = "border-gray-300"; }
    });

    setErrors(newErrors);
    setBorderColors(newBorderColors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully", data);
      // Proceed with form submission logic
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-50 rounded-2xl shadow-xl m-8 p-8">
        <h3 className="text-2xl md:text-2xl font-bold flex justify-center gap-2 text-gray-800 mb-4">
          <img src={logo} alt="" className="App-logo h-8" />
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
            Email :
          </label>
          <input
            type="email" placeholder="Enter Email"
            className={`inputForm ${borderColors.email}`}
            value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          {errors.email && (<span className="text-red-500 text-sm">{errors.email}</span>)}
          <label className="text-sm text-gray-700 font-semibold mb-1 flex items-center">
            <Lock className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
            Password:
          </label>
          <input
            type="password" placeholder="Enter Password"
            className={`inputForm ${borderColors.password}`}
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          {errors.password && (<span className="text-red-500 text-sm">{errors.password}</span>)}
        </div>

        <button type="submit" className="submitBtn">Login</button>
        <p className="text-sm text-gray-600 flex gap-2 justify-center mt-4">
          Don`t have an account?{" "}
          <Link to="/register" className="text-pink-900 underline">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
