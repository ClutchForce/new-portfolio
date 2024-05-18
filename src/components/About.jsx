import aboutImg from '../assets/about.webp'
import { ABOUT_TEXT } from '../constants'

const container = (delay) => ({
    hidden: {x: -100, opacity:0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const About = () => {
  return (
    <div className="border-b border-neutral-900 pd-4">
        <h2 className="my-20 text-center text-4xl">
            About
            <span className="text-neutral-500"> Me</span>
        </h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img src={aboutImg} alt="about" className='rounded-2xl'/> {/* className="h-# w-# mx-#" */}
                </div>
            </div>
            <div className='w-full lg:w-1/2' >
                <div className="flex justify-center lg:justify-start">
                    <p className='my-2 maxw-xl py-6'>
                        {ABOUT_TEXT}
                    </p>
                </div>
            </div>
        </div>
 
    </div>
  )
}

export default About