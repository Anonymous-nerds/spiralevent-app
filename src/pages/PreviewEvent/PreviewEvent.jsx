import React from "react";
import "./PreviewEvent.scss";
import Nav from "../../components/ui/MainNav.jsx";
import logo from "../../assets/react.svg";
import image from "../../assets/pretty.png"
import { CalendarMinusIcon, LocateIcon, Tickets } from "lucide-react";
import EventCard from "../../components/ui/card.jsx"

const PreviewEvent = () => {
  return (
    <div className="PreviewEvent">
      <div className="">
        <div className="">
          <Nav />
        </div>

        <main className="py-10">
          {/* Event Hero Section */}
          <div className="m-5 flex flex-col lg:flex-row gap-8 mb-12">
            {/* Image Container */}
            <div className="lg:w-1/2">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img src={image} alt="Event preview" className="previewImage" />
              </div>
            </div>

            {/* Event Details */}
            <div className="lg:w-1/2 space-y-6 mt-10">
              <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-gray-900">Register your Event</h1>
              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {["Sweeter", "Food", "Betterthan"].map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
                <span className="px-4 py-2 text-gray-600 font-medium text-sm">
                  <span className="font-bold text-black">By</span> Habiba | Fun Event
                </span>
              </div>
              <button className="buyBtn flex gap-2">Buy Ticket <Tickets size={20} /></button>

              {/* Date and Location */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CalendarMinusIcon className="iconStyle" />
                  <p className="text-lg font-semibold text-gray-800">27th December 2024</p>
                </div>
                <div className="flex items-center gap-3">
                  <LocateIcon className="iconStyle" />
                  <p className="text-lg font-semibold text-gray-800">Abuja, Nigeria</p>
                </div>
              </div>

              {/* About Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  About Event
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
                  neque, eius sequi minima corporis, dicta illum, numquam
                  voluptatem iure unde dolorem dolore. Voluptatem molestias saepe
                  explicabo officiis quasi, perspiciatis illo.
                </p>
              </div>
            </div>
          </div>
          {/* Related Events Section */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold text-gray-900 ml-10 mb-6">Related Events</h2>
            <div className="p-5 space-y-1 lg:grid lg:grid-cols-3 lg:gap-x-3 lg:space-y-0">
              {/* Add your related events cards here */}
              <div className="">
                <EventCard logo={logo}
                  title={"Spiral Event Fest 2024"}
                  details={"Join us, as we Unlock the Future of AI-Driven Event Management."}
                  date={"13th Dec 2024, 7:00 PM"}
                  location={"Bayero University, Kano"} />
              </div>
              <div className="">
                <EventCard logo={logo}
                  title={"Spiral Event Fest 2024"}
                  details={"Join us, as we Unlock the Future of AI-Driven Event Management."}
                  date={"13th Dec 2024, 7:00 PM"}
                  location={"Bayero University, Kano"} />
              </div>
              <div className="">
                <EventCard logo={logo}
                  title={"Spiral Event Fest 2024"}
                  details={"Join us, as we Unlock the Future of AI-Driven Event Management."}
                  date={"13th Dec 2024, 7:00 PM"}
                  location={"Bayero University, Kano"} />
              </div>
              <div className=""><EventCard logo={logo}
                title={"Spiral Event Fest 2024"}
                details={"Join us, as we Unlock the Future of AI-Driven Event Management."}
                date={"13th Dec 2024, 7:00 PM"}
                location={"Bayero University, Kano"} />
              </div>
            </div>

          </section>
        </main>
      </div>
    </div>

  );
};

export default PreviewEvent;