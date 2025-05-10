import React, { useState } from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FcAdvertising } from "react-icons/fc";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { store } from '../redux/store';
import { useDispatch , useSelector} from 'react-redux'
import { changeLightMode } from '../redux/lightdarkSlice';

function SideBar() {
    const { modeStatue } = useSelector(store => store.mode)
    const dispatch = useDispatch()
    const changeMode = () => {
        dispatch(changeLightMode())
    }

    return (
    <div className='hidden md:block'>
        <div className='fixed w-[50px] top-0 left-0 h-full bg-[#FBFBFA] flex flex-col items-center justify-start mt-30'>
            <div className='mb-6'>
                <div className='bg-[#051d39] mb-6 text-white font-bold rounded-[44px] h-6 text-[12px] px-3 flex items-center justify-center'>AZ</div>
                <div className='bg-white text-[#051d30] hover:bg-[#051d39] border-2 border-[#052d39] cursor-pointer duration-500 mb-6 hover:text-white font-bold rounded-[44px] h-6 text-[12px] px-3 flex items-center justify-center'>RU</div>
                <div className='bg-white text-[#051d30] hover:bg-[#051d39] border-2 border-[#052d39] cursor-pointer duration-500 mb-6 hover:text-white font-bold rounded-[44px] h-6 text-[12px] px-3 flex items-center justify-center'>TR</div>
            </div>
            <div className='text-2xl mb-6'>
                <IoIosInformationCircleOutline className='mb-6' />
                <FcAdvertising className='mb-6'/>
                <div className=''>
                    {modeStatue ? <MdOutlineDarkMode onClick={changeMode}/> : <MdOutlineLightMode onClick={changeMode}/>}
                </div>
            </div>
            <div className='text-xl flex flex-col gap-4 items-center justify-center mt-12'>
                <FaFacebook />
                <FaXTwitter />
                <FaTelegramPlane />
                <FaWhatsapp />
                <FaSquareInstagram />
                <FaApple />
            </div>
        </div>
    </div>
  )
}

export default SideBar