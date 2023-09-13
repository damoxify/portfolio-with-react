import React from 'react'
import { FaHtml5, FaCss3, FaReact, FaJs } from 'react-icons/fa'


function Skills() {
  return (
    <div className='w-full h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full justify-center items-center'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-green-600 text-black'>Skills</p>

        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#78a0d1] hover:scale-110 duration-500 text-4xl bg-black'>
            <FaHtml5 size={50}/>
            <p>HTML</p>
          </div>
          <div className='shadow-md shadow-[#1c2734] hover:scale-110 duration-500 text-4xl bg-black'>
          <FaCss3 size={50}/>
            <p>CSS</p>
          </div>
          <div className='shadow-md shadow-[#78a0d1] hover:scale-110 duration-500 text-4xl bg-black'>
          <FaJs size={50}/>
            <p>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#78a0d1] hover:scale-110 duration-500 text-4xl bg-black'>
          <FaReact size={50}/>
            <p>React</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
