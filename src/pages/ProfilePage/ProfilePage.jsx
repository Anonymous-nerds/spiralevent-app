import React, { useState } from 'react';
import { Camera, Settings, User2, CreditCard, Users, Bell, Link, Terminal, Menu } from 'lucide-react';
import Nav from '../../components/ui/MainNav';
import Logo from "../../assets/logo-me.png"

const ProfilePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarItems = [
    { icon: User2, text: 'My Profile', active: true },
    { icon: Settings, text: 'Settings', active: false },
    { icon: CreditCard, text: 'Plan', active: false },
    { icon: Users, text: 'Team', active: false },
    { icon: Bell, text: 'Notifications', active: false },
    { icon: Link, text: 'Integrations', active: false },
    { icon: Terminal, text: 'API', active: false }
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Nav />

      <div className="flex relative">
        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity md:hidden z-20"
            onClick={toggleSidebar}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-white border-r transform 
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
            md:translate-x-0 transition-transform duration-300 ease-in-out z-30`}
        >
          <div className="p-4 flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
            </div>
            <span className="font-semibold">Technotch</span>
          </div>

          <nav className="mt-8 px-4">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-2 py-3 rounded-lg cursor-pointer
                  ${item.active ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <item.icon size={20} />
                <span>{item.text}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          {/* Mobile Menu Button */}
          <div className="md:hidden mb-4">
            <button
              onClick={toggleSidebar}
              className="p-2 bg-gray-800 text-white rounded-lg"
              aria-label="Toggle Menu"
            >
              <Menu size={20} />
            </button>
          </div>

          <div className="max-w-4xl mx-auto">
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
                  <button className="px-4 py-2 bg-gray-800 text-white rounded-lg">
                    Save
                  </button>
                </div>

                {/* Form */}
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Username
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Website
                      </label>
                      <input
                        type="url"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Website"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
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
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows={4}
                        placeholder="Add a short bio..."
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;