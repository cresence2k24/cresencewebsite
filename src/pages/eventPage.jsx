import React from "react";
import Header from "../components/Header";
import HomeComp from "../components/HomeComp";
import ScrollToTop from "../components/Scrolltotop";
import EventComp from "../components/eventComponent";

const EventPage = (props) => {
  return (
    <div className="bg-site bg-cover bg-no-repeat overflow-hidden flex flex-col justify-center lg:h-[full]">
      <ScrollToTop />
      <Header />
      <EventComp Workshop={props.Workshop} />
      <HomeComp />
    </div>
  );
};

export default EventPage;
