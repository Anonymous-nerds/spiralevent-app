import React, { useState } from "react";
import logo from "../../assets/spiraleE4.png";
import { Link, useNavigate } from "react-router-dom";
import { User, UserCircle, Mail, Lock } from "lucide-react";
import "../../App.css";
import "../styles.scss";
import axios from "axios";
import { toast } from "react-hot-toast";

const RegisterForm = () => {

  //********************** Variables from env file **********************//
  const API_DEV_LINK = import.meta.env.VITE_BACKEND_DEVELOPMENT_API_LINK; // Development API link
  // const API_PRO_LINK = import.meta.env.VITE_BACKEND_PRODUCTION_API_LINK; // Production API link

  const navigate = useNavigate(); // for navigation after user successfully registers

  //********************** state variables **********************//
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  //********************** border colors **********************//
  const [borderColors, setBorderColors] = useState({
    name: "border-gray-300",
    username: "border-gray-300",
    email: "border-gray-300",
    password: "border-gray-300",
  });
  //********************** form data **********************//
  const [data, setData] = useState({ name: "", username: "", email: "", password: "", role: "User" });

  //********************** handle form submission **********************//
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      //********************** set errors to empty object and border colors to gray **********************//
      const newErrors = {};
      const newBorderColors = { ...borderColors };

      //********************** check for empty fields **********************//
      Object.keys(data).forEach((field) => {
        if (!data[field]) {
          newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
          newBorderColors[field] = "border-red-500";
        } else { newBorderColors[field] = "border-gray-300"; }
      });
      //********************** check for password match **********************//
      // if (data.password && data.conPassword && data.password !== data.conPassword) {
      //   newErrors.conPassword = "Passwords do not match";
      // }
      //********************** check for valid email **********************//
      setErrors(newErrors);
      setBorderColors(newBorderColors);

      //********************** if no errors, submit form **********************
      if (Object.keys(newErrors).length === 0) {
        // console.log("Form submitted successfully", data); //for debugging
        //********************** make a post request to the server **********************//
        await axios.post(`${API_DEV_LINK}/auth/register`, data).then((res) => {
          console.log("Response: ", res);
          console.log("Response data: ", res.data);
          toast.success(res.data.message);
          navigate("/auth/email-verification", { state: { email: res.data.email, userID: res.data.id } });
        }).catch((error) => {
          console.log(error);
          toast.error(error.response.data.error);
          if (error.message) {
            toast.error(error.message);
          } else {
            toast.error(error.response.data.error);
          }
        });
      }
    } catch (error) { console.log(error); } finally { setLoading(false); }
  };

  return (
    <div className="RegisterForm">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-50 rounded-2xl shadow-sm mt-10 p-8">
        <h3 className="text-2xl md:text-2xl font-bold flex justify-center gap-2 text-gray-800 mb-4">
          <img src={logo} alt="" className="App-logo h-8" />
          <span>Spiral <span className="text-pink-900">Event</span></span>
        </h3>

        <h2 className="text-2xl font-bold mb-6 text-pink-900 flex justify-center">Create an Account</h2>

        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700 font-semibold flex items-center mb-1">
                <User className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
                Full Name:
              </label>
              <input type="text" placeholder="Full Name" className={`inputForm ${borderColors.name}`}
                value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}
                autoCorrect="on" autoCapitalize="on" autoComplete="name" />
              {errors.name && (<span className="text-red-500 text-sm">{errors.name}</span>)}
            </div>
            <div>
              <label className="text-sm text-gray-700 font-semibold mb-1 flex items-center">
                <UserCircle className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
                Username:
              </label>
              <input type="text" placeholder="Username" className={`inputForm ${borderColors.username}`}
                value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })}
                autoCorrect="on" autoCapitalize="on" autoComplete="username" />
              {errors.username && (<span className="text-red-500 text-sm">{errors.username}</span>)}
            </div>
          </div>

          <label className="text-sm text-gray-700 font-semibold mb-1 flex items-center">
            <Mail className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
            Email:
          </label>
          <input type="email" placeholder="Enter Email" className={`inputForm ${borderColors.email}`}
            value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
            autoCorrect="on" autoCapitalize="off" autoComplete="email" />
          {errors.email && (<span className="text-red-500 text-sm">{errors.email}</span>)}

          <label className="text-sm text-gray-700 font-semibold mb-1 flex items-center">
            <Lock className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
            Create Password:
          </label>
          <input type="password" placeholder="Create Password" className={`inputForm ${borderColors.password}`}
            value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}
            autoCorrect="on" autoCapitalize="on" autoComplete="password" />
          {errors.password && (<span className="text-red-500 text-sm">{errors.password}</span>)}
        </div>

        <button type="submit" disabled={loading} className="submitBtn">{loading ? "Registering..." : "Register"}</button>
        <p className="text-sm text-gray-600 flex gap-2 justify-center mt-4">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-pink-900 underline">Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
