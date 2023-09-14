import React, { useState } from 'react'
import  logo from '../assets/images/logo.png'
import {Link} from 'react-scroll'
import { FaBars, FaTimes} from 'react-icons/fa'


function Navbar(){
    const[nav, setNav] = useState(false)

    function handleClick(){
        setNav(!nav)
    }
  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-gradient-to-r from-gray-600 to-white'>
        <div className='ml-0 bg-left-top hover:scale-100 duration-75 overflow-hidden hover:bg-slate-600 '>
        <a href="#home" alt='return home'>
            <img src={logo} alt='logo' className='max-w-[100px]'/>
        </a>
        </div>

        <ul className='hidden md:flex md:items-center space-x-10 cursor-pointer '>  
            <li className='hover:border-b-4 border-green-600 '><Link  to="home" smooth={true}  duration={500}>Home</Link></li>
            <li className='hover:border-b-4 border-green-600 '><Link  to="about" smooth={true}  duration={500}>About</Link></li>
            <li className='hover:border-b-4 border-green-600 '><Link  to="skills" smooth={true}  duration={500}>Skills</Link></li>
            <li className='hover:border-b-4 border-green-600 '><Link  to="projects" smooth={true}  duration={500}>Projects</Link></li>
            <li className=' hover:border-b-4 border-green-600 '> <Link  to="contact" smooth={true}  duration={500}>Contact</Link></li>
        </ul>

        <div className='md:hidden z-10 hover:scale-110 duration-500 hover:text-[#203b64] ' onClick={handleClick}>
    {!nav ? <FaBars/> : <FaTimes className='hover:text-[#203b64]'/>}
 </div>


 {/* MOBILE MENU */}
 
 <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#8f9093] opacity-90 flex flex-col justify-center items-center'}>
    <li className='py-6 text- hover:scale-110 duration-500 hover:text-white '><Link onClick={handleClick}  to="home" smooth={true}  duration={500}>
          Home
        </Link></li>
    <li className='py-6 text- hover:scale-110 duration-500 hover:text-white'><Link onClick={handleClick} to="about" smooth={true}  duration={500}>
          About
        </Link></li>
    <li className='py-6 text- hover:scale-110 duration-500 hover:text-white'><Link onClick={handleClick} to="skills" smooth={true}  duration={500}>
          Skills
        </Link></li>
    <li className='py-6 text- hover:scale-110 duration-500 hover:text-white'><Link onClick={handleClick} to="projects" smooth={true}  duration={500}>
          Work
        </Link></li>
    <li className='py-6 text- hover:scale-110 duration-500 hover:text-white'><Link onClick={handleClick} to="contact" smooth={true}  duration={500}>
          Contact
        </Link></li>
</ul>
    


    </div>
  )
}

export default Navbar
