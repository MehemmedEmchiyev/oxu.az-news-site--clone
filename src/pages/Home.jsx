import React from 'react'
import Hero from '../components/Hero';
import Card from '../components/Card';
import Banner from '../components/Banner';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getAllNews } from '../redux/newsSlice';

function Home() {
  const { news } = useSelector(store => store.news.news)
  const dispath = useDispatch() 
  const {actionStatue } = useSelector(store => store.news)
  console.log(actionStatue);
  
  useEffect(() => {
    dispath(getAllNews())
  },[actionStatue])

  return (
    <div className=' w-full md:w-[80%] mx-auto pb-10'>
        <Hero />
        <div className='w-[90%] mx-auto mt-3 gap-5 grid grid-cols-1 md:grid-cols-3 '>
            {news?.map(item => <Card key={item.id} news={item}/>)}
        </div>
    </div>
  )
}

export default Home