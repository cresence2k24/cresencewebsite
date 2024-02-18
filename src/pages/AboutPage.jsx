import React from "react";
import Header from "../components/Header";
import HomeComp from "../components/Nav";
import About from "../components/About";
import Scroll from "../components/Scrolltotop";

const Notfound = () => {
  return (
    <div className="max-h-100vh overflow-hidden bg-site to-100% flex flex-col gap-y-0">
      <Header />
      <Scroll />
      <About />
      <HomeComp />
    </div>
  );
};

export default Notfound;