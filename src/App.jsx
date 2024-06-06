import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AboutMe from './components/AboutMe.jsx'
import Technologies from './components/Technologies.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

function App() {

  return (

    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>

  {/* Background Layer 1 */}
  <div className='fixed top-0 -z-10 h-full w-full'></div>

  {/* Background Layer 2 */}
  <div className='absolute top-0 bottom-0 left-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))]'></div>

  {/* Main Content */}
  <div className='relative z-10'>
    <div className='container mx-auto pb-8'>
      <Navbar />
      <Hero />
      <AboutMe />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  </div>

</div>
  )
}

export default App
