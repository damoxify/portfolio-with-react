import React, { useState } from 'react'
import  logo from '../assets/images/logo.png'
import {Link} from 'react-router-dom'

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

        <ul className='hidden md:flex md:items-center space-x-10 cursor-pointer'>  
            <li className='hover:border-b-4 border-green-600 '>Home</li>
            <li className='hover:border-b-4 border-green-600 '>About</li>
            <li className='hover:border-b-4 border-green-600 '>Projects</li>
            <li className=' hover:border-b-4 border-green-600 '>Contact</li>
        </ul>
      
    </div>
  )
}

export default Navbar
