'use client'
import { useEffect, useState } from 'react'

export default function Carousel({ images = [], interval = 4000 }){
  const [i,setI]=useState(0)
  useEffect(()=>{
    if(images.length===0) return
    const id=setInterval(()=> setI(v=> (v+1)%images.length), interval)
    return ()=> clearInterval(id)
  },[images.length, interval])
  return (
    <div className="carousel">
      <div className="carousel-track" style={{transform:`translateX(-${i*100}%)`}}>
        {images.map((im,idx)=>(
          <div className="slide" key={idx}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={im.src} alt={im.alt || `Slide ${idx+1}`} />
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {images.map((_,idx)=>(
          <span key={idx} className={`dot ${idx===i?'active':''}`} onClick={()=>setI(idx)}/>
        ))}
      </div>
    </div>
  )
}
