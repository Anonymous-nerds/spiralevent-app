import React from "react";

const contactForm = () => {
  return (
    <div>
      <form className="max-w-lg mx-auto p-8 bg-gray-50 rounded-2xl shadow-xl m-8 p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-900">
          Contact Us
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
          <textarea
            placeholder="Enter Message"
            rows="5"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-900 focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-1/3 mx-auto mt-6 bg-pink-900 text-white py-3 rounded-lg hover:bg-pink-700 hover:scale-105 shadow-lg transition-transform duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default contactForm;
