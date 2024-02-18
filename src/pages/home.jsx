import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Nav from "../components/Nav";
import About from "../components/About";
import Events from "../components/Events";
import Team from "../components/Team";
// import Sponsors from '../components/SponsorComp';
import Footer from "../components/footer";
import EventSlider from "../components/Eventslider";

const App = () => {
  return (
    <div className="bg-site bg-fixed overflow-x-hidden bg-no-repeat flex flex-col justify-center lg:h-[full]">
      <div className="lg:bg-hero lg:bg-fixed lg:bg-cover overflow-hidden lg:bg-no-repeat">
        <Header />

        <Banner />
      </div>
      <Nav />
      <div className="lg:bg-site lg:bg-local overflow-hidden lg:bg-no-repeat ">
        <About />
        <Events />
        <EventSlider />
        <Team />
        {/* <Sponsors /> */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
