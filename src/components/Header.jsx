import React from "react";
import Logo from "../assets/Images/logo.webp";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8 lg:py-0 lg:pt-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/">
            <img src={Logo} alt="" className="h-[92px]"></img>
          </a>
          <Link
            className="btn btn-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200"
            to="about"
            smooth={true}
          >
            Explore!
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
