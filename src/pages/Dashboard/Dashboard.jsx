import { useState, useEffect } from "react";
import TopEvent from '../../components/TopEvent';
import LoginIn from "../../auth/isLoginIn.jsx";
import api from "../../../utils/api.js";
import { LayoutDashboard } from 'lucide-react';
import Navigation from '../../components/ui/Navigation';
import EventCard from '../../components/ui/EventCard';
import useUserInfo from "../../../hooks/useUserInfo.js";
// import Loader from "../../components/loader.jsx";
// import LoadingEvent from "../../components/LoadingEvent.jsx";

const Dashboard = () => {
  //********************** state variables **********************//
  const [relatedEvents, setRelatedEvents] = useState([]);
  const [topEvents, setTopEvents] = useState([]);
  const { userInfo } = useUserInfo();
  const [isLoadingRelated, setIsLoadingRelated] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  //********************** set date **********************//
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const incomeData = [20, 30, 100, 60, 80, 40, 30];


  //********************** Fetch event details **********************//
  useEffect(() => {
    setLoading(true); //set loading state to be true
    api.get(`/events/get/tags?tags=trending`)
      .then(response => {
        const events = response.data.data;
        if (events.length > 0) {
          const randomIndex = Math.floor(Math.random() * events.length);
          setEvents(events[randomIndex]);
        } else {
          console.log("No events found.");
        }
      })
      .catch(error => {
        console.error("Error fetching events:", error);
      })
      .finally(() => { setLoading(false); });
  }, []);


  //************  Fetch top events ************ //
  useEffect(() => {
    // if (events.length > 0 && events[0].tags) {
    // setIsLoadingRelated(true);
    // const tagsQuery = events[0].tags.join(',');
    api.get(`/events/get/tags?tags=trending,SpiralEvent`)
      .then(response => {
        const filteredTopEvents = response.data.data.filter(
          topEvent => topEvent.eventType == "public")
          .slice(0, 3);
        // console.log(filteredTopEvents) // for debugging
        setTopEvents(filteredTopEvents);
      }).catch(error => { console.error('Error fetching related events:', error); })
      .finally(() => { setIsLoadingRelated(false); });
    // }
  }, []);

  //************  Fetch related events only when events[0] exists and has tags ************ //
  useEffect(() => {
    // if (events.length > 0 && events[0].tags) {
    setIsLoadingRelated(true);
    // const tagsQuery = events[0].tags.join(',');
    api.get(`/events/get/tags?tags=test,trending,SpiralEvent`)
      .then(response => {
        const filteredEvents = response.data.data.filter(
          relatedEvent => relatedEvent.eventType == "public");
        // console.log(filteredEvents) // for debugging
        setRelatedEvents(filteredEvents);
      }).catch(error => { console.error('Error fetching related events:', error); })
      .finally(() => { setIsLoadingRelated(false); });
    // }
  }, []);

  //************  Get User Information from the custom hooks ************ //
  // if (isLoading) { return <Loader />; }
  if (!userInfo) { return <LoginIn />; }


  return (
    <div className="p-6 flex min-h-screen bg-neutral-100">
      <LoginIn />
      <Navigation />
      {/* Main Content */}
      <div className="flex-1 md:ml-64 mt-24">
        <div className="p-2 my-5">
          <h1 className="text-2xl font-semibold">Hey, <span className="font-extrabold">{userInfo.name}</span></h1>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Income Tracker Card */}
          <div className="bg-white rounded-3xl p-4 md:p-6 col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <div className="flex items-center gap-2 mb-2 sm:mb-0">
                <LayoutDashboard className="text-gray-600" />
                <h2 className="text-xl md:text-2xl font-semibold">Discover Events with <span className="text-pink-800">SpiralEvent</span></h2>
              </div>
              {/* <button className="flex items-center font-bold gap-1 px-4 py-1 rounded-full bg-pink-100">
                Event
              </button> */}
            </div>
            <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8">
              Explore a wide range of events tailored to your interests. From concerts and workshops to conferences and festivals, find the perfect event for you.
            </p>


            <div className="relative min-h-[300px] md:h-48 mb-4">
              <div className="absolute top-0 left-4">
                <span className="text-2xl md:text-3xl font-bold">+20%</span>
                <p className="text-gray-500 text-xs md:text-sm">
                  This week`s income is<br />higher than last week`s
                </p>
              </div>
              {/* <div className="absolute top-4 right-4">
                <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm md:text-base">
                  $2,567
                </span>
              </div> */}
              <div className="flex justify-between items-end h-full pt-20">
                {incomeData.map((height, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <div style={{ height: `${height}px` }} className="w-[1px] bg-blue-200" />
                    <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-gray-100 text-sm">
                      {days[index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>


            {/* Event Content Section */}
            {Loading ? (
              <div className="p-5 space-y-1 lg:grid lg:grid-cols-1 lg:gap-x-3 lg:space-y-0">
                {[1].map((item) => (
                  <div key={item} className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
                ))}
              </div>
            ) : (
              <div className="mt-8 md:mt-10">
                <div className="w-full h-48 md:h-64 bg-gray-200 rounded-xl overflow-hidden">
                  <img src={events.eventBanner} alt={events.eventName} className="w-full h-full" />
                </div>
                <div className="mt-4 md:mt-5">
                  <h3 className="text-xl md:text-2xl font-bold">{events.eventName}</h3>
                  <p className="text-sm md:text-base mt-2 md:mt-3 text-gray-600 leading-relaxed">
                    {events.description}
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* Recent Projects Card */}
          <div className="bg-white rounded-3xl p-4 md:p-6">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h2 className="text-xl md:text-lg font-semibold">Your Recent Events</h2>
              <button className="text-[11px] text-gray-500 hover:text-gray-700">See all Events</button>
            </div>

            {/* Project List */}
            <div className="space-y-4">
              {topEvents.map((topEvent, index) => (
                <TopEvent
                  key={index}
                  user={topEvent.Organizer.profileImageUrl}
                  title={topEvent.eventName}
                  status=""
                  tags={topEvent.tags}
                  description={topEvent.description}
                  location={topEvent.location}
                  time="2h ago"
                  price={`${topEvent.ticketPrice}`}
                />
              ))}

            </div>
          </div>
        </div>
        {/* Related Events Section */}
        <section className="mt-10">
          <h2 className="text-3xl font-bold text-gray-900 ml-10 mb-6">Events For You</h2>
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
                    status={revent.status}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div >
  );
};

export default Dashboard;