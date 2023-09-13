import React from 'react'
import portImage from '../assets/images/portImage.jpg'

function About() {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white'>
            
      <div className='flex flex-col justify-center items-center w-full h-full '>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-green-600'>
                    About
                </p>

            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                
                <div>
            <img src={portImage} alt="Adedamola Ajasa's image" className='max-w-[300] ' />

                </div>
                <div>
                <p className=' text-2xl font-bold mb-10'>Hi. I'm Adedamola Ajasa, nice to meet you. Please take a look around.</p>
                    <p> After graduating as a mechanical engineer, 
                    I decided to take the leap to pursue a career in software engineering. 
                    I enrolled in a full-time immersive software engineering program at Moringa School.
                    Having just completed Frontend development from this rigorous program, I can say that applying to a coding bootcamp
                    has been the best decision I have ever made in my life. 
                    I love to learn new technologies and flex my creativity to create amazing things.
                    </p>
                </div>
                <div>
                </div>
            </div>
        </div>
      </div>
    
  )
}

export default About
