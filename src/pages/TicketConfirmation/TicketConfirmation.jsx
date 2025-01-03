import React from 'react';
import { Check, Calendar, MapPin, Download } from 'lucide-react';

const TicketConfirmation = () => {
  return (
    <div className="min-h-screen bg-neutral-100 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-green-100 rounded-full p-2">
              <Check className="text-green-600 w-8 h-8" />
            </div>
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-center mb-2">Payment Successful!</h1>
          <p className="text-gray-600 text-center mb-6">Your ticket has been confirmed and sent to your email</p>

          <div className="border-t border-b py-4 space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Order ID</span>
              <span className="font-medium">657855772eb6b44a</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Amount Paid</span>
              <span className="font-medium">$100.00</span>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-lg p-4 mb-6">
            <h2 className="font-semibold mb-4">GitHub Universe 2023</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">December 15, 2023</p>
                  <p className="text-sm text-gray-600">9:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Yerba Buena Center</p>
                  <p className="text-sm text-gray-600">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full bg-pink-300 hover:bg-pink-400 text-black py-3 rounded-lg flex items-center justify-center">
            <Download className="w-5 h-5 mr-2" />
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketConfirmation;