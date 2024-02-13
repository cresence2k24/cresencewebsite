import React from "react";
import Logo from "../assets/Images/logo.webp";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-8 lg:py-0 lg:pt-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="" className="h-[92px]"></img>
          </Link>
          <ScrollLink
            className="btn btn-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200"
            to="about"
            smooth={true}
          >
            Explore!
          </ScrollLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
