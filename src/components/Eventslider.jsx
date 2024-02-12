import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import codequest from '../assets/Images/codequest.avif';
import typesprint from '../assets/Images/typesprint.webp';
import cipher from "../assets/Images/cipherchase.avif";
import logicleague from '../assets/Images/logicleague.avif';
import captureflag from '../assets/Images/captureflag.avif';
import hunt from '../assets/Images/huntthehint.avif';
import moviemad from '../assets/Images/moviemad.avif';
import ipl from '../assets/Images/ipl.avif';
import beg from '../assets/Images/beg.avif';
import quiz from '../assets/Images/quiz.avif';
import freefire from '../assets/Images/freefire.jpg';
import bgmi from '../assets/Images/bgmi.avif';
import { FaArrowRightLong , FaArrowLeftLong } from "react-icons/fa6";
import {Reveal} from './Reveal';
import { Link } from "react-router-dom";

import 'swiper/css';
import 'swiper/css/free-mode';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FreeMode, Navigation } from 'swiper/modules';

export default function EventSlider() {
  return (
    <div className='section'>
    <><div className='container flex flex-col jusify-center items-center gap-y-10 lg:gap-y-5'>
        <div className='lg:h-[35] flex flex-col justify-center items-center'>
        <Reveal>
        <p className='text-gradient max-w-sm mb-8'>Tech Events</p>
        </Reveal>
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
          // pagination={{
          //   clickable: true,
          // }}
          navigation={{
            nextEl: '.swiper-buton-next',
            prevEl: '.swiper-buton-prev',
            clickable: true,
          }}
          mousewheel= {true}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          modules={[FreeMode,Navigation]}
          className="mySwiper1"

        >
            
            <SwiperSlide>
              <Link to="/events/Type-Sprint" className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={typesprint} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Type Sprint</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/events/Code-Quest" className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={codequest} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Code Quest</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/events/Logic-League" className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/40 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={logicleague} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Logic League</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/events/Cipher-Chase" className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={cipher} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Cipher Chase</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/events/Crypto-Venture" className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/40 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={captureflag} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Crypto-Venture</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </Link>
            </SwiperSlide>
            </Swiper>
            <div className="slider-controller hidden lg:flex lg:gap-x-10 justify-center">
              <div className="swiper-buton-prev slider-arrow btn w-9 h-9 mb-[35px] flex justify-center items-center">
              <FaArrowLeftLong />
              </div>
              <div className="swiper-buton-next slider-arrow btn w-9 h-9 mb-[35px] flex justify-center items-center">
              <FaArrowRightLong />
              </div>
            </div>
        
        </div>
        </div>
        <div className='lg:h-[35] flex flex-col justify-center items-center'>
        <Reveal>  
        <p className='text-gradient max-w-sm mb-8'>Non-Tech Events</p>
        </Reveal>
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
          // pagination={{
          //   clickable: true,
          // }}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          navigation={{
              nextEl: '.swiper-buton-n',
              prevEl: '.swiper-buton-p',
              clickable: true,
            }}
          modules={[FreeMode,Navigation]}
          className="mySwiper1"

        >
            
            <SwiperSlide>
            <Link to="/events/Hunt-The-Hint" className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px] lg:h-[250px]' src={hunt} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Hunt the Hint</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link to="/events/Ex-Quiz-Me" className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/20 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={quiz} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Ex-Quiz-Me!</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/events/Ipl-Auction" className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={ipl} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>IPL Auction</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/events/Movie-Madness" className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={moviemad} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Movie Madness</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/events/Get-Grab-Gather" className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px] lg:w-full' src={beg} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Get Grab Gather</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={freefire} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Free Fire</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={bgmi} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>BGMI</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              </Link>
            </SwiperSlide>
        </Swiper>
        <div className="slider-controller hidden lg:flex lg:gap-x-10 justify-center">
              <div className="swiper-buton-p slider-arrow btn w-9 h-9 mb-[35px] flex justify-center items-center">
              <FaArrowLeftLong />
              </div>
              <div className="swiper-buton-n slider-arrow btn w-9 h-9 mb-[35px] flex justify-center items-center">
              <FaArrowRightLong />
              </div>
        </div>
        </div>
        </div>
      </div>
      
    </>
    </div>
  );
};