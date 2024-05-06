import React from 'react';
// images
import Image from '../assets/about1.png';
// icons
import { FaGamepad, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaMailchimp, FaMapPin, FaVoicemail, FaYoutube, FaGmail } from "react-icons/fa";
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
        <motion.h1 
        variants={fadeIn('up, 0.3')} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.7}} 
        className='text-[55px] font-bold leading-[0.8] lg:text-[100px]'
        >
          AZKHAL <span>ZAVIER</span>
        </motion.h1>

        <motion.div 
        variants={fadeIn('up, 0.4')} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.7}}
        className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
        >
          <span className='text-white mr-5'>I am</span>
          <TypeAnimation 
          sequence={[
            'Junior Developer',
            2000,
            'UI/UX Enthusiast',
            2000,
          ]} 
            speed={30}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
          />
          </motion.div>
              <motion.p 
              variants={fadeIn('up, 0.5')} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
                <TypeAnimation 
          sequence={[
            'Look deeper if you are interested in getting to know me! Im open to talking about business and work.',
            3000,
            
          ]} 
            speed={80}
            className='text-white'
            wrapper='span'
            repeat={Infinity}
          />
              </motion.p>
          <motion.div 
          variants={fadeIn('up, 0.6')} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <form action='#contact'>
            <button className='btn btn-lg'>Contact me</button>
            </form>
            <a href='#work' className='text-gradient btn-link'>
              My Portofolio
            </a>
          </motion.div>

          {/* socials */}
          <motion.div 
          variants={fadeIn('up, 0.7')} 
          initial="hidden"
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='https://github.com/Azkhal20' target='blank'>
              <FaGithub />
            </a>
            <a href='https://www.instagram.com/azkhalzvr/' target='blank'>
              <FaInstagram />
            </a>
            <a href='https://www.linkedin.com/in/azkhal-zavier/' target='blank'>
              <FaLinkedin />
            </a>
            <a href='https://mail.google.com/mail/u/0/#sent?compose=GTvVlcSMTFLMGQzDVxWPvvKXQRzfQRgTJkKVgbdWnqBXBfZhPWHFVgjfGwfntjtpqSLTqNbLlNlSM' target='blank'>
              <FaMailBulk />
            </a>
          </motion.div>
        </div>
        {/* images */}
        <motion.div 
        variants={fadeIn('down, 0.8')} 
        initial="hidden"
        whileInView={'show'}
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[400px] mix-blend-lighten'>
          <img src={Image} alt=''/>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Banner;

// Look deeper if you are interested in getting to know me! I'm open to talking about business and work.