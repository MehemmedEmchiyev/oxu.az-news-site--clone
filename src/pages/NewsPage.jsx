import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllNews } from '../redux/newsSlice'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import NoNewsFound from '../components/NoNewsFound'

function NewsPage() {
  const { news } = useSelector(store => store.news.news)
  const dispath = useDispatch() 
  const {value} = useParams()
  console.log(value);
  
  useEffect(() =>{
    dispath(getAllNews())
  },[])
  let newArr = news?.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
  
  return (
    <div className='w-full md:w-[70%] mx-auto py-10 px-3'>
        <div className={`${newArr?.length > 0 ? "grid grid-cols-4 gap-3" : "" } w-full`}>
            {
                newArr?.length > 0 ? newArr.map(item => <Card key={item.id} news={item}/>)
                : <div className='w-full flex items-center justify-center'><NoNewsFound /></div>
            }
        </div>
    </div>
  )
}

export default NewsPage