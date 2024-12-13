import React from "react";

const btnPrimary = ({ text }) => {
  return (
    <div>
      <button className="sm:px-6 lg:px-8 text-sm sm:text-base lg:text-lg bg-pink-900 text-white py-3 px-4 rounded transition-transform duration-300 hover:bg-pink-700 hover:scale-105">
        {text}
      </button>
    </div>
  );
};

export default btnPrimary;
