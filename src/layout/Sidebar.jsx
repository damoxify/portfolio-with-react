import React from 'react'
import { FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

function Sidebar(){
  return (
    <div>
<div className='hidden lg:flex fixed flex-col  top-[35%] right-0 '>
    <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] duration-300 bg-[#b4bfc5] bg-opacity-0 '>
            <a className='flex justify-evenly items-center w-full text-gray-300'
            href="https://www.linkedin.com/in/adedamola-ajasa" rel='noopener noreferrer' target={'_blank'}>
            <FaLinkedin size={30}/> 
            </a>
        </li>
        <li className='w-[70px] h-[60px] flex justify-between items-center mr-[-100px] duration-300 bg-[#b4bfc5] bg-opacity-0 hover:bg-blue-600 hover:rounded-3xl'>
            <a className='flex justify-evenly items-center w-full text-gray-300'
            href="https://www.linkedin.com/in/adedamola-ajasa" rel='noopener noreferrer' target={'_blank'}>
            <FaLinkedin size={30}/> 
            </a>
        </li>
        <li className='w-[70px] h-[60px] flex justify-between items-center mr-[-100px]  duration-300  bg-opacity-0 hover:bg-white hover:rounded-3xl'>
            <a className='flex justify-evenly items-center w-full text-gray-300'
            href="https://www.github.com/damoxify"rel='noopener noreferrer' target={'_blank'}>
               <FaGithub size={30} className='hover:bg-black rounded-3xl'/> 
            </a>
        </li>  <li className='w-[70px] h-[60px] flex justify-between items-center mr-[-100px] duration-300  bg-opacity-0 hover:bg-[#0b3b30] hover:rounded-3xl'>
            <a className='flex justify-evenly items-center w-full text-gray-300'
            href="/" rel='noopener noreferrer' target={'_blank'}>
                 <HiOutlineMail size={30}/>
            </a>
        </li>  <li className='w-[70px] h-[60px] flex justify-between items-center mr-[-100px]  duration-300  bg-opacity-0 hover:bg-[#234c5a] hover:rounded-3xl'>
            <a className='flex justify-evenly items-center w-full text-gray-300'
            href="https://docs.google.com/document/d/e/2PACX-1vR2_Ul2Ic4UdTLyTiJI7Xr9XvW5BotjCPNGS5l5rDa2zLxEdvBkzLm3ADUtjbulhg/pub" rel='noopener noreferrer' target={'_blank'}>
              <BsFillPersonLinesFill size={30}/> 
            </a>
        </li>
    </ul>
 </div>
    </div>
    
  )
}

export default Sidebar
