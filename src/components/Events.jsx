import React from "react";

import Img1 from "../assets/Images/drone.avif";
import Img2 from "../assets/Images/genAI.avif";
import { Reveal, RevealLeft, RevealRight } from "./Reveal";
import { Link } from "react-router-dom";

const Events = (props) => {
  return (
    <section className="section  xl:min-h-[100vh]" id="events">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <Reveal>
              <div
                id="workshop3"
                className="flex flex-col justify-center items-center"
              >
                <h2 className="h2 leading-light text-accent">Workshops</h2>
                <p className="text-gradient max-w-sm mb-8">
                  Tech ,Nontech & Cultural
                </p>
                <p className="max-w-sm mb-4">
                  Entry Fee + Food (@1day) - 200/-<br></br>
                  Entry Fee + Food (@2days) - 400/-<br></br>
                  Accomodation + Food (@2days) - 500/-
                </p>
                <a
                  href="https://forms.gle/EEbmXa2U1yipcgVp7"
                  target="blank"
                  className="btn btn-sm"
                >
                  Book Slot
                </a>
              </div>
            </Reveal>
            <RevealRight>
              <Link to="/workshops/Drone-Workshop">
                <div
                  id="workshop1"
                  className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]"
                >
                  <div className="bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  <img
                    className="scale-125 transition-all duration-500"
                    src={Img1}
                    alt=""
                  ></img>
                  <div className="absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-40">
                    <span className="text-gradient">Drone Technologies</span>
                  </div>
                  <div className="absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-40">
                    <span className="text-3xl text-white">1st & 2nd March</span>
                  </div>
                </div>
              </Link>
            </RevealRight>
          </div>
          <RevealLeft>
            <Link to="/workshops/Generative-Ai-Workshop">
              <div
                id="workshop2"
                className="flex-1 flex-col lg:w-[565px] lg:h-[490px]"
              >
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[575px]">
                  
                  <div className="bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  <img
                    className="scale-125 transition-all duration-500 lg:w-[565px]"
                    src={Img2}
                    alt=""
                  ></img>
                  <div className="absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-40">
                    <span className="text-gradient">Generative Ai</span>
                  </div>
                  <div className="absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-40">
                    <span className="text-3xl text-white">1st & 2nd March</span>
                  </div>
                </div>
              </div>
            </Link>
          </RevealLeft>
        </div>
      </div>
    </section>
  );
};

export default Events;
