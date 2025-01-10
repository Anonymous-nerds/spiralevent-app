import React, { useState, useEffect } from "react";
import "./PreviewEvent.scss";
import Navigation from "../../components/ui/Navigation";
import Banner from "../../assets/fest.png";
import Event from "../../assets/pretty.png"
import { CalendarMinusIcon, LocateIcon, Tickets } from "lucide-react";
import EventCard from "../../components/ui/EventCard.jsx"
import LoginIn from "../../auth/isLoginIn.jsx";
import api from "../../../utils/api.js";
import { Link, useNavigate, useParams } from "react-router-dom";

const PreviewEvent = () => {
  //********************** get event code from the params **********************//
  const { eventCode } = useParams()
  // console.log(eventCode) // for debugging(1)

  //********************** state variables **********************//
  const [events, setEvents] = useState([]);

  //********************** Api call here **********************//
  useEffect(() => {
    api.get(`/events/${eventCode}`)
      .then(response => {
        //console.log(response.data) // for debugging(2)
        setEvents(response.data.data); // Update state with the fetched data
      })
      .catch(error => { console.error('Error fetching events:', error); });
  }, [eventCode]);


  return (
    <div className="PreviewEvent flex min-h-screen bg-neutral-100">
      <LoginIn />
      <Navigation />

      {events.map((event, index) => (
        <main key={index} className="py-24 flex-1 md:ml-64">
          {/* Event Hero Section */}
          <div className="m-5 flex flex-col lg:flex-row gap-8 mb-12">
            {/* Image Container */}
            <div className="lg:w-1/2">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img src={event.eventBanner} alt="Event preview" className="previewImage" />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-3 rounded">
                  {event.status}
                </div>
              </div>

            </div>

            {/* Event Details */}
            <div className="lg:w-1/2 space-y-6 mt-10">
              <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-gray-900">{event.eventName}</h1>
              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {event.tags.map((tag) => (<span key={tag} className="tag">{tag}</span>))}
                <span className="px-4 py-2 text-gray-600 font-medium text-sm">
                  <span className="font-bold text-black">By</span> {event.Organizer.name}
                </span>
              </div>
              <button className="buyBtn flex gap-2">Buy Ticket ({event.ticketPrice}) <Tickets size={20} /></button>

              {/* Date and Location */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CalendarMinusIcon className="iconStyle" />
                  <p className="text-lg font-semibold text-gray-800">{new Date(event.startDate).toLocaleDateString()}</p>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarMinusIcon className="iconStyle" />
                  <p className="text-lg font-semibold text-gray-800">{new Date(event.endDate).toLocaleDateString()}</p>
                </div>
                <div className="flex items-center gap-3">
                  <LocateIcon className="iconStyle" />
                  <p className="text-lg font-semibold text-gray-800">{event.location}</p>
                </div>
              </div>

              {/* About Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">About Event</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
          </div>
          {/* Related Events Section */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold text-gray-900 ml-10 mb-6">Related Events</h2>
            <div className="p-5 space-y-1 lg:grid lg:grid-cols-3 lg:gap-x-3 lg:space-y-0">
              {/* Add your related events cards here */}
              <div className="">
                <EventCard
                  Banner={Banner}
                  title={"Spiral Event Fest 2024"}
                  date={"13th Dec 2024, 7:00 PM"}
                  location={"Bayero University, Kano"} />
              </div>
              <div className="">
                <EventCard Banner={Event}
                  title={"Spiral Event Fest 2024 ~ The start of a new AI age"}
                  date={"13th Dec 2024, 7:00 PM"}
                  location={"Bayero University, Kano"} />
              </div>
              <div className="">
                <EventCard Banner={Banner}
                  title={"Spiral Event Fest 2024 ~ The start of a new AI age"}

                  date={"13th Dec 2024, 7:00 PM"}
                  location={"Bayero University, Kano"} />
              </div>
              <div className=""><EventCard Banner={Event}
                title={"Spiral Event Fest 2024 ~ The start of a new AI age"}
                date={"13th Dec 2024, 7:00 PM"}
                location={"Bayero University, Kano"} />
              </div>
            </div>

          </section>
        </main>
      ))}
    </div>
  );
};

export default PreviewEvent;