import React from "react";
import Header from "../components/Header";
import HomeComp from "../components/HomeComp";
import ScrollToTop from "../components/Scrolltotop";
import EventComp from "../components/eventComponent";

const EventPage = () => {
  return (
    <>
      <ScrollToTop />
      <div className="bg-site bg-no-repeat overflow-hidden min-h-[100vh] pb-20 lg:pb-5">
        <Header />
        <div className="flex flex-col justify-center  min-h-[80vh]">
          <EventComp />
        </div>
        <HomeComp />
      </div>
    </>
  );
};

export default EventPage;
