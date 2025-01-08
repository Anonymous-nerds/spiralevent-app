import React, { useState } from "react";
import Navigation from "../../components/ui/Navigation";
import "./AddEvent.scss"
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/spiraleE4.png";
import { Image, MapPin, Edit, FileText, Tag, Upload, Calendar, BadgeDollarSign, Link2 } from "lucide-react";
import api from "../../../utils/api"
import axios from "axios";
import { toast } from "react-hot-toast";


const AddEvent = () => {

  //********************** Variables from env file **********************//
  const API_DEV_LINK = import.meta.env.VITE_BACKEND_DEVELOPMENT_API_LINK; // Development API link
  // const API_PRO_LINK = import.meta.env.VITE_BACKEND_PRODUCTION_API_LINK; // Production API link

  //********************** state variables **********************//
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [eventBannerBuffer, setEventBannerBuffer] = useState(null);
  const [contentType, setContentType] = useState("image/png");
  const navigate = useNavigate(); // for navigation after user successfully registers

  //********************** border colors **********************//
  const [borderColors, setBorderColors] = useState({
    eventName: "border-gray-300", description: "border-gray-300",
    location: "border-gray-300", category: "border-gray-300", eventType: "border-gray-300",
    startTime: "border-gray-300", endTime: "border-gray-300", ticketPrice: "border-gray-300",
    tags: "border-gray-300", maxAttendees: "border-gray-300",
  });

  //********************** form data **********************//
  const [data, setData] = useState({
    eventName: "", description: "", startDate: "", endDate: "",
    location: "", category: "", eventType: "", ticketPrice: "",
    eventUrl: "", tags: "", maxAttendees: "", startTime: "", endTime: "",
  });

  //********************** handle file upload **********************//
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      const mimeType = file.type;
      setContentType(mimeType); // Set the content type

      reader.onload = (e) => {
        setImagePreview(e.target.result); // For preview (base64 string)
      };
      reader.readAsDataURL(file); // For preview

      // Directly store the File object for the upload
      setEventBannerBuffer(file); // Set the file object
    }
  };


  //********************** handle input changes **********************//
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  //********************** handle form submission **********************//
  const handleSubmit = async (e) => {
    // console.log("click") // for debugging
    try {
      e.preventDefault();
      setLoading(true);

      //********************** set errors to empty object and border colors to gray **********************//
      const newErrors = {};
      const newBorderColors = { ...borderColors };

      //********************** check for empty fields **********************//
      Object.keys(data).forEach((field) => {
        if (!data[field]) {
          newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
          newBorderColors[field] = "border-red-500";
        } else { newBorderColors[field] = "border-gray-300"; }
      });

      setErrors(newErrors);
      setBorderColors(newBorderColors);

      //********************** if no errors, submit form **********************//
      // if (Object.keys(newErrors).length === 0) {
      //   const eventData = { ...formData, eventBanner: eventBannerBuffer, ContentType: contentType };

      //   //********************** make a post request to the server **********************//
      //   const response = await api.post(`/events/add`, eventData);

      //   if (response.data) {
      //     toast.success('Event created successfully!');
      //     navigate("/event/preview");
      //   }
      // }
      // const eventData = { ...formData, eventBanner: eventBannerBuffer, ContentType: contentType };

      const formData = new FormData();
      formData.append('eventName', data.eventName);
      formData.append('description', data.description);
      formData.append('startDate', data.startDate);
      formData.append('endDate', data.endDate);
      formData.append('startTime', data.startTime);
      formData.append('location', data.location);
      formData.append('category', data.category);
      formData.append('eventType', data.eventType);
      formData.append('ticketPrice', data.ticketPrice);
      formData.append('eventUrl', data.eventUrl);
      formData.append('tags', data.tags);
      formData.append('startTime', data.startTime);
      formData.append('endTime', data.endTime);
      formData.append('maxAttendees', data.maxAttendees);
      formData.append('ContentType', contentType);
      formData.append('eventBanner', eventBannerBuffer);

      console.log("Form Data: ", formData); // for debugging 

      //********************** make a post request to the server **********************//
      const response = await api.post(`/events/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data) {
        toast.success('Event created successfully!');
        navigate("/event/preview");
      }
    } catch (error) {
      console.log("Error creating event:", error);
      toast.error(error.response?.data?.error || 'Failed to create event');
    } finally { setLoading(false); }
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

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Event Name & Category */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="labelStyles">
                      <FileText className="w-4 h-4 mr-2" /> Event Name
                    </label>
                    <input type="text" name="eventName" placeholder="Enter event name" className="inputStyles"
                      value={data.eventName} onChange={handleInputChange} />
                    {errors.eventName && (<span className="text-red-500 text-sm">{errors.eventName}</span>)}
                  </div>

                  <div className="group">
                    <label className="labelStyles">
                      <Tag className="w-4 h-4 mr-2" /> Category
                    </label>
                    <select name="category" className="inputStyles" value={data.category} onChange={handleInputChange}>
                      <option value="">Select category</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="business">Business</option>
                      <option value="social">Social</option>
                    </select>
                    {errors.category && (<span className="text-red-500 text-sm">{errors.category}</span>)}
                  </div>
                </div>

                {/* Description & Image Upload */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="labelStyles">
                      <Edit className="w-4 h-4 mr-2" /> Description
                    </label>
                    <textarea name="description" rows="8" placeholder="Describe your event..." className="DesInput"
                      value={data.description} onChange={handleInputChange} />
                    {errors.description && (<span className="text-red-500 text-sm">{errors.description}</span>)}
                  </div>

                  <div className="group">
                    <label className="labelStyles">
                      <Image className="w-4 h-4 mr-2" /> Event Banner
                    </label>
                    <div className={`mt-1 border-2 border-dashed rounded-xl p-6 text-center
                        ${imagePreview ? 'border-pink-500' : 'border-gray-300'}
                        transition-all duration-200 hover:border-pink-500`}>
                      {imagePreview ? (
                        <div className="relative">
                          <img src={imagePreview} alt="Preview" className="max-h-48 mx-auto rounded-lg" />
                          <button type="button" onClick={() => setImagePreview(null)}
                            className="absolute top-2 right-2 bg-pink-900/80 text-white p-1 rounded-full
                              hover:bg-pink-700 transition-colors">×</button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <Upload className="w-12 h-12 mx-auto text-gray-400" />
                          <div className="flex flex-col items-center">
                            <input type="file" id="imageUpload" className="hidden" accept="image/*" onChange={handleImageUpload} />
                            <label htmlFor="imageUpload"
                              className="bg-pink-900 text-white px-4 py-2 rounded-full cursor-pointer
                                hover:bg-pink-700 transition-colors text-sm">
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
                    <MapPin className="w-4 h-4 mr-2" /> Location
                  </label>
                  <input type="text" name="location" placeholder="Event location or Online"
                    className="inputStyles" value={data.location} onChange={handleInputChange} />
                  {errors.location && (<span className="text-red-500 text-sm">{errors.location}</span>)}
                </div>

                {/* Dates */}
                <div className="grid md:grid-cols-2 gap-6">

                  <div className="group">
                    <label className="labelStyles">
                      <Calendar className="w-4 h-4 mr-2" /> Start Date
                    </label>
                    <input type="date" name="startDate" className="inputStyles" value={data.startDate}
                      onChange={handleInputChange} />
                    {errors.startDate && (<span className="text-red-500 text-sm">{errors.startDate}</span>)}
                  </div>

                  <div className="group">
                    <label className="labelStyles">
                      <Calendar className="w-4 h-4 mr-2" /> End Date
                    </label>
                    <input type="date" name="endDate" className="inputStyles" value={data.endDate}
                      onChange={handleInputChange} />
                    {errors.endDate && (<span className="text-red-500 text-sm">{errors.endDate}</span>)}
                  </div>
                </div>
                {/* time */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="labelStyles">
                      <Calendar className="w-4 h-4 mr-2" /> Start Time
                    </label>
                    <input type="time" name="startTime" className="inputStyles" value={data.startTime}
                      onChange={handleInputChange} />
                    {errors.startTime && (<span className="text-red-500 text-sm">{errors.startTime}</span>)}
                  </div>
                  <div className="group">
                    <label className="labelStyles">
                      <Calendar className="w-4 h-4 mr-2" /> End Time/Closing
                    </label>
                    <input type="time" name="endTime" className="inputStyles" value={data.endTime}
                      onChange={handleInputChange} />
                    {errors.endTime && (<span className="text-red-500 text-sm">{errors.endTime}</span>)}
                  </div>
                </div>

                {/* Price & URL */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="labelStyles">
                      <BadgeDollarSign className="w-4 h-4 mr-2" /> Ticket Price
                    </label>
                    <input type="number" name="ticketPrice" placeholder="0.00" className="inputStyles"
                      value={data.ticketPrice} onChange={handleInputChange} />
                    {errors.ticketPrice && (<span className="text-red-500 text-sm">{errors.ticketPrice}</span>)}
                  </div>

                  <div className="group">
                    <label className="labelStyles">
                      <Link2 className="w-4 h-4 mr-2" /> Event URL
                    </label>
                    <input type="url" name="eventUrl" placeholder="https://" className="inputStyles"
                      value={data.eventUrl} onChange={handleInputChange} />
                    {errors.eventUrl && (<span className="text-red-500 text-sm">{errors.eventUrl}</span>)}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col items-center gap-4 mt-8">
                  <button type="submit" className="submitBtn"> {loading ? "Creating..." : "Create Event"} </button>
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