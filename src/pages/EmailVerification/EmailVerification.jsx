import React, { useState } from "react";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import OtpInput from "react-otp-input";
import heroimg from "../../assets/verify.svg"
import logo from "../../assets/spiraleE4.png"
import axios from "axios";
import { toast } from "react-hot-toast";

const EmailVerification = () => {

  //********************** Variables from env file **********************//
  const API_DEV_LINK = import.meta.env.VITE_BACKEND_DEVELOPMENT_API_LINK; // Development API link
  // const API_PRO_LINK = import.meta.env.VITE_BACKEND_PRODUCTION_API_LINK; // Production API link

  //********************** state variables **********************//
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  //********************** variables **********************//
  const email = location.state?.email;
  const userID = location.state?.userID;
  const navigate = useNavigate(); // for navigation after user successfully registers
  //console.log(email); // for debugging
  //********************** opt input styles **********************//
  const containerStyle = { display: "flex", justifyContent: "center", gap: "10px", };
  const inputStyle = {
    width: "50px", height: "50px", fontSize: "18px", textAlign: "center", border: "1px solid #ccc",
    borderRadius: "5px", outline: "none", transition: "border-color 0.2s ease-in-out",
  };
  const inputFocusStyle = { borderColor: "#007BFF", boxShadow: "0 0 3px rgba(0, 123, 255, 0.5)", };

  //********************** handle form submission **********************//
  const handleEmailValidation = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      //********************** prepare data to be sent to the server **********************//
      const data = { email, otp };
      //console.log(data) //for debugging
      //********************** make a post request to the server **********************//
      await axios.post(`${API_DEV_LINK}/auth/verifyOPT`, data).then((res) => {
        console.log("Response: ", res);
        console.log("Response data: ", res.data);
        toast.success(res.data.message);
        navigate("/auth/login");
      }).catch((error) => {
        console.log(error);
        toast.error(error.response.data.error);
        if (error.message) {
          toast.error(error.message);
        } else {
          toast.success(error.response.data.error);
        }
      });
      //console.log(otp);
    } catch (error) { console.log(error); } finally { setLoading(false); }
  }

  //********************** handle resend otp **********************//
  const handleResendOTP = async () => {
    //********************** prepare resend data to be sent to the server **********************//
    const resendData = { userID, email };
    //console.log(resendData) //for debugging
    //********************** make a post request to the server **********************//
    await axios.post(`${API_DEV_LINK}/resendOPT`, resendData).then((res) => {
      console.log("Response: ", res);
      console.log("Response data: ", res.data);
      toast.success("OTP Resend Successful");
    }).catch((err) => {
      console.log(err);
      toast.success(err.response.data.error);
    });

  }

  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full h-screen lg:w-1/2 p-6 md:p-12 bg-neutral-100 flex items-center justify-center">
        <form onSubmit={handleEmailValidation} className="max-w-lg mx-auto bg-white rounded-2xl shadow-sm m-8 p-8">
          <h3 className="text-2xl md:text-2xl font-bold flex justify-center gap-2 text-gray-800 mb-6">
            <img src={logo} alt="" className="App-logo h-8" />
            <span>Spiral<span className="text-pink-900">Event</span>
            </span>
          </h3>
          <div className="smallerdiv">
            <div>
              <button className="text-xl bg-pink-900 text-white hover:text-gray-100 rounded-full p-2 duration-200">
                <Link to={"/register"}> <FaArrowLeft /></Link>
              </button>
            </div>

            <div className="words py-5 px-6">
              <h3 className="text-2xl text-gray-800 font-bold">
                Email Verification
              </h3>
              <h2 className="text-gray-600 pt-2">
                We sent a code to{" "}
                <span className="font-bold text-black">
                  {email}
                </span>
              </h2>
            </div>

            <div className="py-5">
              <OtpInput value={otp} onChange={setOtp} numInputs={4} renderSeparator={<span>-</span>}
                containerStyle={containerStyle} inputStyle={inputStyle} renderInput={(props) => (
                  <input
                    {...props}
                    style={{
                      ...inputStyle, ...(props.focused ? inputFocusStyle : {}),
                    }}
                  />
                )}
              />
            </div>

            <div className="pt-5 flex justify-center">
              <button type="submit" className="h-[40px] w-2/3 text-sm text-white bg-pink-900 rounded-md font-semibold hover:bg-pink-700 hover:scale-105 shadow-md">

                {loading ? "Verifying..." : "Verify"}
              </button>
            </div>
            <div className="pt-5">
              <h2 className="text-gray-600 flex items-center pl-4">
                Didn`t receive the email?{" "}
                <button onClick={handleResendOTP} type="button" className="text-blue-700 cursor-pointer underline pl-2">
                  {" "}
                  Click Here
                </button>
              </h2>
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

export default EmailVerification;
