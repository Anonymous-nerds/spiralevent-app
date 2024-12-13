import React from "react";

const btnOutline = ({ text }) => {
  return (
    <div>
      {" "}
      <button className="sm:px-6 lg:px-8 text-sm sm:text-base lg:text-lg bg-transparent py-3 px-4 border-2 border-pink-900 rounded-full text-pink-900 hover:scale-105">
        {text}
      </button>
    </div>
  );
};

export default btnOutline;
