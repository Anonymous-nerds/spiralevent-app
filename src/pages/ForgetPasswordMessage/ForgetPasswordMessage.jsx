// import React from "react";
import image from "../../assets/reset.svg";

const ForgetPasswordMessage = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-100 flex flex-col justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-pink-900">
            Reset link has been sent to your email
          </h2>
        </div>

        <div className="flex justify-center mb-6">
          <img
            src={image}
            alt="Waitlist Illustration"
            className="h-64 w-64 object-contain"
          />
        </div>

        <div className="mb-6">
          <p className="text-gray-800 text-lg">
            Please check your inbox and follow the instructions to reset your password.
          </p>

        </div>

        <div>
          <button className="w-full py-3 bg-pink-900 text-white rounded-lg 
            hover:bg-pink-700 transition-colors duration-300 
            focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
          >
            <a href="mailto:">Check your Email</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordMessage;