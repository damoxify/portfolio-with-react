import React from 'react'

function Button(){
    function handleClick(){
        console.log("I have been clicked")
    }
  return (
    <div>
      <button onClick={handleClick} className='w-100px bg-gray-200'>Button</button>
    </div>
  )
}

export default Button
