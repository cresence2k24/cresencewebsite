import React from 'react';
import { BiHomeAlt } from 'react-icons/bi'
import { RiTeamLine } from "react-icons/ri";

import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { Link } from 'react-scroll';


const Nav = () => {
  return (
    <nav className='fixed bottom-2 ig:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>

        <div className='w-full bg-[#130026] lg:bg-[#130026]  h-[76px] backdrop-blur-2xl rounded-full max-w-[480px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          <Link activeClass="active" smooth = {true} spy = {true} offset={-300} to = "home" className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiHomeAlt />
          </Link>
          <Link activeClass="active" smooth = {true} spy = {true} offset={-45} to = "about" className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <IoInformationCircleOutline />
          </Link>
          <Link activeClass="active" smooth = {true} spy = {true} offset={-30} to = "events" className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <MdOutlineEventAvailable />
          </Link>
          {/* <Link activeClass="active" smooth = {true} spy = {true} to = "timeline" className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <IoTimerOutline />
          </Link> */}
          <Link activeClass="active" smooth = {true} spy = {true} offset={-30} to = "team" className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <RiTeamLine />
          </Link>
          <Link activeClass="active" smooth = {true} spy = {true} offset={-30} to = "sponsors" className='corsor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <GiCash />
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Nav;
