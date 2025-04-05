// import React from "react";

const PIForm = () => {
  return (
    <div>
      <form className="max-w-xl mx-auto p-8 m-8 bg-neutral-50 rounded-lg shadow-xl">
        {/* Personal Information Section */}
        <fieldset className="border border-gray-300 rounded-lg p-4 mb-6">
          <legend className="text-lg font-semibold text-pink-900 px-2 text-center">
            Personal Information
          </legend>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  First Name:
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-900 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Last Name:
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-900 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  placeholder="+234 123 456 7890"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-900 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Date of Birth:
                </label>
                <input
                  type="date"
                  placeholder="01-12-2000"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-900 focus:outline-none"
                />
              </div>
            </div>
            <label className="block text-gray-700 font-bold mb-2">Email:</label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className=" w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-900 focus:outline-none"
            />
          </div>
        </fieldset>

        {/* Account Details Section */}
        <fieldset className="border border-gray-300 rounded-lg p-4">
          <legend className="text-lg font-semibold text-pink-900 px-2 text-center">
            Account Details
          </legend>
          <div className="space-y-4">
            <label className="block text-gray-700 font-bold mb-2">
              Create Password:
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-900 focus:outline-none"
            />
            <label className="block text-gray-700 font-bold mb-2">
              Confirm Password:
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-900 focus:outline-none"
            />
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-1/2 mt-6 bg-pink-900 text-white py-3 rounded-lg mx-auto flex justify-center hover:bg-pink-700 shadow-lg transition-transform duration-300 active:scale-95 transform ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PIForm;
