import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import { GrWorkshop } from "react-icons/gr";
import { CiCircleMore } from "react-icons/ci";
import { IoInformationCircleOutline, IoTimerOutline } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { Link } from "react-scroll";
import { Link as A } from "react-router-dom";

const Nav = () => {
  const [more, setMore] = useState(false);
  const handleMove = () => {
    setMore(false);
  };
  const handleClick = () => {
    setMore(!more);
  };

  return (
    <>
      <div
        className={`${
          more ? "fixed" : "hidden"
        } w-screen h-screen bg-transparent left-0 top-0 cursor-pointer z-50`}
        onClick={handleClick}
        onTouchMove={handleMove}
      ></div>
      <nav className="fixed bottom-2  w-full overflow-hidden z-50">
        <div className="container mx-auto relative">
          <div className="w-fit bg-[#130026] lg:bg-[#130026] py-4 lg:py-2  rounded-[2rem]  mx-auto px-5 flex flex-col justify-center items-center text-2xl text-white/50">
            <div
              className={`${
                more ? "h-[60px] overflow-y-hidden" : " h-0 overflow-hidden"
              } flex md:hidden transition-all duration-300`}
            >
              <Link
                activeClass="text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                to="about"
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              >
                <div className="flex flex-col justify-center items-center ">
                  <IoInformationCircleOutline className="text-2xl" />
                  <p className="text-sm">About</p>
                </div>
              </Link>
              <Link
                activeClass="text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                smooth={true}
                spy={true}
                offset={-30}
                duration={500}
                to="eventslider"
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              >
                <div className="flex flex-col justify-center items-center ">
                  <RiTeamLine className="text-2xl" />
                  <p className="text-sm">Team</p>
                </div>
              </Link>
              <Link
                activeClass="text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                smooth={true}
                spy={true}
                to="timeline"
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              >
                <div className="flex flex-col justify-center items-center">
                  <IoTimerOutline />
                  <p className="text-sm">Timeline</p>
                </div>
              </Link>
              <Link
                activeClass="text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                smooth={true}
                spy={true}
                offset={-30}
                duration={500}
                to="eventslider"
                className="hidden  lg:flex cursor-pointer w-[60px] h-[60px] items-center justify-center"
              >
                <div className="flex flex-col justify-center items-center ">
                  <RiTeamLine className="text-2xl" />
                  <p className="text-sm">Team</p>
                </div>
              </Link>
            </div>
            <div className="flex">
              <A
                activeClass="text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                smooth={true}
                spy={true}
                offset={-300}
                duration={500}
                to="/"
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                onClick={handleMove}
              >
                <div className="flex flex-col justify-center items-center ">
                  <BiHomeAlt className="text-2xl" />
                  <p className="text-sm">Home</p>
                </div>
              </A>
              <Link
                activeClass="text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                to="about"
                className="hidden cursor-pointer w-[60px] h-[60px] lg:flex items-center justify-center"
                onClick={handleMove}
              >
                <div className="flex flex-col justify-center items-center ">
                  <IoInformationCircleOutline className="text-2xl" />
                  <p className="text-sm">About</p>
                </div>
              </Link>
              <A
                activeClass="text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                smooth={true}
                spy={true}
                offset={-30}
                duration={500}
                to="/workshops"
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                onClick={handleMove}
              >
                <div className="flex flex-col justify-center items-center ">
                  <GrWorkshop className="text-2xl" />
                  <p className="text-xs">Workshops</p>
                </div>
              </A>
              <div
                onClick={handleClick}
                className="lg:hidden cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              >
                <div className="flex flex-col justify-center items-center ">
                  <CiCircleMore className="text-2xl" />
                  <p className="text-sm">More</p>
                </div>
              </div>
              <Link
                activeClass="text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                smooth={true}
                spy={true}
                offset={-30}
                duration={500}
                to="eventslider"
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                onClick={handleMove}
              >
                <div className="flex flex-col justify-center items-center ">
                  <MdOutlineEventAvailable className="text-2xl" />
                  <p className="text-sm">Events</p>
                </div>
              </Link>

              <Link
                activeClass="text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                smooth={true}
                spy={true}
                to="timeline"
                className="hidden lg:flex cursor-pointer w-[60px] h-[60px]  items-center justify-center"
                onClick={handleMove}
              >
                <div className="flex flex-col justify-center items-center">
                  <IoTimerOutline />
                  <p className="text-sm">Timeline</p>
                </div>
              </Link>
              <Link
                activeClass="text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                smooth={true}
                spy={true}
                offset={-30}
                duration={500}
                to="eventslider"
                className="hidden  lg:flex cursor-pointer w-[60px] h-[60px] items-center justify-center"
                onClick={handleMove}
              >
                <div className="flex flex-col justify-center items-center ">
                  <RiTeamLine className="text-2xl" />
                  <p className="text-sm">Team</p>
                </div>
              </Link>

              <Link
                activeClass="text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                smooth={true}
                spy={true}
                offset={-30}
                duration={500}
                to="sponsors"
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                onClick={handleMove}
              >
                <div className="flex flex-col justify-center items-center ">
                  <GiCash className="text-2xl" />
                  <p className="text-sm">Sponsors</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
