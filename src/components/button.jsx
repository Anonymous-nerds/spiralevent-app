import React from 'react'

const button = () => {
  return (
    <div>
      <div className='bg-neutral-200 flex flex-wrap justify-center gap-6 p-4 m-8 items-center'>
        <button className='sm:px-6 lg:px-8 text-sm sm:text-base lg:text-lg bg-transparent py-3 px-4 border-2 border-pink-900 rounded-full text-pink-900 hover:scale-105'>
          Button 1
        </button> 
        <button
           type="submit"
           className=" sm:px-6 lg:px-8 text-sm sm:text-base lg:text-lg bg-pink-900 text-white py-3 px-3 rounded-full hover:bg-pink-700 transition-colors duration-300 ease-in-out">
           Button 2
        </button>
        <button className="sm:px-6 lg:px-8 text-sm sm:text-base lg:text-lg bg-pink-900 text-white py-3 px-4 rounded transition-transform duration-300 hover:bg-pink-700 hover:scale-105">
           Button 3
        </button>
        <button className="sm:px-6 lg:px-8 text-sm sm:text-base lg:text-lg bg-pink-900 text-white py-3 px-4 rounded transform transition-transform duration-400 active:scale-95 ease-in-out">
           Button 4
        </button>
         <button className="sm:px-6 lg:px-8 text-sm sm:text-base lg:text-lg bg-pink-900 text-white py-3 px-4 rounded animate-pulse">
          Button 5
        </button>
        <button className="sm:px-6 lg:px-8 text-sm sm:text-base lg:text-lg bg-pink-900 text-white py-3 px-4 rounded transform transition-transform duration-500 translate-x-0 hover:bg-pink-700 hover:translate-x-2">
          Button 6
        </button>
      </div>
    </div>
  )
}

export default button
