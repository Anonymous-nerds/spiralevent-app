import React, { useState } from "react";
import "./ForgetPassword.scss";
import { FaArrowLeft } from "react-icons/fa";
import heroimg from "../../assets/forgotpass.svg";
import logo from "../../assets/spiraleE4.png";
import { Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";


const ForgetPassword = () => {
  //********************** Variables from env file **********************//
  //const API_DEV_LINK = import.meta.env.VITE_BACKEND_DEVELOPMENT_API_LINK; // Development API link
  const API_PRO_LINK = import.meta.env.VITE_BACKEND_PRODUCTION_API_LINK; // Production API link

  const navigate = useNavigate(); // for navigation after user successfully registers

  //********************** state variables **********************//
  const [errors, setErrors] = useState({});
  const [borderColors, setBorderColors] = useState({ email: "border-gray-300" });
  const [loading, setLoading] = useState(false);

  //********************** form data **********************//
  const [data, setData] = useState({ email: "" });

  //********************** handle forget form submission **********************//
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
      //********************** check for valid email **********************//
      setErrors(newErrors);
      setBorderColors(newBorderColors);

      //  console.log("Output", newErrors);
      // console.log(Object.keys(newErrors));
      if (Object.keys(newErrors).length === 0) {
        //console.log("Form submitted successfully", data); //for debugging
        // Proceed with form submission logic
        //********************** make a post request to the server **********************//
        await axios.post(`${API_PRO_LINK}/forgot-password`, data).then((res) => {
          console.log("Response: ", res);
          console.log("Response data: ", res.data);
          //**********************  show success message ********************** //
          toast.success(res.data.message);
          //**********************  naviage to success ********************** //
          navigate("/success");
        }).catch((error) => {
          console.log(error);
          toast.error(error.response.data.error);
          if (error.message) { toast.error(error.message); }
          else { toast.error(error.response.data.error); }
        });
      }


    } catch (error) { console.log(error); } finally { setLoading(false); }
  }

  return (
    <div className="ForgetPassword">
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full h-screen lg:w-1/2 p-6 md:p-12 bg-neutral-100 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white rounded-2xl shadow-sm m-8 p-8">
            <h3 className="text-2xl md:text-2xl font-bold flex justify-center gap-2 text-gray-800 mb-10">
              <img src={logo} alt="" className="App-logo h-8" />
              <span>Spiral<span className="text-pink-900">Event</span> </span>
            </h3>
            {/*icon*/}
            <div>
              <button type="button" className="backBtn">
                <Link to={"/"}><FaArrowLeft /></Link>
              </button>
            </div>

            <div className="text">
              <h2 className="text-3xl font-semibold text-gray-800 py-5 pb-2">Forgot password? </h2>
              <p className="text-gray-700 text-sm"> Enter your email to recieve a verification code </p>
            </div>

            <div>
              <label htmlFor="email" className="flex pt-5 text-neutral-600 font-semibold" >
                <Mail className="w-4 h-6 text-gray-800 mr-2 flex items-center" />
                Email:
              </label>
              <input type="email" id="email" name="email" placeholder="e.g: example@gmail.com"
                className={`forgetInput ${borderColors.email}`} value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })} autoCorrect="on" autoCapitalize="off"
                autoComplete="email" />
              <div className="">{errors.email && (<span className="text-red-500 w-full text-sm">{errors.email}</span>)}</div>
            </div>
            <div className=""></div>
            <div className="p-5 items-center px-4">
              <button type="submit" disabled={loading} className="resetBtn">{loading ? "Processing..." : "Reset"}</button>
            </div>
          </form>
        </div>
        <div className="hidden lg:block lg:w-1/2 h-screen">
          <img src={heroimg} alt="Event" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
