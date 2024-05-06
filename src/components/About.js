import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const About = () => { 
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section  id='about' ref={ref}>
      <div className='container mx-auto '>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-38 h-screen'>

          {/* img */}
          {/* <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div> */}

          {/* text */}
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
            <h2 className='h2 text-accent'>Who Am I?</h2>
            <h3 className='h3 mb-4'>I'm a Front-end Developer with over 1 years of experience.</h3>
            <p className='mb-6'>
            Azkhal is an undergraduate student majoring in Information Systems at Gunadarma University who is highly dedicated and enthusiastic about the IT field. Have a strong interest in Web Development and Software Engineering. Actively pursue expertise in HTML, CSS, and JavaScript while learning how to create beautiful and relevant user interfaces. Learn Javascript frameworks like Reactjs and Vuejs consistently.
            </p>

            {/* start stats OPTIONAL */}
              <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {inView ? <CountUp start={0} end={21} duration={3}/> : null}
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    Years <br />Old
                  </div>
              </div>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {inView ? <CountUp start={0} end={252} duration={3}/> : null}
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    Month
                  </div>
              </div>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {inView ? <CountUp start={0} end={7} duration={3}/> : null}
                    k+
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    Days
                  </div>
              </div>
            </div>
            {/* ends of stats OPTIONAL */}

            <div className='flex gap-x-8 top-0 items-center'>
              <form action='#contact'>
              <button className='btn btn-lg'>Contact me</button>
              </form>
              <a href='#work' className='text-gradien btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
