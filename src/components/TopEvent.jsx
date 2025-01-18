import React from 'react'
// import User from "../assets/logo-me.png"

const TopEvent = ({ icon, title, price, user, tags, description, location, time, status }) => {
  return (
    <div>
      <div className="border border-gray-100 rounded-2xl p-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-4">
            <div className={`w-10 h-10 rounded-xl  flex items-center justify-center`}>
              <img src={user} alt="User" />
            </div>
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-gray-500">{price}</p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${status === 'Paid' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500'
            }`}>
            {status}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-4 py-2 bg-pink-600 rounded-full text-[10px] text-white hover:bg-pink-500 transition duration-200 ease-in-out">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-500 text-sm mb-4">{description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{location}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  )
}

export default TopEvent
