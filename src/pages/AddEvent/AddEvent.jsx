import React, { useState } from "react";
import Navigation from "../../components/ui/Navigation";
import "./AddEvent.scss"
import { Link } from "react-router-dom";
import logo from "../../assets/spiraleE4.png";
import { Image, MapPin, Edit, FileText, Tag, Upload, Calendar, BadgeDollarSign, Link2 } from "lucide-react";

const AddEvent = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="AddEvent flex min-h-screen bg-neutral-100">
      <Navigation />
      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto overflow-hidden shadow-sm rounded-xl">
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <img src={logo} alt="Spiral Logo" className="h-10 w-10 animate-spin-slow" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Spiral<span className="text-pink-900">Event</span>
                </h3>
              </div>

              {/* Title Banner */}
              <div className="title">
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Create Event</h2>
              </div>

              <form className="space-y-6">
                {/* Event Name & Category */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="labelStyles">
                      <FileText className="w-4 h-4 mr-2" />
                      Event Name
                    </label>
                    <input type="text" placeholder="Enter event name" className="inputStyles" />
                  </div>

                  <div className="group">
                    <label className="labelStyles">
                      <Tag className="w-4 h-4 mr-2" />
                      Category
                    </label>
                    <select className="inputStyles">
                      <option value="" disabled selected>Select category</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="business">Business</option>
                      <option value="social">Social</option>
                    </select>
                  </div>
                </div>

                {/* Description & Image Upload */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="labelStyles">
                      <Edit className="w-4 h-4 mr-2" />
                      Description
                    </label>
                    <textarea rows="8" placeholder="Describe your event..." className="DesInput" />
                  </div>

                  <div className="group">
                    <label className="labelStyles">
                      <Image className="w-4 h-4 mr-2" />
                      Event Banner
                    </label>
                    <div className={`mt-1 border-2 border-dashed rounded-xl p-6 text-center
                     ${imagePreview ? 'border-pink-500' : 'border-gray-300'}
                      transition-all duration-200 hover:border-pink-500`}>
                      {imagePreview ? (
                        <div className="relative">
                          <img src={imagePreview} alt="Preview" className="max-h-48 mx-auto rounded-lg" />
                          <button
                            type="button"
                            onClick={() => setImagePreview(null)}
                            className="absolute top-2 right-2 bg-pink-900/80 text-white p-1 rounded-full
                        hover:bg-pink-700 transition-colors">
                            ×
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <Upload className="w-12 h-12 mx-auto text-gray-400" />
                          <div className="flex flex-col items-center">
                            <input type="file" id="imageUpload" className="hidden" accept="image/*" onChange={handleImageUpload} />
                            <label
                              htmlFor="imageUpload"
                              className="bg-pink-900 text-white px-4 py-2 rounded-full cursor-pointer
                           hover:bg-pink-700 transition-colors text-sm"
                            >
                              Choose Image
                            </label>
                            <p className="mt-2 text-xs text-gray-500">PNG, JPG up to 5MB</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="group">
                  <label className="labelStyles">
                    <MapPin className="w-4 h-4 mr-2" /> Location </label>
                  <input type="text" placeholder="Event location or Online" className="inputStyles"
                  />
                </div>

                {/* Dates */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="labelStyles">
                      <Calendar className="w-4 h-4 mr-2" /> Start Date
                    </label>
                    <input type="date" className="inputStyles" />
                  </div>

                  <div className="group">
                    <label className="labelStyles">
                      <Calendar className="w-4 h-4 mr-2" />End Date
                    </label>
                    <input type="date" className="inputStyles" />
                  </div>
                </div>

                {/* Price & URL */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="labelStyles">
                      <BadgeDollarSign className="w-4 h-4 mr-2" />Ticket Price
                    </label>
                    <input type="number" placeholder="0.00" className="inputStyles" />
                  </div>

                  <div className="group">
                    <label className="labelStyles">
                      <Link2 className="w-4 h-4 mr-2" /> Event URL
                    </label>
                    <input type="url" placeholder="https://" className="inputStyles" />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col items-center gap-4 mt-8">
                  <button type="submit" className="submitBtn">Create Event</button>
                  <p className="text-sm text-gray-600">
                    Need a banner?{" "}
                    <Link to="/create-banner" className="text-pink-900 hover:text-pink-700 underline">
                      Create one here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;