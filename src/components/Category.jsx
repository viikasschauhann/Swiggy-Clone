import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
export default function Category() {
    const [slide, setSlide] = useState(0);
    const [categories, setCategory] = useState([]);

    const fetchCategory = async() => {
        const response = await fetch("https://swiggy-api-vefd.onrender.com/categories");
        const data =  await response.json();
        setCategory(data);

    }

    useEffect(
        () => {
            fetchCategory();

        }, []
    )

    const prevSlide = () => {
        if(slide == 0)  return false;      
        setSlide(slide - 3);
    }

    const nextSlide = () => {
        if(categories.length-8 == slide)    return false;
        setSlide(slide + 3);
    }

    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className=' my-5 flex items-center justify-between'>
                <div className='text-[25px] font-bold'>What's on your mind?</div>
                <div className='flex'>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}><FaArrowLeft /></div>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}><FaArrowRight /></div>
                </div>
            </div>
            <div className='flex overflow-hidden'>
                {
                    categories.map(
                        (cat, index) => {
                            return (
                                <div style={{
                                    transform:`translateX(-${slide*100}%)`
                                }} key={index} className='w-[150px] shrink-0 duration-500'>
                                    <img src={"https://swiggy-api-vefd.onrender.com/images/" + cat.image} alt="" />
                                </div>
                            )
                        }
                    )
                }
            </div>
            <hr className='my-6 border-[1px]'/>
        </div>
    )
}
