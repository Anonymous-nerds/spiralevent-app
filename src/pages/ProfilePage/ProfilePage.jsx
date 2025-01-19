import { useState } from 'react';
import { Camera, Settings } from 'lucide-react';
import Navigation from "../../components/ui/Navigation";
import Logo from "../../assets/logo-me.png"
import "./ProfilePage.scss";

const ProfilePage = () => {

  return (
    <div className="ProfilePage flex min-h-screen bg-neutral-100">
      <Navigation />
      <div className="flex-1 md:ml-64">
        <div className="max-w-4xl py-32">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <img src={Logo} alt="User" className="w-10 h-10 rounded-full" />
              <div className="flex items-center gap-2">
                <Settings size={20} className="text-gray-500" />
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="bg-white rounded-2xl overflow-hidden">
            {/* Cover Image */}
            <div className="h-48 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 relative">
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm">
                <Camera size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Profile Content */}
            <div className="px-4 md:px-8 pb-8">
              {/* Profile Picture */}
              <div className="relative -mt-20 mb-6">
                <img
                  src={Logo}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white"
                />
              </div>

              {/* Profile Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                  <h1 className="text-2xl font-semibold">Profile</h1>
                  <p className="text-gray-500">Update your photo and personal details</p>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-6">
                <div className="space-y-4">
                  <div className="p-5 space-y-1 lg:grid lg:grid-cols-3 lg:gap-x-3 lg:space-y-0">
                    <div className='py-4'>
                      <label className="labelStyle">Full Name</label>
                      <input type="text" className="inputStyle" placeholder="E.g: John Doe" />
                    </div>
                    <div className='py-4'>
                      <label className="labelStyle">Username</label>
                      <input
                        type="text"
                        className="inputStyle"
                        placeholder="Name"
                      />
                    </div>
                    <div className='py-4'>
                      <label className="labelStyle">Username</label>
                      <input
                        type="text"
                        className="inputStyle"
                        placeholder="Name"
                      />
                    </div>
                  </div>

                  <div className="p-5 space-y-1 lg:grid lg:grid-cols-2 lg:gap-x-3 lg:space-y-0">
                    <div className='py-4'>
                      <label className="labelStyle">Username</label>
                      <input
                        type="text"
                        className="inputStyle"
                        placeholder="Name"
                      />
                    </div>

                    <div className='py-4'>
                      <label className="labelStyle">
                        Website
                      </label>
                      <input
                        type="url"
                        className="inputStyle"
                        placeholder="Website"
                      />
                    </div>
                    <div className='py-4'>
                      <label className="labelStyle">
                        Username
                      </label>
                      <input
                        type="text"
                        className="inputStyle"
                        placeholder="Name"
                      />
                    </div>

                    <div className='py-4'>
                      <label className="labelStyle">
                        Website
                      </label>
                      <input
                        type="url"
                        className="inputStyle"
                        placeholder="Website"
                      />
                    </div>
                  </div>

                  <div className='py-4'>
                    <label className="labelStyle">
                      Your Photo
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <Camera size={24} className="text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          Update your photo and personal details
                        </p>
                        <div className="flex gap-4 mt-2">
                          <button type="button" className="text-sm text-red-600">
                            Delete
                          </button>
                          <button type="button" className="text-sm text-blue-600">
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Bio
                    </label>
                    <textarea
                      className="inputStyle"
                      rows={4}
                      placeholder="Add a short bio..."
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
};

export default ProfilePage;