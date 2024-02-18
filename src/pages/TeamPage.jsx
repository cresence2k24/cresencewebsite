import React from "react";
import Header from "../components/Header";
import HomeComp from "../components/Nav";
import ScrollToTop from "../components/Scrolltotop";
import { StudentTeam,FacultyTeam } from "../components/TeamCard";
import { Reveal } from "../components/Reveal"; 

const EventLandingPage = () => {
  return (
    <>
      <ScrollToTop />
      <div className="bg-site bg-no-repeat bg-fixed overflow-hidden min-h-[100vh] pb-20 lg:pb-5">
        <Header />
        <Reveal>
        <div className="h2 text-center text-gradient">
            <h1>
              Faculty Coordinators
            </h1>
        </div>
        </Reveal>
        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center lg:mt-10">
          <FacultyTeam/>
        </div>
        <Reveal>
        <div className="h2 text-center text-gradient">
            <h1>
              Student Coordinators
            </h1>
        </div>
        </Reveal>
        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center lg:mt-10">
          <StudentTeam/>
        </div>
        <HomeComp />
      </div>
    </>
  );
};

export default EventLandingPage;
