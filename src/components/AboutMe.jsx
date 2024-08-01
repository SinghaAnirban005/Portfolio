import React from 'react'
import about from '../Others/about.PNG'
import {motion} from "framer-motion"


function AboutMe() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>
      About
      <span className='text-neutral-500'>Me</span>
      </h1>

      <div className='flex flex-wrap'>
      <motion.div
      whileInView={{ opacity: 1, x: 0}}
      initial={{ opacity: 0, x: -100}}
      transition={{duration: 0.5}}
      className='w-full lg:w-1/2 lg:p-8'>
    <div className='flex items-center justify-center'>
      <img className='rounded-xl h-56' src={about} alt='about' />
    </div>

      </motion.div>
      <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial= {{ opacity: 0, x: 100}}
      transition={{ duration: 0.5 }}

      className='w-full lg:w-1/2'>
      <div className='flex justify-center text-center lg:justify-start'>
        <p className='my-2 max-w-xl py-6'>
        I am a dedicated full-stack MERN developer with a strong foundation in MongoDB, Express.js, React.js, and Node.js. Passionate about crafting seamless and scalable web applications, I leverage my expertise in both front-end and back-end development to build dynamic, user-centric solutions. 
        My hands-on experience with the MERN stack allows me to tackle complex challenges, optimize performance, and deliver high-quality applications that drive user engagement and business success. 
        </p>
      </div>
    </motion.div>
      </div>
    </div>
  )
}

export default AboutMe
