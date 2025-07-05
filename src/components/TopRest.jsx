import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Card from './Card';

export default function TopRest() {
  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch('http://localhost:5000/top-restaurant-chains');
    const apiData =  await response.json();
    setData(apiData);
  }

  useEffect(
    () => {
      fetchTopRestaurant();
    }, []
  )



  return (
    <div className='max-w-[1200px] mx-auto'>

      <div className=' my-5 flex items-center justify-between'>
        <div className='text-[25px] font-bold'>Top restaurant chains in Delhi</div>
        <div className='flex'>
          <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' ><FaArrowLeft /></div>
          <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' ><FaArrowRight /></div>
        </div>
      </div>
        <div className='flex'><Card /></div>
    </div>
  )
}
