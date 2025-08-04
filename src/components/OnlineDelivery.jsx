import React, { useEffect, useState } from 'react'
import Card from './Card';
import { BsFilter } from "react-icons/bs";
import { IoIosArrowRoundDown } from "react-icons/io";

export default function OnlineDelivery() {

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


    return (

        <div className='max-w-[1200px] mx-auto'>

            <div className=' my-5 flex items-center justify-between'>
                <div className='text-[25px] font-bold'>Restaurants with online food delivery in Delhi</div>
            </div>
            <div>
                <div className='max-w-[1200px] mx-auto flex my-4 gap-3 '>
                    <div className='preferences'>Filter <BsFilter className='inline'/></div>
                    <div className='preferences'>Sort By <IoIosArrowRoundDown className='inline'/></div>
                    <div className='preferences'>Fast Delivery</div>
                    <div className='preferences'>New on Swiggy</div>
                    <div className='preferences'>Ratings 4.0+</div>
                    <div className='preferences'>Pure Veg</div>
                    <div className='preferences'>Offers</div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-3'>
                {
                    data.map(
                        (d, i) => {
                            return <Card {...d} />
                        }
                    )
                }
            </div>
        </div>
    )
}
