import React from "react";
import Header from "../components/Header";
import HomeComp from "../components/HomeComp";
import ScrollToTop from "../components/Scrolltotop";
import EventCard from "../components/NonTechCards";

const EventLandingPage = () => {
  return (
    <>
      <ScrollToTop />
      <div className="bg-site bg-no-repeat overflow-hidden min-h-[100vh] pb-20 lg:pb-5">
        <Header />
        <div className="text-center text-gradient">
            <h1>
              Non-Tech events
            </h1>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center lg:mt-10">
          <EventCard/>
        </div>
        <HomeComp />
      </div>
    </>
  );
};

export default EventLandingPage;
