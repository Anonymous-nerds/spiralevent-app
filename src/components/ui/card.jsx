import React from "react";
import { Calendar, MapPin } from "lucide-react";

const card = ({ logo, title, details, date, location }) => {
  return (
    <div className="bg-pink-900 text-gray-100 p-5 rounded-lg shadow-sm flex items-center space-x-4 m-2">
      {/* Logo */}
      <div className="">
        <img src={logo} className="w-16 h-16 object-fit rounded-full border-3 border-gray-200 p-2" />
      </div>

      {/* Event Details */}
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="flex items-center text-sm mt-2">{details}</p>
        <p className="flex items-center text-sm mt-2">
          <Calendar className="w-4 h-4 mr-2" />
          {date}
        </p>
        <p className="flex items-center text-sm mt-1">
          <MapPin className="w-4 h-4 mr-2" />
          {location}
        </p>
        <div className="mt-3">
          <button className="p-3 bg-white text-black rounded-3xl text-sm px-10">View Event</button>
        </div>
      </div>
    </div>
  );
};

export default card;
