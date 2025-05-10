import { useEffect, useState } from "react";
import { FaCalendarAlt, FaEye, FaThumbsUp, FaComment, FaThumbsDown } from "react-icons/fa";
import { MdUpdate, MdPlayCircleFilled } from "react-icons/md";
import {Link } from "react-router";
import { useDispatch } from "react-redux";
import { getAllNews, getLike } from "../redux/newsSlice";
import { Bounce, toast } from "react-toastify";
let BASE_URL = "https://news.drafts.az/api"


const Card = ({news}) => {
  const dispath = useDispatch()
  const {title , thumbnail , like , dislike ,views , category ,createdAt , id} = news
  const token = localStorage.getItem("token")
  const action = (id,type) => {
    if(token){
      dispath(getLike({id,type}))
    }  
    else{
        toast.warn("Zəhmət olmasa giriş edin", {
          position: "top-right",
          autoClose: 2000,
          transition: Bounce,
      })
    }
  }
  return (
    <div className="max-w-sm bg-white rounded-xl shadow p-4 space-y-3">
      <div className="relative w-full h-48 overflow-hidden rounded-md">
        <Link to={`/detail/${id}`}>
        <img
          src={thumbnail} 
          alt="Yangın"
          className="w-full h-full object-cover"
        />
        </Link>
        <div className="absolute bottom-2 left-2 flex gap-2">
          <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
            <MdUpdate size={14} /> YENİLƏNİR
          </span>
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
            <MdPlayCircleFilled size={14} /> VİDEO
          </span>
        </div>
      </div>

      <div className="flex items-center text-gray-500 text-sm gap-4">
        <div className="flex items-center gap-1">
          <FaCalendarAlt size={12} />
          <span>{createdAt.slice(0,10)}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye size={14} />
          <span>{views}</span>
        </div>
      </div>

    <div className="h-12">
      <h3 className="line-clamp-1 text-sm py-1 font-semibold">
        {title}
      </h3>
      <div className="text-teal-600 text-xs font-semibold uppercase">{category.name}</div>

    </div>


      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <FaThumbsUp size={14} className={``}  onClick={() => action(id,"like")} />
          <span>{like}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaThumbsDown size={14} className={``} onClick={() => action(id,"dislike")} />
          <span>{dislike}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
