import React from 'react'
import { motion } from 'framer-motion'

function Contact() {

  const details = {
    address: "Rabindra Sarani, Shivmandir,Siliguri, West Bengal",
    email: "anirbansingha20@gmail.com",
  }

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1 
      whileInView={{ opacity: 1, y: 0}}
      initial= {{ opacity: 0, y: -100}}
      transition={{ duration: 1 }}
      className='my-10 text-center text-4xl'>
        Get In Touch
      </motion.h1>

      <div className='text-center tracking-tighter'>
        <motion.p 
        whileInView={{ opacity: 1, x: 0}}
        initial= {{ opacity: 0, x: -100 }}
        transition={{ duration: 1}}
        className='my-4'>{details.address}</motion.p>
        {/* <p className='my-4'></p> */}
        <a href='/' className='border-b'>{details.email}</a>
      </div>
    </div>
  )
}

export default Contact
