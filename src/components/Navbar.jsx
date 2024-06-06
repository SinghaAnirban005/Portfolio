import React from 'react'
import logo from "../Others/logo.jpg"
import github from "../Others/github.jpg"
import linkedin from "../Others/linkedin.png"
import twitter from "../Others/twitter.jpg"


function Navbar() {
  return (
    <nav className=' mb-20 flex items-center justify-between pb-7'>

      <div className='flex flex-shrink-0 items-center'>
        <img className="mx-1 h-12 cursor-pointer w-12 rounded-3xl" src={logo} alt="logo" />
      </div>

      <div className='m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer'>
      <a href="https://github.com/SinghaAnirban005" target="_blank"><img className="h-14 rounded-3xl" src={github} alt='github' /></a>
      <a href="https://www.linkedin.com/in/anirban-singha-46a7b8296/" target="_blank"><img className="h-8 rounded-2xl" src={linkedin} alt='linkedin' /></a>
      <a href='https://x.com/Aan00789423' target='_blank'><img className="h-11 rounded-4xl" src={twitter} alt='twitter' /></a>
      {/* <img className="h-14 rounded-3xl" src={github} alt='github' /> */}
      </div>
      
    </nav>
  )
}

export default Navbar
