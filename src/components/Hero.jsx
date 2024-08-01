import React from 'react'
// import About from '../constants/index'
import Profile from '../Others/Profile.jpg'
import { motion, transform } from "framer-motion"


function Hero() {

  const container = (delay) => (
    {
      hidden: {x: -100, opacity: 0},
      visible: {
        x:0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
      }
    }
  )

  return (
    <div className='border-b border-neutral-900 pb-10 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='pb-18 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
              Anirban Singha
              </motion.h1>

              <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
              bg-clip-text text-4xl tracking-tight text-transparent mt-14'>
                Full Stack Web Developer
              </motion.span>

              <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className='max-w-xl py-6 font-light text-justify tracking-tighter'>
                  I am a proficient full-stack developer specializing in the MERN stack (MongoDB, Express.js, React.js, and Node.js). 
                  With a strong focus on creating dynamic and responsive web applications, I excel in building scalable solutions that deliver exceptional user experiences. My expertise in both front-end and back-end technologies allows me to seamlessly integrate complex functionalities and optimize performance. Driven by a passion for innovation and problem-solving, I am committed to delivering high-quality applications that meet the evolving needs of users and businesses alike.
              </motion.p>
          </div>
        </div>

        <div className='w-full lg:w-1/2 lg:pb-9 lg:px-10'>
          <div className='flex justify-center'>
            <motion.img
            initial={{ x: 100, opacity: 0}}
            animate={{ x: 0, opacity: 1 }}
            transition={{duration: 1, delay: 1.2}}
            src={Profile} alt='Profile pic' 
            className='rounded-xl'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
