import logo from '../assets/ClutchCodeLogo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaCoffee} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo}  alt='logo' className='mx-2 w-24' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
            <a href='https://www.linkedin.com/in/paul-gherghel-582619200' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin />
            </a>
            <a href='https://github.com/ClutchForce' target='_blank' rel='noopener noreferrer'>
                <FaGithub />
            </a>
            <a href='https://www.instagram.com/paul_gherghel_?igsh=NnM0OTF5ZzA0MWVy&utm_source=qr' target='_blank' rel='noopener noreferrer'>
                <FaInstagram />
            </a>
            <a href='https://www.buymeacoffee.com/PaulGherghel' target='_blank' rel='noopener noreferrer'>
                <FaCoffee />
            </a>
        </div>

    </nav>
  )
}

export default Navbar