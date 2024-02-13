import React from "react";
import Contact from "../components/contact";
import HomeComp from "../components/HomeComp";
import MapEmbed from "../components/mapEmbed";

function ContactPage() {
  return (
    <div className="bg-site min-h-[100vh] flex flex-col lg:flex-row items-center gap-5 lg:px-40 overflow-hidden">
      <HomeComp />
      <Contact />
      <div className="pb-8 mx-2 ">
        <MapEmbed />
      </div>
    </div>
  );
}

export default ContactPage;