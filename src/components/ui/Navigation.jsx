import React, { useState } from 'react';
import { Settings, User2, CreditCard, Users, Bell, Link, Terminal, Menu } from 'lucide-react';
import Nav from '../ui/MainNav';

const Navigation = ({ active }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarItems = [
    { icon: User2, text: 'Events', active },
    { icon: Settings, text: 'Settings', active: false },
    { icon: CreditCard, text: 'Plan', active: false },
    { icon: Users, text: 'Team', active: false },
    { icon: Bell, text: 'Notifications', active: false },
    { icon: Link, text: 'Integrations', active: false },
    { icon: Terminal, text: 'API', active: false }
  ];

  const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen); };

  return (
    <div className="sticky top-0 z-40">
      {/* Navbar */}
      <Nav />
      {/* Mobile Menu Button */}
      <button onClick={toggleSidebar} className="fixed top-4 left-4 p-2 bg-gray-800 text-white rounded-lg md:hidden z-50"
        aria-label="Toggle Menu"> <Menu size={20} /> </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity md:hidden z-20" onClick={toggleSidebar} />
      )}

      {/* Sidebar */}
      <aside className={`fixed py-24 top-0 left-0 h-screen w-64 bg-white border-r transform 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
           md:translate-x-0 transition-transform duration-300 ease-in-out z-30`}>
        <div className="p-4 flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
          </div>
          <span className="font-semibold">Technotch</span>
        </div>

        <nav className="mt-8 px-4">
          {sidebarItems.map((item, index) => (
            <div key={index} className={`flex items-center gap-3 px-2 py-3 rounded-lg cursor-pointer
                ${item.active ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}>
              <item.icon size={20} />
              <span>{item.text}</span>
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Navigation;