import React, { useState, useEffect } from "react";
import TopEvent from '../../components/TopEvent';
import LoginIn from "../../auth/isLoginIn.jsx";
import api from "../../../utils/api.js";
import { ChevronDown, FileText, Globe, Palette } from 'lucide-react';
import Navigation from '../../components/ui/Navigation';
import EventCard from '../../components/ui/EventCard';
import Image from "../../assets/dev-fest.jpg"

const Dashboard = () => {
  const [relatedEvents, setRelatedEvents] = useState([]);
  const [isLoadingRelated, setIsLoadingRelated] = useState(false);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const incomeData = [20, 30, 100, 60, 80, 40, 30];


  //************  Fetch related events only when events[0] exists and has tags ************ //
  useEffect(() => {
    // if (events.length > 0 && events[0].tags) {
    setIsLoadingRelated(true);
    // const tagsQuery = events[0].tags.join(',');
    api.get(`/events/get/tags?tags=test,tranding,SppiralEvent`)
      .then(response => {
        const filteredEvents = response.data.data.filter(
          relatedEvent => relatedEvent.eventType == "public");
        // console.log(filteredEvents) // for debugging
        setRelatedEvents(filteredEvents);
      }).catch(error => { console.error('Error fetching related events:', error); })
      .finally(() => { setIsLoadingRelated(false); });
    // }
  }, []);

  return (
    <div className=" p-6 flex min-h-screen bg-neutral-100">
      {/* <LoginIn /> */}
      <Navigation />
      {/* Main Content */}
      <div className="flex-1 md:ml-64 mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Income Tracker Card */}
          <div className="bg-white rounded-3xl p-6 col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <FileText className="text-gray-600" />
                <h2 className="text-2xl font-semibold">Income Tracker</h2>
              </div>
              <button className="flex items-center font-bold gap-1 px-4 py-1 rounded-full bg-gray-100">
                Top Event
              </button>
            </div>
            <p className="text-gray-500 mb-8">
              Track changes in income over time and access detailed data on each project and payments received
            </p>

            {/* Chart Section */}
            <div className="relative h-48 mb-4">
              <div className="absolute top-0 left-4">
                <span className="text-3xl font-bold">+20%</span>
                <p className="text-gray-500 text-sm">This week`s income is<br />higher than last week`s</p>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-gray-900 text-white px-3 py-1 rounded-full">$2,567</span>
              </div>
              <div className="flex justify-between items-end h-full pt-20">
                {incomeData.map((height, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <div style={{ height: `${height}px` }} className="w-[1px] bg-blue-200" />
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                      {days[index]}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <img src={Image} alt="Image" />
                <div className="mt-5">
                  <h3 className="text-2xl font-bold">Sprial Event Title</h3>
                  <p className="text-sm mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ab quidem quia sunt ullam, soluta neque natus repellat recusandae, ratione voluptatibus officia perspiciatis sed provident necessitatibus. In at ratione optio.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Projects Card */}
          <div className="bg-white rounded-3xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Your Recent Projects</h2>
              <button className="text-sm text-gray-500">See all Project</button>
            </div>

            {/* Project List */}
            <div className="space-y-4">
              <TopEvent
                icon={<Globe className="text-white" />}
                title="Web Development Project"
                rate="$10/hour"
                tags={['Remote', 'Part-time']}
                description="This project involves implementing both frontend and backend functionalities, as well as integrating with third-party APIs."
                location="Germany"
                time="2h ago"
                status="Paid"
                bgColor="bg-red-500"
              />

              <TopEvent
                icon={<FileText className="text-white" />}
                title="Copyright Project"
                rate="$10/hour"
                tags={['Remote', 'Part-time']}
                description="Content writing and copyright management project"
                location="USA"
                time="5h ago"
                status="Not Paid"
                bgColor="bg-blue-500"
              />

              <TopEvent
                icon={<Palette className="text-white" />}
                title="Web Design Project"
                rate="$10/hour"
                tags={['Remote', 'Full-time']}
                description="UI/UX design for web application"
                location="UK"
                time="1d ago"
                status="Paid"
                bgColor="bg-purple-500"
              />
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
                      status={revent.status}
                    />
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;