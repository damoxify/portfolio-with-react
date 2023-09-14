import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


function Contact() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form.current, 'PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      }
  return (
    <div name='contact' className='w-full h-screen bg-black flex justify-center items-center p-4'>
      <form onSubmit={sendEmail} method='POST' action='https://getform.io/f/9fad6b9f-edcc-47d5-850f-66eca4419e97' className='flex flex-col max-w-[600px] w-full mt-20'>
        <div>
          <p className='text-4xl font-bold  inline border-b-4 border-green-600 text-gray-300 ml-20 mr-0'>Contact</p>
          <p className='text-gray-300 py-4 '>Submit the form below or shoot me an email - adedamola.ajasa@student.moringaschool.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'/>
        <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6f6] p-2'  name='message' cols='30' rows='10' placeholder='Message' ></textarea>
        <button className='text-white border-2 rounded-2xl hover:bg-green-600 px-4 py-3 my-8  mx-auto flex items-center'>Let's Collaborate</button>

      </form>
      
    </div>
  )
}

export default Contact
