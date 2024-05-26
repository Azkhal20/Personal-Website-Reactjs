import React from 'react';
// motion
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants'
// img
import Img4 from '../assets/porto-1.png';
import Img5 from '../assets/porto-2.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-6 mb-14 lg:mb-0 lg:justify-center'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br/>
                Work.
              </h2>
              <p className='max-w-sm mb-6'>The projects that I have worked on are upholding my commitment to completing every challenge.
              </p>
              <h2 className='h3'>Interested in seeing more?</h2>
              <button className='btn btn-sm'>View all projects</button>
            </div>

              {/* ------------ PROJECT 1 ------------ */}
              {/* image */}
              {/* <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'> */}
                {/* overlay */}
                {/* <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div> */}
                {/* img */}
                {/* <img 
                  className='group-hover:scale-125 transition-all duration-500' 
                  src={Img4} 
                  alt='vameratale website'
                /> */}
                {/* pretitle */}
                {/* <div className='absolute -bottom-full left-12 group-hover:bottom-32 transition-all duration-500 z-50'>
                  <span className='text-gradient'>vameratale website</span>
                  </div> */}
                {/* title */}
                {/* <div className='absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50'>
                  <span className='text-3x1 text-white'>Flower sales website. using Reactjs, Tailwind, vite.js</span>
                </div>
              </div> */}
            </motion.div>
              {/* --------- END OF PROJECT 1 --------- */}

            {/* ---- START OF PROJECT 2 & 3 ----- */}
            {/* ------------ PROJECT 2 ---------- */}
            <motion.div 
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img 
                className='group-hover:scale-125 transition-all duration-500' 
                src={Img4}
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-[130px] transition-all duration-500 z-50'>
                <span className='text-gradient text-2xl'>Vameratale Website</span>
                </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-[90px] transition-all duration-700 z-50'>
                <span className='text text-xl text-white'>Flower sales website. using Reactjs, Tailwind, vite.js</span>
              </div>
            </div>
              {/* -------- END OF PROJECT 2 ------- */}

              {/* ------------ PROJECT 3 ---------- */}
              {/* image */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img 
                  className='group-hover:scale-125 transition-all duration-500' 
                  src={Img5} 
                  alt=''
                />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-[150px] transition-all duration-500 z-50'>
                  <span className='text-gradient text-2xl'>UI/UX Design Aisa Clean Laundry</span>
                  </div>
                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-[70px] transition-all duration-700 z-50'>
                  <span className='text-white text-xl'>Website design for ordering laundry services from Aisa Clean Laundry using Figma.</span>
                </div>
              </div>
              {/* ------ END OF PROJECT 3 ------*/}
            </motion.div>
          </div>
        </div>
    </section>
  );
};

export default Work;
