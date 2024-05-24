import aboutImg from '../assets/about.webp'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline';


const About = () => {
  return (
    <div className="border-b border-neutral-900 pd-4">
        <motion.h2 className="my-20 text-center text-4xl" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1 }}>
            About <span className="text-neutral-500"> Me</span>
        </motion.h2>
        <div className="flex flex-wrap">
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <div className="max-w-full w-[700px] max-h-[700px] p-4 rounded-2xl overflow-hidden">
                    <div className="aspect-square">
                        <Spline scene="https://prod.spline.design/0QXdhITW1dCFMApg/scene.splinecode" />
                    </div>
                </div>
            </div>
            </motion.div>
            <motion.div className='w-full lg:w-1/2' whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }}>
            <div className="flex justify-center lg:justify-start">
                <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
            </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About