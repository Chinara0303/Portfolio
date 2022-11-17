import "./work.scss"
// import React, { useState } from 'react'
 import Slider from "react-slick";
import { DataWebSites } from "../../data";
import "../Slickslider/slick.scss"; 
import "../Slickslider/slick-theme.scss";


export default function Works() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          initialSlide: 1
        }
      },
      
    ]
  };
  
  return (
    <div className='works' id='works'>
     <div className='headerTitle'>
        <h2>Works</h2>
      </div>
       <div className='slider'>
      <div className='container'>
        <Slider  {...settings}>
        {DataWebSites.map((d)=>(
        <div className='card'>
             <div className='top'>
                <div className='topContainer'>
                    <a href={d.weblink}>
                      <img src={d.src} alt='website img'/>
                    </a> 
                  <div className='desc'>
                    <p className="title">{d.title}</p>
                    <a href={d.github}><i class="fa-brands fa-github"></i></a>
                  </div>
                </div>
             </div>
          </div>
           ))}
        </Slider>
        </div>
       
       </div>
      
    </div>
  )
}
