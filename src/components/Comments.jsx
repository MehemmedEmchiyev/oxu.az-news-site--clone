import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, changeStatus, getComments } from '../redux/commentsSlice';
import { Bounce, toast } from 'react-toastify';


export default function CommentSection({id}) {
    const commentsList = useSelector(store => store.comments.comments)
    const commentStatue = useSelector(store => store.comments.commetStatue)
    const dispatch = useDispatch()
    const [content, setNewComment] = useState('');
    useEffect( () => {
        dispatch(getComments(id))
    },[content])
    const token = localStorage.getItem("token")

  const addNewsComment = async () => {
    const response = await dispatch(addComment({id,content})) 
    console.log(response);
    
    if(response.payload.error){
      toast.error(response.payload.message[0], {
        position: "top-right",
        autoClose: 2000,
        transition: Bounce,
      })
    }
    else if(response){
      toast.success("Xəbər Əlavə Edildi", {
        position: "top-right",
        autoClose: 2000,
        transition: Bounce,
      })
      setNewComment("")
    }
    
    if(!token) {
      toast.warn("Zəhmət olmasa giriş edin", {
        position: "top-right",
        autoClose: 2000,
        transition: Bounce,
      })
    }

  }
  
  return (
    <div className="w-full md:max-w-[70%] mx-auto p-4 space-y-4">
      <div className="flex items-start gap-3">

        <input
          placeholder="Join the discussion..."
          value={content}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <button onClick={addNewsComment} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Comment
        </button>
      </div>
      {commentsList.length > 0 ? commentsList.map((comment) => (
        <div key={comment.id} className="bg-white p-4 rounded-lg ">
          <div className="flex gap-3 items-start">
            <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold">
              {comment.user.fullName[0]}
            </div>
            <div className="flex-1">
                <div className="text-sm font-semibold">{comment.user.fullName} <span className="text-gray-400">• {comment.createdAt.slice(0,10)}</span></div>
                <p className="text-gray-700 mt-1">{comment.content}</p>
                <div className="flex gap-4 text-gray-500 mt-2 text-sm">
              </div>
            </div>
          </div>
        </div>
      )) : <div className='text-center italic'>Hələ Şərh Mövcüd deyil</div>}
    </div>
  );
}