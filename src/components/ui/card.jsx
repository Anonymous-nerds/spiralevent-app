import React from "react";
import { Calendar, MapPin } from "lucide-react";

const card = ({ logo, title, details, date, location }) => {
  return (
    <div className="bg-neutral-200 text-gray-900 p-5 rounded-lg shadow-sm flex items-center space-x-4 m-2">
      {/* Logo */}
      <div className="">
        <img src={logo} className="w-16 h-16 object-cover rounded-full border-4 border-pink-900 p-2" />
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
      </div>
    </div>
  );
};

export default card;
