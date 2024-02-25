import React from "react";
import Header from "../components/Header";
import HomeComp from "../components/Nav";
import ScrollToTop from "../components/Scrolltotop";
import EventCard from "../components/EventsCard";

const EventLandingPage = () => {
  return (
    <>
      <ScrollToTop />
      <div className="bg-site bg-no-repeat bg-fixed overflow-hidden min-h-[100vh] pb-20 lg:pb-5">
        <Header />
        <div className="h2 text-center text-gradient">
            <h1>
              Our events
            </h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center lg:mt-10">
          <EventCard/>
        </div>
        <HomeComp />
      </div>
    </>
  );
};

export default EventLandingPage;
