import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import { GrWorkshop } from "react-icons/gr";
import { CiCircleMore } from "react-icons/ci";
import { IoInformationCircleOutline, IoTimerOutline } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { Link as A, useLocation } from "react-router-dom";

const Nav = () => {
  const [more, setMore] = useState(false);
  const location = useLocation().pathname;
  const link = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Workshops", href: "/workshops" },
    { name: "Events", href: "/events" },
    { name: "Timeline", href: "/timeline" },
    { name: "Team", href: "/team" },
    { name: "Sponsors", href: "/sponsors" },
  ];

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
              <A
                to="/about"
                className={`${
                  location === link.at(1).href
                    ? "text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                    : ""
                } cursor-pointer w-[60px] h-[60px] flex items-center justify-center`}
              >
                <div className="flex flex-col justify-center items-center ">
                  <IoInformationCircleOutline className="text-2xl" />
                  <p className="text-sm">About</p>
                </div>
              </A>
              <A
                to="/team"
                className={`${
                  location === link.at(5).href
                    ? "text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                    : ""
                } cursor-pointer w-[60px] h-[60px] flex items-center justify-center`}
              >
                <div className="flex flex-col justify-center items-center ">
                  <RiTeamLine className="text-2xl" />
                  <p className="text-sm">Team</p>
                </div>
              </A>
              <A
                to="/timeline"
                className={`${
                  location === link.at(4).href
                    ? "text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                    : ""
                } cursor-pointer w-[60px] h-[60px] flex items-center justify-center`}
              >
                <div className="flex flex-col justify-center items-center">
                  <IoTimerOutline />
                  <p className="text-sm">Timeline</p>
                </div>
              </A>
            </div>
            <div className="flex">
              <A
                to={"/"}
                className={`${
                  location === link.at(0).href
                    ? "text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                    : ""
                } cursor-pointer w-[60px] h-[60px] flex items-center justify-center`}
                onClick={handleMove}
              >
                <div className="flex flex-col justify-center items-center ">
                  <BiHomeAlt className="text-2xl" />
                  <p className="text-sm">Home</p>
                </div>
              </A>
              <A
                to="/about"
                className={`${
                  location === link.at(1).href
                    ? "text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                    : ""
                } hidden cursor-pointer w-[60px] h-[60px] lg:flex items-center justify-center`}
                onClick={handleMove}
              >
                <div className="flex flex-col justify-center items-center ">
                  <IoInformationCircleOutline className="text-2xl" />
                  <p className="text-sm">About</p>
                </div>
              </A>
              <A
                to="/workshops"
                className={`${
                  location === link.at(2).href
                    ? "text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                    : ""
                } cursor-pointer w-[60px] h-[60px] flex items-center justify-center`}
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
                <div
                  className={`${
                    more
                      ? "text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                      : ""
                  } cursor-pointer w-[60px] h-[60px] flex flex-col items-center justify-center`}
                >
                  <CiCircleMore className="text-2xl" />
                  <p className="text-sm">More</p>
                </div>
              </div>
              <A
                to="/events"
                className={`${
                  location === link.at(3).href
                    ? "text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                    : ""
                } cursor-pointer w-[60px] h-[60px] flex items-center justify-center`}
                onClick={handleMove}
              >
                <div className="flex flex-col justify-center items-center ">
                  <MdOutlineEventAvailable className="text-2xl" />
                  <p className="text-sm">Events</p>
                </div>
              </A>

              <A
                to="/timeline"
                className={`${
                  location === link.at(4).href
                    ? "text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                    : ""
                } hidden cursor-pointer w-[60px] h-[60px] lg:flex items-center justify-center`}
                onClick={handleMove}
              >
                <div className="flex flex-col justify-center items-center">
                  <IoTimerOutline />
                  <p className="text-sm">Timeline</p>
                </div>
              </A>
              <A
                to="/team"
                className={`${
                  location === link.at(5).href
                    ? "text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                    : ""
                } hidden cursor-pointer w-[60px] h-[60px] lg:flex items-center justify-center`}
                onClick={handleMove}
              >
                <div className="flex flex-col justify-center items-center ">
                  <RiTeamLine className="text-2xl" />
                  <p className="text-sm">Team</p>
                </div>
              </A>

              <A
                to="/sponsors"
                className={`${
                  location === link.at(6).href
                    ? "text-white underline underline-offset-8 decoration-blue-500 decoration-[3px]"
                    : ""
                } cursor-pointer w-[60px] h-[60px] flex items-center justify-center`}
                onClick={handleMove}
              >
                <div className="flex flex-col justify-center items-center ">
                  <GiCash className="text-2xl" />
                  <p className="text-sm">Sponsors</p>
                </div>
              </A>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
