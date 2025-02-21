import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

// services data
const services = [
  {
    name : 'Mentee Fullstack Software Development @Productzilla',
    description: 
    'Independent Study Program from Kampus Merdeka Batch 7',
    link: 'Learn more',
  },
  {
    name : 'Mentee Web Developer & UI/UX Design @Infinite Learning',
    description: 
    'Independent Study Program from Kampus Merdeka Batch 6',
    link: 'Learn more',
  },
  {
    name : 'Fullstack Web Developer @Tax Center Gunadarma University',
    description: 
    'Given responsibility for maintaining the tax center website to update the appearance, data and content regularly.',
    link: 'Learn more',
  },
  // {
  //   name : 'Digital Marketing',
  //   description: 
  //   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti id sapiente.',
  //   link: 'Learn more',
  // },
]

const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-center items-center'>

        {/* text & image */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 mb-2 lg:mb-0'
        > 
        {/* lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten */}
          <h2 className='h2 text-accent mb-6'>Experience.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>
          Some of the experiences I have had.
          </h3>
          <button className='btn btn-sm'>See my work</button>
        </motion.div>
        
          {/* services */}
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
          {/* services list */}
          <div>
            {services.map((service, index) => {
              // destructure service
              const {name, description, link} = service;
              return (
                <div 
                className='border-b border-white/20 h-[210px] mb-[40px] flex md:h-40 justify-center items-center'
                key={index}
                >
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-4'>
                      {name}
                    </h4>
                    <p className='font-secondary leading-tight'>
                      {description}
                    </p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href='#' 
                    className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                    >
                      <BsArrowUpRight/> 
                    </a>
                    <a href='#' className='text-gradient text-sm'
                    >
                      {link}
                      </a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Services;
