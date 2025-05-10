import React from 'react'
import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../redux/newsSlice';
import { FaCircle } from "react-icons/fa";

function TopBar({statue}) {
  const { news } = useSelector(store => store.news.news)
  const dispath = useDispatch() 
  useEffect(() => {
    dispath(getAllNews())
  },[])
  let code = ""
  news?.slice(0,5).forEach(element => {
    code += ` ${element.title} `
  });
  
  return (
    <div className={`bg-[#051D39] ${statue  == "mobile" ? "block md:hidden" : "hidden md:block"}`}>
        <div className='w-[90%] text-[14px] mx-auto py-1 text-white cursor-pointer font-bold overflow-hidden whitespace-nowrap'>
        <Marquee speed={100} gradient={false} pauseOnHover={true}>{code}</Marquee>
        </div>
    </div>
  )
}

export default TopBar