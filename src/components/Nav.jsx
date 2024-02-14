import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import { GrWorkshop } from "react-icons/gr";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2  w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-[#130026] lg:bg-[#130026]  py-4 lg:py-2 backdrop-blur-2xl rounded-full max-w-[480px] mx-auto px-5 flex justify-between gap-5  items-center text-2xl text-white/50">
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-300}
            duration={500}
            to="home"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <div className="flex flex-col justify-center items-center ">
              <BiHomeAlt className="text-2xl" />
              <p className="text-sm">Home</p>
            </div>
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            to="about"
            className="hidden cursor-pointer w-[60px] h-[60px] lg:flex items-center justify-center"
          >
            <div className="flex flex-col justify-center items-center ">
              <IoInformationCircleOutline className="text-2xl" />
              <p className="text-sm">About</p>
            </div>
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-30}
            duration={500}
            to="events"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <div className="flex flex-col justify-center items-center ">
              <GrWorkshop className="text-2xl" />
              <p className="text-xs">Workshops</p>
            </div>
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-30}
            duration={500}
            to="eventslider"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <div className="flex flex-col justify-center items-center ">
              <MdOutlineEventAvailable className="text-2xl" />
              <p className="text-sm">Events</p>
            </div>
          </Link>
          {/* <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="timeline"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <IoTimerOutline />
          </Link> */}
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-30}
            duration={500}
            to="team"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <div className="flex flex-col justify-center items-center ">
              <RiTeamLine className="text-2xl" />
              <p className="text-sm">Team</p>
            </div>
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-30}
            duration={500}
            to="sponsors"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <div className="flex flex-col justify-center items-center ">
              <GiCash className="text-2xl" />
              <p className="text-sm">Sponsors</p>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
