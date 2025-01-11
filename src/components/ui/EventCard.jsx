import React from 'react'
import { Link } from 'react-router-dom'
import { SquareArrowOutUpRight } from 'lucide-react';


const EventCard = ({ Banner, date, title, tags, organizer, eventCode }) => {
  return (
    <div className='EventCard m-5 shadow-sm rounded-b-lg bg-gray-100'>
      {/* banner */}
      <div className=""></div>
      {/* content */}
      <div className="">
        <div className="">
          <img src={Banner} className='h-64 w-full object-fit rounded-t-2xl' alt="Event Banner" />
        </div>
        <div className="mt-2 p-5">
          <p className='text-sm text-gray-700'>{date}</p>
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-3">
            {tags.map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full bg-green-100 text-black font-medium text-sm hover:bg-green-200 transition-colors">{tag}</span>
            ))}
            <span className="px-4 py-2 text-gray-600 font-medium text-sm">
            </span>
          </div>
          <p className='text-lg mt-3 font-bold'>{title}</p>
          <p className='mt-3 text-sm text-gray-700'>{organizer} | Organizer</p>
          <div className='mt-5 flex justify-center text-center'>
            <p className='text-sm'>
              <Link className='flex gap-2' to={`/event/${eventCode}`}>
                <span>View Eevnt</span>  <span><SquareArrowOutUpRight size={15} /></span></Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard
