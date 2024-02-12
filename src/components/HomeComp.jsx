import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";

const HomeComp = () => {
  return (
    <div className="fixed bottom-4 right-4 lg:right-4 w-fit overflow-hidden z-50 rounded-full">
      <Link to="/" className="active h-[66px] w-[66px] rounded-full mx-auto px-5 flex justify-center items-center text-2xl text-white">
          <BiHomeAlt />
      </Link>
    </div>
  );
};

export default HomeComp;
