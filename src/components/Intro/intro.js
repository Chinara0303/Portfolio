// import Aos from "aos";
// import { useEffect } from "react";
import "./intro.scss";
import 'aos/dist/aos.css';


export default function Intro() {


  return (
    <div data-aos='zoom-in' data-aos-duration='2000' className='intro' id='intro'>
      <i className="fa-solid fa-moon moon"></i>
      <i className="fa-solid fa-star solidstar1"></i>
      <div className='left'>
        <div className='imgContainer'>
          <img src='../assets/China.png' alt='' />
        </div>
      </div>
      <div className='rigth'>
        <div className='wrapper'>
          <h2>Hi, There I'm</h2>
          <h1>Chinara Ibadova</h1>
          <h3>Software Developer</h3>
        </div>
        <a href="#skill"><img src='../assets/down.png' alt='' /></a>
      </div>
    </div>
  )
};