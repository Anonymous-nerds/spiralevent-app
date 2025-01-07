import React, { useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Nav from '../../components/ui/MainNav';
import Navigation from "../../components/ui/Navigation";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    ticketCount: 1,
    dietaryRestrictions: '',
    specialRequirements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex min-h-screen bg-neutral-100">
      <Navigation />
      <div className="py-32  mx-auto flex-1 md:ml-64 px-16">
        {/* Event Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold mb-4">RSVP - GitHub Universe 2023</h1>
          <div className="space-y-3 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>December 15, 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>9:00 AM - 5:00 PM PST</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Yerba Buena Center, San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* RSVP Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-pink-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-pink-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-pink-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-pink-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Number of Tickets</label>
              <select
                name="ticketCount"
                value={formData.ticketCount}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-pink-300"
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Dietary Restrictions</label>
              <input
                type="text"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-pink-300"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Special Requirements</label>
              <textarea
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-pink-300"
              ></textarea>
            </div>
          </div>

          <div className="mt-6 border-t pt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-medium">Total Amount:</span>
              <span className="text-2xl font-bold">${formData.ticketCount * 100}.00</span>
            </div>
            <button type="submit" className="w-full bg-pink-300 hover:bg-pink-400 text-black py-3 rounded-lg">
              Complete RSVP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RSVPForm;