import { useState } from "react";
import "./ResetPassword.scss";
import { FaArrowLeft } from "react-icons/fa";
import heroimg from "../../assets/reset.svg";
import logo from "../../assets/spiraleE4.png";
import { Lock, LockKeyhole } from "lucide-react"
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";


const ResetPassword = () => {

  //********************** Variables from env file **********************//
  //const API_DEV_LINK = import.meta.env.VITE_BACKEND_DEVELOPMENT_API_LINK; // Development API link
  const API_LINK = import.meta.env.VITE_BACKEND_API_LINK; // Production API link

  //********************** state variables **********************//
  const { token } = useParams();
  console.log(token); // for debugging
  const navigate = useNavigate(); // for navigation after user successfully reset
  const [errors, setErrors] = useState({});
  const [borderColors, setBorderColors] = useState({
    conPassword: "border-gray-300", password: "border-gray-300",
  });
  const [loading, setLoading] = useState(false);
  //********************** form data **********************//
  const [data, setData] = useState({ password: "", conPassword: "", });

  //********************** handle reset password submission **********************//
  const handleResetPassword = async (e) => {
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
      if (Object.keys(newErrors).length === 0) {
        // console.log("Form submitted successfully", data); //for debugging
        //********************** make a post request to the server **********************//
        await axios.post(`${API_LINK}/reset-password/${token}`, data).then((res) => {
          console.log("Response: ", res);
          console.log("Response data: ", res.data);
          //**********************  show success message ********************** //
          toast.success(res.data.message);
          //**********************  naviage to next page ********************** //
          navigate("/auth/login");
        }).catch((error) => {
          console.log(error);
          toast.error(error.response.data.message);
          if (error.message) {
            toast.error(error.message);
          } else {
            toast.error(error.response.data.error);
          }
        });
      }
    } catch (error) { console.log(error); } finally { setLoading(false); }
  }



  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full h-screen lg:w-1/2 p-6 md:p-12 bg-neutral-100 flex items-center justify-center">
        <form onSubmit={handleResetPassword} className="max-w-lg mx-auto bg-white rounded-2xl shadow-sm m-8 p-8">
          <h3 className="text-2xl md:text-2xl font-bold flex justify-center gap-2 text-gray-800 mb-8">
            <img src={logo} alt="" className="App-logo h-8" />
            <span> Spiral <span className="text-pink-900">Event</span> </span>
          </h3>
          <div className="ResetPassword">
            <div className="smallerdiv ">
              {/*icon*/}
              <div>
                <button className="text-2xl bg-pink-900 text-white hover:text-gray-100 rounded-full p-2 duration-200">
                  <Link to={"/"}> <FaArrowLeft /></Link>
                </button>
              </div>

              <div className="words pt-8">
                <h2 className="text-3xl text-gray-800 font-semibold">
                  Reset Password
                </h2>
                {/*note for smaller screen set to text-4xl also change text to must be diifrent to prev*/}
                <h3 className="text-gray-600 pt-2 text-sm ">
                  Enter New Password. Your new password must be different to previous passwords.{" "}
                </h3>
              </div>

              <div>
                <label htmlFor="email" className="LabelI flex pt-5 text-neutral-600 font-semibold">
                  <Lock className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
                  Create Password:
                </label>
                <input type="password" name="password" id="password" placeholder="Enter new password"
                  className={`restInput ${borderColors.password}`} value={data.password}
                  onChange={(e) => setData({ ...data, password: e.target.value })} />
                <div className="">{errors.password && (<span className="text-red-500 text-sm">{errors.password}</span>)}</div>

              </div>

              <div>
                <label htmlFor="email" className="LabelI flex pt-5 text-neutral-600 font-semibold">
                  <LockKeyhole className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
                  Confirm Password:
                </label>
                <input type="password" name="conPassword" id="conPassword" placeholder="Confirm password"
                  className={`restInput ${borderColors.conPassword}`} value={data.conPassword}
                  onChange={(e) => setData({ ...data, conPassword: e.target.value })} />
                <div className="">   {errors.conPassword && (<span className="text-red-500 text-sm">{errors.conPassword}</span>)}</div>
              </div>

              <div className="pt-8">
                <button className="restBtn hover:scale-105 py-2 px-2">
                  {loading ? "Reseting..." : "Reset password"}</button>
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
