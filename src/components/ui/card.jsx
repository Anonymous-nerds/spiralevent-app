import React from "react";
import { Calendar, MapPin } from "lucide-react";

const card = ({ logo, title, details, date, location }) => {
  return (
    <div className="bg-neutral-100 text-pink-900 p-6 rounded-lg shadow-xl max-w-lg w-full flex items-center space-x-4 m-9">
      {/* Logo */}
      <div className="bg-neutral-200 rounded-xl p-6 w-1/3">
        <img
          src={logo}
          className="w-20 h-20 object-cover rounded-full border-4 border-pink-900 p-2"
        />
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
