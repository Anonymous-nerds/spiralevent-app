import React from 'react'
import logo from "../assets/spiraleE4.png"
import { Calendar, MapPin } from "lucide-react";

const card = () => {
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
        <h3 className="text-xl font-bold">Spiral Event</h3>
        <p className="flex items-center text-sm mt-2">
          Join us, as we Unlock the Future of AI-Driven Event Management.
        </p>
        <p className="flex items-center text-sm mt-2">
          <Calendar className="w-4 h-4 mr-2" />
          13th Dec 2024, 7:00 PM
        </p>
        <p className="flex items-center text-sm mt-1">
          <MapPin className="w-4 h-4 mr-2" />
          Bayero University, Kano
        </p>
      </div>
    </div>
  );
}

export default card