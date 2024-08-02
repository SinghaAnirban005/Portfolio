import React from 'react'
import react from "../Others/react.png"
import js from '../Others/js.png'
import nodejs from "../Others/nodejs.webp"
import redux from "../Others/redux.png"
import css from "../Others/css.webp"
import mongodb from "../Others/mongo.png"
import express from "../Others/express.png"
import { motion } from 'framer-motion'

const iconVariants = (duration) => (
  {
    initial: { y: -10 },
    
    animate: {
      y: [10, -10],
  
    transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
    
  }
)


function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
      whileInView={{ opacity: 1, y: 0 }}
      initial= {{ opacity: 0, y: -100 }}
      transition={{duration: 1.5}}
      className='my-20 text-center text-4xl'>Technologies
      </motion.h1>

      <motion.div 
      whileInView={{ opacity: 1, x: 0 }}
      initial= {{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className='flex flex-wrap items-center justify-center gap-4'>
      
      <motion.div 
      variants={iconVariants(2.5)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <img className='h-12 w-12' src={react} alt='react' />
      </motion.div>

      <motion.div
      variants={iconVariants(3)}
      initial="initial"
      animate="animate" 
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <img className='h-12 w-12' src={js} alt='js' />
      </motion.div>

      <motion.div 
      variants={iconVariants(5)}
      initial="initial"
      animate="animate" 
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <img className='h-12 w-12' src={nodejs} alt='node' />
      </motion.div>

      <motion.div
      variants={iconVariants(2)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <img className='h-12 w-12' src={redux} alt='redux' />
      </motion.div>


      <motion.div 
      variants={iconVariants(6)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <img className='h-12 w-12' src={css} alt='tailwind' />
      </motion.div>

      <motion.div 
      variants={iconVariants(4)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <img className='h-12 w-12' src={mongodb} alt='mongodb' />
      </motion.div>

      <motion.div 
      variants={iconVariants(2.5)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <img className='h-12 w-12' src={express} alt='express' />
      </motion.div>

      </motion.div>
    </div>
  )
}

export default Technologies
