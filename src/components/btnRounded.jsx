import React from "react";

const btnRounded = ({ text }) => {
  return (
    <div>
      <button
        type="submit"
        className="sm:px-6 lg:px-8 text-sm sm:text-base lg:text-lg bg-pink-900 text-white py-3 px-3 rounded-full hover:bg-pink-700 transition-colors duration-300 ease-in-out"
      >
        {text}
      </button>
    </div>
  );
};

export default btnRounded;
