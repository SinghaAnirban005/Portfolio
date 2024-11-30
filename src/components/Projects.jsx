import React from 'react'
import blog from "../Others/blog.webp"
import lf from "../Others/lf.PNG"
import pg from "../Others/pg.png"
import musix from "../Others/musix.png"
import study from "../Others/study.png"
import good from "../Others/good.png"
import { motion } from 'framer-motion'

function Projects() {

  const Projects = [
    {
      title: "Study Sphere",
      github: "https://github.com/SinghaAnirban005/StudySphere",
      vercel: "https://study-sphere-theta.vercel.app",
      image: study,
      description: "StudySphere is a collaborative platform designed for students to create and join study groups. With features like group chat, resource sharing, and a digital whiteboard that can be exported as a PDF, StudySphere aims to enhance the learning experience and promote collaborative studying.",
      technologies: ["TAILWIND CSS", "JS", "REACT JS", "NODE JS", "SOCKET IO", "EXPRESS JS", "MONGO DB"],
    },

    {
      title: "My Digital Diary",
      github: "https://github.com/SinghaAnirban005/My-Digital-Diary",
      vercel: "https://my-digital-diary.vercel.app",
      image: blog,
      description: "The Digital Diary is a modern, intuitive, and secure web application designed to replace traditional paper diaries with a digital solution. It allows users to record, manage, and revisit their daily thoughts, experiences, and memories seamlessly from any device.",
      technologies: ["TAILWIND CSS", "JS", "REACT JS", "APPWRITE", "REDUX-TOOLKIT"],
    },

    {
      title: "Secure Password Generator",
      github: "https://github.com/SinghaAnirban005/Password-Generator",
      vercel: "https://password-generator-sand-ten.vercel.app",
      image: pg,
      description: "With the increasing importance of cybersecurity, this project aims to provide an easy and effective solution for generating secure passwords, ensuring better protection against unauthorized access and cyber threats.",
      technologies: ["HTML", "TAILWIND CSS", "JS", "REACT JS"],
    },

    {
      title: "Musix Match",
      github: "https://github.com/SinghaAnirban005/Lyrics_Finder",
      vercel: "https://lyrics-finder-tau.vercel.app",
      image: musix,
      description: "Musix Match is a dynamic web application designed to help music enthusiasts effortlessly search for and access the lyrics of their favorite english songs",
      technologies: ["HTML", "CSS", "JS", "REACT JS", "REDUX-TOOLKIT"],
    },
  ]

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
      whileInView={{ opacity: 1, y: 0}}
      initial= {{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5}}
      className='my-20 text-center text-4xl'>
        Projects
      </motion.h1>

      <div>
        {Projects.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>

            <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial= {{ opacity: 0, x: -100 }}
            transition={{duration: 1}}
            className='w-full lg:w-1/4'>
            <a href={project.github} target='_blank'>
            <img 
              src={project.image}
              width={150}
              height={150}
              alt={project.title}
              className='mb-6 rounded mt-1'
            />
            </a>
            </motion.div>


            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial= {{ opacity: 0, x: 100 }}
            transition={{duration: 1}}
            className='w-full max-w-xl lg:w-3/4 -mt-1 mb-6'> 
              <a href={project.vercel} target='_blank'>
              <h6 className='mb-2 font-semibold text-justify'>{project.title}</h6>
              </a>
              <p className='mb-4 text-neutral-400 text-justify'>{project.description}</p>

              {project.technologies.map((tech, index) => (
                <span key={index} className='mr-2  rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 cursor-pointer' >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>      
    </div>
  )
}

export default Projects
