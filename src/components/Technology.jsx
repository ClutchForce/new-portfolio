import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb, SiMeteor, SiMysql, SiOracle } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
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
});

const technologies = [
  {
    name: 'React',
    url: 'https://reactjs.org/',
    icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
    duration: 2.5
  },
  {
    name: 'Next.js',
    url: 'https://nextjs.org/',
    icon: <TbBrandNextjs className="text-7xl" />,
    duration: 3
  },
  {
    name: 'Meteor',
    url: 'https://www.meteor.com/',
    icon: <SiMeteor className="text-7xl text-orange-400" />,
    duration: 5
  },
  {
    name: 'Node.js',
    url: 'https://nodejs.org/',
    icon: <FaNodeJs className="text-7xl text-green-500" />,
    duration: 4.5
  },
  {
    name: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
    icon: <BiLogoPostgresql className="text-7xl text-sky-700" />,
    duration: 2.5
  },
  {
    name: 'MySQL',
    url: 'https://www.mysql.com/',
    icon: <SiMysql className="text-7xl text-sky-800" />,
    duration: 3
  },
  {
    name: 'Oracle',
    url: 'https://www.oracle.com/database/',
    icon: <SiOracle className="text-7xl text-orange-700" />,
    duration: 4.5
  },
  {
    name: 'MongoDB',
    url: 'https://www.mongodb.com/',
    icon: <SiMongodb className="text-7xl text-green-500" />,
    duration: 5
  }
];

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div 
        className="flex flex-wrap items-center justify-center gap-4"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        {technologies.map((tech, index) => (
          <a key={index} href={tech.url} target="_blank" rel="noopener noreferrer">
            <motion.div 
              className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-purple-950"
              variants={iconVariants(tech.duration)}
              initial="initial"
              animate="animate"
            >
              {tech.icon}
            </motion.div>
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default Technology;
