import React from 'react'
import blog from "../Others/blog.webp"
import lf from "../Others/lf.PNG"
import pg from "../Others/pg.png"
import musix from "../Others/musix.png"
import good from "../Others/good.png"
import { motion } from 'framer-motion'

function Projects() {

  const Projects = [
    {
      title: "My Digital Diary",
      github: "https://github.com/SinghaAnirban005/My-Digital-Diary",
      image: blog,
      description: "The Digital Diary is a modern, intuitive, and secure web application designed to replace traditional paper diaries with a digital solution. It allows users to record, manage, and revisit their daily thoughts, experiences, and memories seamlessly from any device.",
      technologies: ["TAILWIND CSS", "JS", "REACT JS", "APPWRITE", "REDUX-TOOLKIT"],
    },
    
    {
      title: "Spend-Ex",
      github: "https://github.com/SinghaAnirban005/Spend-ex",
      image: "https://igamemom.com/wp-content/uploads/2014/10/Expense-Tracker-2.0-logo.png",
      description: "Spend-Ex aims to empower users to take control of their finances by providing a user-friendly platform to manage their money effectively. By leveraging the MERN stack, the app delivers a fast and interactive experience that helps users make better financial decisions.",
      technologies: ["JS","TAILWIND CSS","NODE JS", "REACT JS", "REDUX TOOLKIT", "EXPRESS JS", "MONGO DB"],
    },

    {
      title: "Good-Eggs UI Clone",
      github: "https://github.com/SinghaAnirban005/GoodEggs-UI-Clone",
      image: good,
      description: "An user interface clone of the Good Eggs website, designed to replicate the look and feel of the original site. Built with React.js and Tailwind CSS, this clone demonstrates my skills in front-end development and UI/UX design by accurately reproducing a modern e-commerce platform's design elements and functionality",
      technologies: ["JS", "REACT JS", "TAILWIND CSS"]
    },

    {
      title: "Secure Password Generator",
      github: "https://github.com/SinghaAnirban005/Password-Generator",
      image: pg,
      description: "With the increasing importance of cybersecurity, this project aims to provide an easy and effective solution for generating secure passwords, ensuring better protection against unauthorized access and cyber threats.",
      technologies: ["HTML", "TAILWIND CSS", "JS", "REACT JS"],
    },

    {
      title: "Musix Match",
      github: "https://github.com/SinghaAnirban005/Lyrics_Finder",
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
              <h6 className='mb-2 font-semibold text-justify'>{project.title}</h6>
              <p className='mb-4 text-neutral-400 text-justify'>{project.description}</p>

              {project.technologies.map((tech, index) => (
                <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 cursor-pointer' >
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
