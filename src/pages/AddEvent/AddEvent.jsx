import React, {useState} from "react";
import Nav from "../../components/ui/Nav.jsx";
import { Link } from "react-router-dom";
import logo from "../../assets/spiraleE4.png"
import { Image, MapPin, Edit, FileText, Tag, CloudUploadIcon, Calendar, BadgeDollarSign,Link2 } from "lucide-react";

const AddEvent = () => {
  return (
    <div>
      <Nav />
      <div>
        <div className="sm:w-1/2 relative lg:w-full p-6 md:p-12 bg-neutral-100 flex items-center justify-center">
          <form className=" lg:w-3/4 mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl md:text-2xl font-bold flex justify-center gap-2 text-gray-800 mb-4">
              <img src={logo} alt="" className=" App-logo h-8" />
              <span>
                Spiral
                <span className="text-pink-900">Event</span>
              </span>
            </h3>


            <div className=" ">
            <h2 className="lg:text-3xl md:text-3xl sm:text-2xl font-bold m-8 text-white flex justify-center bg-pink-900 p-6 rounded">
              Create Event
              </h2>
            </div>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-700 font-semibold flex items-center mb-1">
                    <FileText className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
                    Event Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Event Name"
                    className="w-full text-sm border bg-pink-50  rounded-3xl p-2 focus:ring-1 focus:ring-pink-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700 font-semibold mb-1 flex items-center ">
                    <Tag className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
                    Category:
                  </label>
                  <select
                    className="w-full border bg-pink-50  rounded-3xl p-2 text-sm focus:ring-1 focus:ring-pink-900 focus:outline-none"
                    placeholder="Category"
                  >
                    <option value="" disabled>
                      Category
                    </option>
                    <option className="text-pink-900" value="">
                      Entertainment
                    </option>
                    <option className="text-pink-900" value="">
                      Business
                    </option>
                    <option className="text-pink-900" value="">
                      Social
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-700 font-semibold mb-1 flex items-center">
                    <Edit className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
                    Description:
                  </label>
                  <textarea
                    placeholder="Description"
                    rows="8"
                    className="w-full rounded-md border bg-pink-50 shadow focus:ring-1 focus:ring-pink-900 focus:outline-none sm:text-sm"
                  ></textarea>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="text-sm text-gray-700 font-semibold mb-1 flex items-center">
                    Event Logo/Banner
                  </label>

                  <div className="mt-1 w-full flex justify-center border-2 border-dashed border-gray-300 rounded-md p-8">
                    <div className="relative mb-6 flex justify-center  ">
                      <CloudUploadIcon className="absolute left-3 w-20 h-12 mb-12 justify-center text-gray-400 pointer-events-none" />
                    </div>

                    <button
                      type="button"
                      onclick="document.getElementById('imageUpload').click()"
                      className="text-white text-sm bg-pink-900 mt-14 space-y-4 rounded-full hover:bg-pink-700 hover:scale-105 p-2"
                    >
                      Upload Image
                    </button>
                  </div>
                </div>
              </div>

              <label className="text-sm text-gray-700 font-semibold flex items-center">
                <MapPin className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
                Location:
              </label>
              <input
                placeholder="Event location or Online"
                className=" text-sm w-full border bg-pink-50 rounded-3xl p-2 focus:ring-1 focus:ring-pink-900 focus:outline-none"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-700 font-semibold flex items-center mb-1">
                    <Calendar className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
                    Start Date:
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="w-full border rounded-3xl bg-pink-50 p-2 focus:ring-1 focus:ring-pink-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700 font-semibold mb-1 flex items-center">
                    <Calendar className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
                    End Date:
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="w-full border rounded-3xl bg-pink-50 p-2 focus:ring-1 focus:ring-pink-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-700 font-semibold flex items-center mb-1">
                    <BadgeDollarSign className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
                    Ticket Price:
                  </label>
                  <input
                    className="w-full border text-sm rounded-3xl bg-pink-50 p-2 focus:ring-1 focus:ring-pink-900 focus:outline-none"
                    placeholder="Price"
                  />

                </div>
                <div>
                  <label className="text-sm text-gray-700 font-semibold mb-1 flex items-center">
                    <Link2 className="w-4 h-5 text-gray-800 mr-2 flex items-center" />
                    Link:
                  </label>
                  <input
                    className="w-full border text-sm rounded-3xl bg-pink-50 p-2 focus:ring-1 focus:ring-pink-900 focus:outline-none"
                    placeholder="Event URL (if any)"
                  />
                  
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-1/3 text-sm mx-auto mt-6 bg-pink-900 text-white py-3 rounded-lg flex justify-center hover:bg-pink-700 hover:scale-105 shadow-lg transition-transform duration-300"
            >
              Create Event
            </button>
            <p className="text-sm text-gray-600 flex gap-2 justify-center mt-4">
              Don't have Event Logo/Banner?{" "}
              <Link to="/login" className="text-pink-900 underline">
                Create one
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
