import React, { } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import HeaderSlider from './HeaderSlider';
import TopBar from './TopBar'
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";

function Header() {
  const navigation = useNavigate()
  return (
    <div className='w-full fixed top-0 left-0 z-100 bg-white'>
      <TopBar statue = "destop" />
        <div className='w-full md:w-[90%] mx-auto px-[15px] py-[17px] flex items-center justify-between'>
            <div className=''>
              <Link to={"/"}>
                <img src="https://oxu.az/media/img/logo.svg?v=1" alt="" />
              </Link>
            </div>
            <div>
                <HeaderSlider statue = "desktop" />
            </div>
            <div className=' flex items-center gap-3 text-2xl'> 
                <IoSearch />
                <FaBars />
                <FaRegUser onClick={() => navigation('auth')} />

            </div>
        </div>
        <div>
            <HeaderSlider statue="mobile"/>
        </div>
        <TopBar statue="mobile"/>
    </div>
  )
}

export default Header