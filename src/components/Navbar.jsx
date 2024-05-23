import logo from '../assets/ClutchCodeLogo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaCoffee} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../constants'


const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <Link to={BASE_URL}>
                <img src={logo} alt="logo" className="mx-2 w-24" />
            </Link>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
            <Link to={`${import.meta.env.BASE_URL}tests`}>
            <button className="px-4 py-2 bg-purple-900 text-white rounded">
                Go to Tests
            </button>
            </Link>
            <Link to={`${import.meta.env.BASE_URL}tests2`}>
            <button className="px-4 py-2 bg-violet-400 text-white rounded">
                Go to Tests2
            </button>
            </Link>
            <Link to={`${import.meta.env.BASE_URL}tests3`}>
            <button className="px-4 py-2 bg-blue-700 text-white rounded">
                Go to Tests3
            </button>
            </Link>
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
