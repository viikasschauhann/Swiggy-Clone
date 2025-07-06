import React from 'react'

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
        <div>
            <div className='max-w-[1200px] mx-auto mb-[100px]'>

                <div className=' my-5 flex items-center justify-between'>
                    <div className='text-[25px] font-bold'>Top restaurant chains in Delhi</div>
                </div>
            </div>
        </div>
    )
}
