import React from "react";
import Header from "../components/Header";
import HomeComp from "../components/Nav";
import Reg from "../components/NotFoundComp";
import Scroll from "../components/Scrolltotop";

const Notfound = (props) => {
  return (
    <div className="h-dvh bg-site to-100% flex flex-col gap-y-0">
      <Header />
      <Scroll />
      <Reg Title={props.Title} text={props.text} />
      <HomeComp />
    </div>
  );
};

export default Notfound;
