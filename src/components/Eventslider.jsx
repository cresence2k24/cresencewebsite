import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Img2 from '../assets/img2.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// import './eventstyles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function EventSlider() {
  return (
    <div className='section'>
    <><div className='container flex flex-col jusify-center items-center gap-y-10 lg:gap-y-5'>
    <motion.p variants={fadeIn('right', 0.01)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.01 }} className='text-gradient max-w-sm'>Tech Events</motion.p>
        <div className='lg:h-[35]'>
        <Swiper
          // slidesPerView={1.25}
          breakpoints={{
              320: {
                width: 320,
                slidesPerView: 1.25,
              },
              600: {
                width: 600,
                slidesPerView: 2.25,
              },
              
              768: {
                width: 768,
                slidesPerView: 3.25,
              },
              900: {
                width: 900,
                slidesPerView: 3.25,
              },
              1200: {
                width: 1200,
                slidesPerView: 3.25,
              },
            }}
          spaceBetween={30}
          freemode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          modules={[FreeMode, Pagination]}
          className="mySwiper1"

        >
            <SwiperSlide>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500' src={Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Drone Technologies</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500' src={Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Drone Technologies</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500' src={Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Drone Technologies</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500' src={Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Drone Technologies</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500' src={Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Drone Technologies</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500' src={Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Drone Technologies</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500' src={Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Drone Technologies</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500' src={Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Drone Technologies</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500' src={Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Drone Technologies</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </div>
            </SwiperSlide>
        </Swiper>
        </div>
        <div className='lg:h-[35] flex flex-col justify-center items-center'>
        <motion.p variants={fadeIn('left', 0.01)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.01 }} className='text-gradient max-w-sm mb-8'>Non-Tech Events</motion.p>
        <div className='lg:h-[35]'>
        <Swiper
          // slidesPerView={1.25}
          breakpoints={{
              320: {
                width: 320,
                slidesPerView: 1.25,
              },
              600: {
                width: 600,
                slidesPerView: 2.25,
              },
              
              768: {
                width: 768,
                slidesPerView: 3.25,
              },
              900: {
                width: 900,
                slidesPerView: 3.25,
              },
              1200: {
                width: 1200,
                slidesPerView: 3.25,
              },
            }}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          modules={[FreeMode, Pagination]}
          className="mySwiper1"

        >
            <SwiperSlide>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500' src={Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Drone Technologies</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500' src={Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Drone Technologies</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500' src={Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Drone Technologies</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500' src={Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Drone Technologies</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500' src={Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Drone Technologies</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500' src={Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Drone Technologies</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500' src={Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Drone Technologies</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500' src={Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Drone Technologies</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500' src={Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Drone Technologies</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </div>
            </SwiperSlide>
        </Swiper>
        </div>
        </div>
      </div>
      
    </>
    </div>
  );
};