import "./work.scss"
import React, { useState } from 'react'

export default function Works() {
 const [currentSlide, setCurrentslide] = useState(0);
 const data =[
    {
      id:1,
      title: "Ecoshop",
      src:"../assets/ECOSHOPimg.png",
      desc:"E-commerce website",
      weblink:"https://echoshopp.netlify.app/index.html"
    },
    {
      id:2,
      title: "iii",
      src:"../assets/ECOSHOPimg.png",
      desc:"E-commerce website",
      weblink:"https://echoshopp.netlify.app/index.html"
    },
    {
      id:3,
      title: "dhh",
      src:"../assets/ECOSHOPimg.png",
      desc:"E-commerce website",
      weblink:"https://echoshopp.netlify.app/index.html"
    },

 ];

 const handleClick = (way) => {
  way === "left"
    ? setCurrentslide(currentSlide > 0 ? currentSlide - 1 : 2)
    : setCurrentslide(currentSlide < data.length - 1 ? currentSlide + 1: 0);
};
  return (
    <div className='works' id='works'>
     <div className='headerTitle'>
        <h2>Works</h2>
      </div>
       <div className='slider' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
      {data.map((d)=>
      <div className='container'>
          <div className='item'>
             <div className='left'>
              <div className='leftContainer'>
              <div className='imgContainer'>
                <img src='../assets/globe.png' alt=''/>
              </div>
              <div className='title'>
              <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
              </div>
             </div>
             <div className='rigth'>
              <a href={d.weblink} target="_blank">
                <img src={d.src} alt='website img'/>
              </a> 
             </div>
          </div>
        </div>)}
       
       </div>
       <img src='../assets/arrow.png' alt='' className="arrow left"   onClick={()=>handleClick("left")}/>
       <img src='../assets/arrow.png' alt='' className="arrow right"  onClick={()=>handleClick()}/>
    </div>
  )
}
