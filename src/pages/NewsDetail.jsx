import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getNews } from '../redux/newsSlice';
import CommentSection from '../components/news/Comments';
function NewsDetail() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const { detailNews } = useSelector(store => store.news)
  const {title , content , createdAt,like,dislike,views,thumbnail,category  } = detailNews  
  let str = `${createdAt}`.slice(0,10)

  useEffect(() => {
    dispatch(getNews(id))
  },[])

  return (
    <div className='p-3'>
        <div className=' w-full md:w-[70%] mx-auto pb-10'>
            <div className='w-full h-[500px]'>
                <img className='w-full h-full' src={thumbnail} alt="" />
            </div>
            <div className='my-3 flex items-center justify-between'>
                <span className='text-[14px] uppercase font-semibold text-[#051d39]'>
                    {}
                </span>
                <div className='flex items-center gap-3 text-[#767676]'>
                    <span className='flex items-center gap-3'>
                        <CiCalendar/>
                        {str}
                    </span>
                    <span className='flex items-center gap-3'>
                        <MdOutlineRemoveRedEye/>
                        {views}
                    </span>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-[28px] font-bold text-[#051d39]'>{title}</h1>
                <div className='text-2xl flex items-center gap-6'>
                    <div className='flex items-center gap-3'>
                        <AiOutlineLike />
                        {like}
                    </div>
                    <div className='flex items-center gap-3'>
                        <BiDislike />
                        {dislike}
                    </div>
                </div>
                <p className='text-[#767676] leading-[30px]'>
                    {content}
                </p>
            </div>
        </div>
        <CommentSection id = {id} />
    </div>
  )
}

export default NewsDetail