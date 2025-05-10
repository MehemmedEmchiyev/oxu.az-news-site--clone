import React from 'react'

function Banner({location,src}) {
  return (<div className={`hidden md:block mt-40 fixed w-[160px] h-full top-0 ${location == "right" ? "right-10" :  "left-20"}`}><img src={src} alt="" /></div>)
}

export default Banner