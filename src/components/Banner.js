import React from 'react';
import Image from '../assets/avatar.webp';
// import { FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
// import { About } from './About';

const Banner = () => {
  return (
    <section className='min-h-[70vh] lg:min-h-[0vh] xl:min-h-[100vh] flex items-center' id="home">
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <motion.div variants={fadeIn('down', 0.03)} initial="hidden" whileInView={'show'} className='hidden lg:flex flex-1 h-[450px] max-w-[320px] lg:max-w-[540px] lg:h-[540px] lg:mb-16'>
            <img src={Image} alt='' />
          </motion.div>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('right', 0.1)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.01 }} className='text-gradient animate-gradient text-[42px] font-bold leading-[0.8] lg:text-[80px] my-16 lg:my-5 drop-shadow-3xl'>
              CreSencE
            </motion.h1>
            <motion.div variants={fadeIn('left', 0.03)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.01 }} className='text-[42px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>Welcome <br></br>to</span>
              <TypeAnimation
                sequence={[
                  'Events.',
                  2000,
                  'Workshops.',
                  2000,
                  'Culturals.',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <p variants={fadeIn('up',0.03)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.01 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Unleashing Talents . Unleash your inner Talents
            </p>
            <div variants={fadeIn('up', 0.03)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.01 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link className='btn btn-lg hover:-translate-y-1 hover:scale-110' to = 'events' smooth = {true}>Go to Events</Link>
              <Link className='text-gradient btn-link drop-shadow-xl cursor-pointer' to='about' smooth = {true}>About CreSencE</Link>
            </div>


            {/* <motion.div variants={fadeIn('up', 0.03)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.01 }} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>
                <FaYoutube />
              </a>
              <a href='#'>
                <FaWhatsapp />
              </a>
              <a href='#'>
                <FaInstagram />
              </a>
            </motion.div> */}

          </div>

          {/* <motion.div variants={fadeIn('down', 0.03)} initial="hidden" whileInView={'show'} className='hidden lg:flex flex-1 h-[450px] max-w-[320px] lg:max-w-[600px] lg:h-[600px]'>
            <img src={Image} alt='' />
          </motion.div> */}
          {/* <div className='mix-blend-luminosity h-[200px]'>
            <img src={Image} alt='' />
          </div> */}

        </div>
      </div>

    </section>
  );
};

export default Banner;
