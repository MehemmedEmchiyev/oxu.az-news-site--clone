import React, { useEffect } from 'react'
import { useState } from 'react'
import { CgLivePhoto } from "react-icons/cg";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { store } from '../redux/store';
import { getAllCategory } from '../redux/allCategory';

function HeaderSlider({statue}) {
    const [effect , setEffect] = useState(false)
    const {categories} = useSelector(store => store.category)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllCategory())
    },[])
    
    
  return (
    <div>
        <div className={`${statue == "desktop" ? "hidden md:flex" : "flex md:hidden"} w-full items-center gap-3 mx-auto`}>
                <div className = {`whitespace-nowrap cursor-pointer font-bold text-white bg-[#F63147] py-1 px-3  leading-[24px] tracking-[-.14px] rounded-3xl duration-500 border-5 ${effect ? 'border-red-100': "border-[#fff]"}`}>
                    <CgLivePhoto  className='inline-block mt-[-4px] mr-1'/>
                    <span className=''>Live</span>
                </div>
                <div className='flex items-center justify-between  gap-3 overflow-x-auto'>
                  {categories && categories.slice(0,9).map(item => <div key={item.id} className='whitespace-nowrap py-1 px-3 text-[#051d39] leading-[24px] tracking-[-.14px] rounded-2xl border-1 border-[#d1d1d1] duration-300 cursor-pointer hover:border-[#999]'>{item.name}</div>)}
                </div>
        </div>
    </div>
  )
}

export default HeaderSlider