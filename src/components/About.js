import React from 'react';

import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-scroll';

const aboutlst = [
  {
    name: 'Technorion',
    description: 'We are well aware of the importance of Technical-events in CreSencE for the college curriculum.Here then TECHNORION comes into picture. Technorion gives young minds an opportunity to showcase their skills.',
    link: 'learn more',
  },
  {
    name: 'Felicita',
    description: 'Felicità is the ultimate platform for the young generations who have talent and special skills in arts and better understanding about our culture. In order to reminiscent the greatness of our culture we are conducting cultural events.',
    link: 'learn more',
  },
  {
    name: 'Xenerico',
    description: 'Xenérico is one of the arena for students included in CreSencE in order to mine their hidden talents through Non-technical Events such as Treasure hunt, IPL Auction, Photography, Complete the lyrics, Online games and Quiz competitions.',
    link: 'learn more',
  }
]


const About = () => {
  return (
  <section className='section' id='about'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between items-center'>
        <div>
          <motion.h2 variants={fadeIn('left', 0.05)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.01 }} className='h2 text-accent mb-6'>About Constelle</motion.h2>
          <motion.h3 variants={fadeIn('left', 0.05)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.01 }} className='h3 max-w-[455px] mb-16'>CreSencE?</motion.h3>
          <motion.p variants={fadeIn('left', 0.05)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.01 }} className='max-w-[455px]'>Hola amigos …! We present you, the biggest college fest in Vizianagaram . CreSencE, with its inception in the year 2007. CreSencE is a Two-day National level Technical Symposium organized by department of Computer Science and Engineering of Jawaharlal Nehru Technological University Gurajada Vizianagaram, has a benchmark for excellence in organizing Technical and non-Technical Events on a breeze of Euphoria with a footfall of thousands.</motion.p>
          <a href='https://jntugv.edu.in/' target = '_blank_' className='btn btn-sm my-9' smooth = {true}>About College</a>
        </div>
        <div>
          <motion.div variants={fadeIn('right', 0.05)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.01 }}>
            {aboutlst.map((ab,index)=> {
              const {name,description,link} = ab;
              return (
              <div className='border-b border-white/20 h-[190px] lg:h-[146px] mb-[38px] flex justify center' key = {index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a href="#" className='btn w-9 h-9 mb-[35px] flex justify-center items-center'>
                    <BsArrowUpRight />
                  </a>
                  {/* <a href='#' className='text-gradient text-sm'>{link}</a> */}

                </div>
                
              </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
  )
};

export default About;
