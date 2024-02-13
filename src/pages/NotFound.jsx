import React from "react";
import Header from "../components/Header";
import HomeComp from "../components/HomeComp";
import Reg from "../components/NotFoundComp";
import Scroll from "../components/Scrolltotop";

const Notfound = () => {
  return (
    <div className="h-dvh bg-site bg-cover to-100% flex flex-col gap-y-0">
      <Header />
      <Scroll />
      <Reg />
      <HomeComp />
    </div>
  );
};

export default Notfound;
