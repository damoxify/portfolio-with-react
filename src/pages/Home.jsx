import React from 'react'

function Home(){
  return (
    <div className='w-full h-screen bg-slate-600'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-2xl text-black-800 font-bold'>Hi, my name is</h1>
        <h1 className='text-4xl sm:text-7xl  font-bold text-[#b6c0e0]'>Adedamola Ajasa,</h1>
        <h2 className='text-4xl sm:text-7xl  font-bold text-[#8892b0]'>I'm a Frontend developer.</h2>
        <p className='text-[#7281ab] py-8 max-w-[700px]'>I'm a full-stack developer specializing in building (and occasionally
            designing ) exceptional digital experiences. Currently, I'm focused on
             building responsive full-stack web applications.</p>
      </div>
    </div>
  )
}

export default Home
