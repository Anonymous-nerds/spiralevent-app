import React, { useState, useEffect } from "react";
import "./PreviewEvent.scss";
import Navigation from "../../components/ui/Navigation";
import { CalendarMinusIcon, LocateIcon, Tickets } from "lucide-react";
import EventCard from "../../components/ui/EventCard.jsx";
import LoginIn from "../../auth/isLoginIn.jsx";
import api from "../../../utils/api.js";
import { useParams } from "react-router-dom";
// Loading skeleton component
import LoadingEvent from "../../components/LoadingEvent.jsx";

const PreviewEvent = () => {
  const { eventCode } = useParams();
  const [events, setEvents] = useState([]);
  const [relatedEvents, setRelatedEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingRelated, setIsLoadingRelated] = useState(false);

  // Fetch event details
  useEffect(() => {
    setIsLoading(true);
    api.get(`/events/${eventCode}`)
      .then(response => {
        setEvents(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [eventCode]);

  // Fetch related events only when events[0] exists and has tags
  useEffect(() => {
    if (events.length > 0 && events[0].tags) {
      setIsLoadingRelated(true);
      const tagsQuery = events[0].tags.join(',');
      api.get(`/events/get/tags?tags=${tagsQuery}`)
        .then(response => {
          const filteredEvents = response.data.data.filter(
            relatedEvent => relatedEvent.eventCode !== eventCode
          );
          console.log(filteredEvents)
          setRelatedEvents(filteredEvents);
        })
        .catch(error => {
          console.error('Error fetching related events:', error);
        })
        .finally(() => {
          setIsLoadingRelated(false);
        });
    }
  }, [events, eventCode]);

  return (
    <div className="PreviewEvent flex min-h-screen bg-neutral-100">
      <LoginIn />
      <Navigation />

      {isLoading ? (
        <LoadingEvent />
      ) : (
        events.map((event, index) => (
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
                  {event.tags && event.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                  <span className="px-4 py-2 text-gray-600 font-medium text-sm">
                    <span className="font-bold text-black">By</span> {event.Organizer?.name}
                  </span>
                </div>
                <button className="buyBtn flex gap-2">
                  Buy Ticket ({event.ticketPrice}) <Tickets size={20} />
                </button>

                {/* Date and Location */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CalendarMinusIcon className="iconStyle" />
                    <p className="text-lg font-semibold text-gray-800">
                      {event.startDate ? new Date(event.startDate).toLocaleDateString() : 'TBA'}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarMinusIcon className="iconStyle" />
                    <p className="text-lg font-semibold text-gray-800">
                      {event.endDate ? new Date(event.endDate).toLocaleDateString() : 'TBA'}
                    </p>
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
              {isLoadingRelated ? (
                <div className="p-5 space-y-1 lg:grid lg:grid-cols-2 lg:gap-x-3 lg:space-y-0">
                  {[1, 2].map((item) => (
                    <div key={item} className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
                  ))}
                </div>
              ) : (
                <div className="p-5 space-y-1 lg:grid lg:grid-cols-2 lg:gap-x-3 lg:space-y-0">
                  {relatedEvents.map((revent, index) => (
                    <div key={revent.eventCode || index}>
                      <EventCard
                        Banner={revent.eventBanner}
                        title={revent.eventName}
                        date={revent.startDate ? new Date(revent.startDate).toLocaleDateString() : 'TBA'}
                        location={revent.location}
                        tags={revent.tags}
                        organizer={revent.Organizer.name}
                        eventCode={revent.eventCode}
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>
          </main>
        ))
      )}
    </div>
  );
};

export default PreviewEvent;