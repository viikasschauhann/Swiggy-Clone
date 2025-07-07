import React, { useEffect, useState } from 'react'
import Card from './Card';
export default function OnlineDelivery() {

    const [data, setData] = useState([]);

    const fetchTopRestaurant = async () => {
        const response = await fetch('http://localhost:5000/top-restaurant-chains');
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
                    <div className='p-3 rounded-2xl shadow font-medium border'>Filter</div>
                    <div className='p-3 rounded-2xl shadow font-medium border'>Sort By</div>
                    <div className='p-3 rounded-2xl shadow font-medium border'>Fast Delivery</div>
                    <div className='p-3 rounded-2xl shadow font-medium border'>New on Swiggy</div>
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
