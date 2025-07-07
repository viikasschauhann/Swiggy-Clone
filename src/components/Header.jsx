import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { RiDiscountPercentLine } from "react-icons/ri";
import { FiHelpCircle } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    const links = [
        {
            icon: <IoIosSearch />,
            name: "Search"
        },
        {
            icon: <RiDiscountPercentLine />,
            name: "Offers",
            sup: "NEW"
        },
        {
            icon: <FiHelpCircle />,
            name: "Help"
        },
        {
            icon: <FaRegUser />,
            name: "SignIn"
        },
        {
            icon: <PiShoppingCartSimpleLight />,
            name: "Cart"
        }
    ]

    return (
        <>
            <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? 'visible' : 'hidden',
                zIndex: [9999999]
            }}>
                <div onClick={(e) => {
                    e.stopPropagation();
                }} className='w-[500px] bg-white h-full absolute duration-500'
                    style={{
                        left: toggle ? '0%' : '-100%'
                    }}

                ></div>

            </div>

            <header className=' sticky top-0 p-3 shadow-xl text-[#02060cb3] bg-white z-[9999]'>
                <div className='max-w-[1200px] mx-auto  flex items-center'>
                    <div className='w-[100px] '>
                        <img src="images/logo.png" className='w-full' alt="" />
                    </div>
                    <div className=''>
                        <span className='font-bold border-b-[3px] border-black'>Timarpur</span> New Delhi, India <RxCaretDown className='inline font-bold text-2xl text-[#fc8019] cursor-pointer' onClick={showSideMenu} />
                    </div>
                    <nav className='flex list-none gap-9  ml-auto font-semibold text-[18px]'>
                        {
                            links.map(
                                (link, index) => {
                                   return <li key={index} className='flex items-center gap-2 cursor-pointer hover:text-[#fc8019] '> {link.icon} {link.name} 
                                   <sup className='text-orange-400 text-[11px] font-bold'>{link.sup}</sup></li>
                                }
                            )
                        }

                    </nav>
                </div>

            </header>
        </>
    )
}

