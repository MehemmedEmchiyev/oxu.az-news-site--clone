import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { FaRegEye } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect } from 'react';
import { getAllSlider } from '../../redux/sliderSlice';
function Hero() {
    const dispatch = useDispatch()
    const {array} = useSelector(store => store.slider.slider)
    console.log(array);
    useEffect(() => {
        dispatch(getAllSlider())
    },[])
    
  return (
    <div>
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper w-full h-[600px] "
      >
        {
            array?.map(item => <SwiperSlide  className='relative p-1'>
                <div className='w-full md:w-[90%] h-full mx-auto'>
                    <img src={item.thumbnail} className='w-full h-full ' alt="" />
                </div>
                <div className='absolute bottom-2 left-[50%] transform translate-x-[-50%]  w-full md:w-[80%] !mx-auto z-100 p-6 bg-[rgba(255,255,255,0.9)]'>
                    <div className='mb-5 flex items-center gap-3'>
                        <span className='text-[#1894A0] font-bold'>{item.category.name}</span>
                        <div className="flex items-center gap-4 text-gray-600 text-sm font-medium">
                            <div className="flex items-center gap-1">
                                <IoMdCalendar size={16} />
                                <span>{item.createdAt.slice(0,10)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <FaRegEye size={16} />
                                <span>{item.views}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className=' font-bold py-2 text-[22px]'>{item.title}</p>
                    </div>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
    </div>
  )
}

export default Hero