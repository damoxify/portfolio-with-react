import React from 'react'
import { data } from '../data/data.js'

function Projects(){
  return (
    <div className='first-letter:w-full h-screen  bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
      <div className='max-w-[1000px] mx-auto my-auto flex flex-col w-full h-full items-center pt-20'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-600'>Projects</p>
            <p className='py-6 text-white'>Check out some of my at Moringa School</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {data.map((item, index)=> (

    <div key={index} style={{ backgroundImage: `url(${item.image})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
    <div className='opacity-0 group group-hover:opacity-100'>
      <span className='text-2xl font-bold text-white tracking-wider'>
            {item.name}
      </span>
    <div className='pt-8 text-center'>
      <a href={item.github} target="_blank">
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
      </a>
       <a href={item.live} target='_blank'></a>
       </div>
      </div>
    </div>
          ))}
         
        </div>
      </div>
    </div>
  )
}

export default Projects
