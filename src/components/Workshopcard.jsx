import React from "react";
import WorkshopsData from "../assets/Data/workshopdata";
import { Reveal } from "../components/Reveal";
import { Link } from "react-router-dom";

const WorkshopCard = () => {
    
    return WorkshopsData.map((item) => {
          return (
              <Reveal>
                  <Link 
                  to={item.id}
                  className="mx-10 flex flex-col lg:flex-row section relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[348px] lg:w-[368px]"
                >
                  <div className="bg-black/70 w-full h-full absolute z-40"></div>
                  <img
                    className="scale-125 h-[248px] w-[348px] lg:h-[378px]"
                    src={item.img}
                    alt=""
                  ></img>
                  <div className="absolute left-12 bottom-24 z-40">
                    <span className="text-gradient">{item.title}</span>
                  </div>
                  <div className="absolute left-12 bottom-14 z-40">
                    <span className="text-3xl text-white">1st & 2nd March</span>
                  </div>
                </Link>  
  
              </Reveal>
          );
                
      
    });
};
export default WorkshopCard