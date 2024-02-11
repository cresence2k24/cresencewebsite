import React from 'react';

import Img1 from '../assets/drone.avif'; 
import Img2 from '../assets/img2.avif';
import {Reveal,RevealLeft,RevealRight} from './Reveal';


const Events = () => {

  return(
  <section className='section lg:mt-10' id='events'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <Reveal>
          <div id='workshop3' className='flex flex-col justify-center items-center'>
            <h2 className='h2 leading-light text-accent'>Workshops</h2>
            <p className='text-gradient max-w-sm mb-8'>Tech ,Nontech & Cultural</p>
            <p className='max-w-sm mb-4'>Premium: Accomodation<br></br>Normal: Registration</p>
            <button className='btn btn-sm'>Book Slot</button>
          </div>
          </Reveal>
          <RevealRight>
          <div id='workshop1' className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
            <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='scale-125 transition-all duration-500' src={Img1} alt=''></img>
            <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-40'>
              <span className='text-gradient'>Drone Technologies</span>
            </div>
            <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-40'> 
              <span className='text-3xl text-white'>1st March</span>
            </div>
          </div>
          </RevealRight>

        </div>
        <RevealLeft>
        <div id='workshop2' className='flex-1 flex-col lg:h-[490px] lg:w-[565px]'>
         <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[542px]'>
            <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='scale-125 transition-all duration-500 lg:w-[565px]' src={Img2} alt=''></img>
            <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-40'>
              <span className='text-gradient'>Generative Ai</span>
            </div>
            <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-40'> 
              <span className='text-3xl text-white'>1st & 2nd March</span>
            </div>
          </div>
        </div>
        </RevealLeft>
      </div>
      
      
    </div>
  </section>
  )
};

export default Events;
