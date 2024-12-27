import React from "react";
import Nav from "../../components/ui/Nav.jsx";
import img from "../../assets/events.png"
import image from "../../assets/pretty.png"
import { FaArrowLeft } from "react-icons/fa";
import { CalendarMinusIcon } from "lucide-react";
import { LocateIcon } from "lucide-react";

const PreviewEvent = () => {
  return (
    <div className="w-full h-full">
      <div className="navbar bg-transparent shadow-sm">
      <Nav />
      </div>
      {/*Top/left corner */}
      <div className="smallerdiv md:ml-10  md:p-5 md:flex">
        <div>
          <img src={image} alt="" className="rounded-md md:rounded-[10%] " />
        </div>


        {/*buttom/right corner */}
        <div className="w-full h-full pt-10   justify-center  ml-8">
          <div className="p-5">
            <h2 className="text-3xl md:text-5xl font-semibold">Register your Event</h2>
          </div>

          <div className="flex justify-between">
            <ul className="flex justify-between">
              <div className="rounded-full flex bg-pink-800 ml-5">
                <li className="p-3 font-medium">Sweeter</li>
              </div>
              <div className="rounded-full flex bg-pink-700 ml-5">
                <li className="p-3 font-medium ">Food</li>
              </div>
              <div className="rounded-full flex bg-pink-700 ml-5">
                <li className="p-3 font-medium ">Betterthan</li>
              </div>
              <div>
              <li className="text-black underline font-medium p-3">By Habiba|Fun Event </li>
            </div>
            </ul>
          </div>

          <div className='p-5 '>
            <button className='rounded-full text-xl bg-pink-700 w-[120px] shadow-md text-center font-semibold justify-center h-[50px]'>
              Buy Now
            </button>
          </div>

          <div className=' pb-5 pl-5'>
            <div className=''>
              <button>
              
              </button>
            <h3 className='text-2xl font-bold pb-3'>
              27rd December 2024
            </h3>
            </div>
            <h3 className='text-2xl font-bold'>
              Abuja Nigeria
            </h3>
          </div>

          <div className='p-5 '>
            <h3 className='text-2xl font-bold'>About Event</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione neque, eius sequi minima corporis, dicta illum, numquam voluptatem iure unde dolorem dolore. Voluptatem molestias saepe explicabo officiis quasi, perspiciatis illo.</p>
          </div>

        </div>

      </div>

      <div>
        <h3 className='text-3xl font-bold p-10'>Related Events</h3>
      </div>
     
    </div>
  );
};

export default PreviewEvent;
