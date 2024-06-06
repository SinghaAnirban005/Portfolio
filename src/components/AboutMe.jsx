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
      <img className='rounded-2xl' src={about} alt='about' />
    </div>

      </motion.div>
      <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial= {{ opacity: 0, x: 100}}
      transition={{ duration: 0.5 }}

      className='w-full lg:w-1/2'>
      <div className='flex justify-center text-center lg:justify-start'>
        <p className='my-2 max-w-xl py-6'>I am a goal-oriented Entry Level Frontend Developer with knowledge of HTML, CSS, JavaScript, React, Redux Toolkit, and React-Router-DOM seeking to use technical proficiency and creativity to develop engaging user experiences and advance in a professional career. Looking to leverage effective debugging, code optimization and project collaboration capabilities to produce applications that exceed user expectations.</p>
      </div>
    </motion.div>
      </div>
    </div>
  )
}

export default AboutMe
