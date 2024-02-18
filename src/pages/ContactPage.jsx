import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import HomeComp from "../components/Nav";
import MapEmbed from "../components/mapEmbed";

function ContactPage() {
  return (
    <>
    <div className="bg-site">
    <Header />
    <div className="bg-site min-h-[100vh] flex flex-col lg:flex-row items-center gap-5 lg:px-40 overflow-hidden">
      <HomeComp />
      <Contact />
      <div className="pb-8 mx-2 ">
        <MapEmbed />
      </div>
    </div>
    </div>
    </>
  );
}

export default ContactPage;
