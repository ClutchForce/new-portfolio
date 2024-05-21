import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity:0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
        className="my-20 text-center text-4xl"
        whileInView={{opacity: 1, y:0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration: 0.5}}
        >
            Projects
        </motion.h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                    className="w-full lg:w-1/4"
                    whileInView={{opacity: 1, x:0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{duration: 0.5}}
                    >
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            width={150} 
                            height={150}
                            className="mb-6 rounded"/>
                    </motion.div>
                    <motion.div 
                    className="w-full max-w-xl lg:w-3/4"
                    whileInView={{opacity: 1, x:0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{duration: 0.5}}
                    >
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-sm text-neutral-400">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            
                            <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 ">{tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Projects