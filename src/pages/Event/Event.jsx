import React from 'react';
import Image from "../../assets/pretty.png"
import Navigation from "../../components/ui/Navigation";
import { Calendar, MapPin, Clock, Share2, Users } from 'lucide-react';


const EventPage = () => {
  return (
    <div className="flex min-h-screen bg-neutral-100">
      <Navigation />
      <div className="flex-1 md:ml-64">

        {/* Hero Section */}
        <div className="relative h-96">
          <img
            src={Image}
            alt="GitHub Universe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">GitHub Universe 2023</h1>
              <p className="text-lg opacity-90">The global AI-powered developer event</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column */}
            <div className="flex-grow">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">About the Event</h2>
                <p className="text-gray-600 mb-4">
                  Join us for GitHub Universe 2023, where we`ll explore the future of software development.
                  Learn about AI-powered developer experiences, cloud development environments,
                  and advanced security in hands-on workshops and technical sessions.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <span>December 15, 2023</span>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span>9:00 AM - 5:00 PM PST</span>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span>Yerba Buena Center, San Francisco, CA</span>
                  </div>
                  <div className="flex gap-3">
                    <Users className="w-5 h-5 text-gray-500" />
                    <span>500 attendees expected</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">What to expect:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Keynotes from industry leaders</li>
                    <li>Technical workshops and demos</li>
                    <li>Networking opportunities</li>
                    <li>Hands-on product experiences</li>
                  </ul>
                </div>
              </div>

              {/* Schedule Preview */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Schedule Highlights</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-pink-300 pl-4">
                    <p className="text-sm text-gray-500">9:00 AM</p>
                    <p className="font-medium">Opening Keynote</p>
                  </div>
                  <div className="border-l-4 border-pink-300 pl-4">
                    <p className="text-sm text-gray-500">11:00 AM</p>
                    <p className="font-medium">AI in Development Workshop</p>
                  </div>
                  <div className="border-l-4 border-pink-300 pl-4">
                    <p className="text-sm text-gray-500">2:00 PM</p>
                    <p className="font-medium">Future of Cloud Development</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-80">
              <div className="sticky top-8">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold">$100.00</span>
                    <span className="text-gray-600">/person</span>
                  </div>
                  <button className="w-full bg-pink-300 hover:bg-pink-400 text-black py-3 rounded-lg mb-4">
                    RSVP Now
                  </button>
                  <button className="w-full border border-gray-200 hover:bg-gray-50 py-3 rounded-lg flex items-center justify-center">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Event
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default EventPage;