import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Card from './Card';

export default function TopRest() {
  const [slide, setSlide] = useState(0);
  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch('https://swiggy-api-vefd.onrender.com/top-restaurant-chains');
    const apiData = await response.json();
    setData(apiData);
  }

  useEffect(
    () => {
      fetchTopRestaurant();
    }, []
  )


  const prevSlide = () => {
    if (slide == 0) return false;
    setSlide(slide - 3);
  }

  const nextSlide = () => {
    if (data.length - 4 == slide) return false;
    setSlide(slide + 3);
  }


  return (
    <div className='max-w-[1200px] mx-auto'>

      <div className=' my-5 flex items-center justify-between'>
        <div className='text-[25px] font-bold'>Top restaurant chains in Delhi</div>
        <div className='flex'>
          <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}><FaArrowLeft /></div>
          <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}><FaArrowRight /></div>
        </div>
      </div>
      <div className='flex overflow-hidden'>
        {
          data.map((d, index) => {
            return (
              <div style={{
                transform: `translateX(-${slide * 100}%)`
              }} key={index} className='w-[273px] shrink-0 duration-500'>
                <Card {...d} />
              </div>
            )
          })
        }
      </div>
      <hr className='my-4 border-[1px]' />
    </div>
  )
}
