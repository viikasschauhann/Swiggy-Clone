import React from 'react'

export default function Card() {
  return (
    <div className='w-[273px]'>
        <div className='h-[182px] rounded-[15px] overflow-hidden relative'>
            <img className='object-cover w-full h-full' src="http://localhost:5000/images/2b4f62d606d1b2bfba9ba9e5386fabb7.jpeg" alt="" />
            <div className='image-overlay absolute w-full h-full'></div>

        </div>      
    </div>
  )
}
