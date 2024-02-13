import React from "react";
import Techevents from "../assets/Data/TecheventsData";
import { Reveal } from "./Reveal";
import { Link } from "react-router-dom";

const EventCard = () => {
    
    return Techevents.map((item) => {
        if(item.type == "tech"){
          return (
            <>
              <Reveal>
                  <Link 
                  to={`/events/${item.id}`}
                  className="mx-10 flex flex-col lg:flex-row section relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[368px]"
                >
                  <div className="bg-black/70 w-full h-full absolute z-40"></div>
                  <img
                    className="scale-125"
                    src={item.img}
                    alt=""
                  ></img>
                  <div className="absolute left-12 bottom-14 z-40">
                    <span className="text-3xl text-white">{item.title}</span>
                  </div>
                </Link>  
  
              </Reveal>
              </>
          );
        }
                
      
    });
};
export default EventCard