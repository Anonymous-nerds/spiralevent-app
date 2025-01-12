import React, { useState, useEffect } from 'react';
import Navigation from '../../components/ui/Navigation';
import EventCard from "../../components/ui/EventCard.jsx";
import LoginIn from "../../auth/isLoginIn.jsx";
import api from "../../../utils/api.js";

const EventList = () => {
  //********************** State variables **********************//
  const [events, setEvents] = useState([]);
  const [isLoadingRelated, setIsLoadingRelated] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  //********************** Fetch events with pagination **********************//
  const fetchEvents = (page) => {
    setIsLoadingRelated(true);
    api.get(`/events/list?page=${page}`)
      .then(response => {
        const filteredEvents = response.data.data.filter(
          relatedEvent => relatedEvent.eventType === "public");
        setEvents((prevEvents) => [...prevEvents, ...filteredEvents]);
        setHasMore(filteredEvents.length > 0);
      })
      .catch(error => { console.error('Error fetching related events:', error); })
      .finally(() => { setIsLoadingRelated(false); });
  };

  //********************** Initial fetch on component mount **********************//
  useEffect(() => { fetchEvents(page); }, [page]);

  //********************** Load more events on button click **********************//
  const loadMoreEvents = () => { if (hasMore) { setPage((prevPage) => prevPage + 1); } };

  return (
    <div className='EventList flex min-h-screen bg-neutral-100'>
      <LoginIn />
      <Navigation />

      <main className="py-24 flex-1 md:ml-64">
        <div className="p-10">
          <h2 className='text-4xl font-bold'>Explore</h2>
        </div>
        <div className="mt-3">
          <section>
            <div className="p-5 space-y-1 lg:grid lg:grid-cols-2 lg:gap-x-3 lg:space-y-0">
              {events.map((event, index) => (
                <div key={index}>
                  <EventCard
                    Banner={event.eventBanner}
                    title={event.eventName}
                    date={event.startDate ? new Date(event.startDate).toLocaleDateString() : 'TBA'}
                    location={event.location}
                    tags={event.tags}
                    organizer={event.Organizer.name}
                    eventCode={event.eventCode}
                    status={event.status}
                  />
                </div>
              ))}
            </div>
            {isLoadingRelated && (
              <div className="p-5 space-y-1 lg:grid lg:grid-cols-2 lg:gap-x-3 lg:space-y-0">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="animate-pulse my-5 bg-gray-200 h-64 rounded-lg"></div>
                ))}
              </div>
            )}
            {hasMore && (
              <div className="text-center mt-5">
                <button onClick={loadMoreEvents} className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
                  Explore More Events
                </button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default EventList;
