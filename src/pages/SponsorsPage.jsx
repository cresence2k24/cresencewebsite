import React from "react";
import Header from "../components/Header";
import HomeComp from "../components/Nav";
import Sponsors from "../components/SponsorsPageComp";
import Scroll from "../components/Scrolltotop";

const Notfound = () => {
  return (
    <div className="min-h-[100vh] overflow-hidden bg-site bg-fixed to-100% flex flex-col gap-y-0 pb-20">
      <Header />
      <Scroll />
      <Sponsors />
      <HomeComp />
    </div>
  );
};

export default Notfound;