import "./work.scss"
import Slider from "react-slick";
import { dataWebSites } from "../../data";
import "../Slickslider/slick.scss";
import "../Slickslider/slick-theme.scss";


export default function Works(showTopButton,setShowTopButton) {

  const Settings = {
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
          slidesToScroll: 1,
          initialSlide: 1
        }
      },

    ]
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='works' id='works'>
      <div className='headerTitle'>
        <h2>Works</h2>
      </div>
      <div className='slider'>
        <div className='container'>
          <Slider {...Settings}>
            {dataWebSites.map((d) => (
              <div className='card' key={d.id}>
                <div className='top'>
                  <div className='topContainer'>
                    <a href={d.weblink}>
                      <img src={d.src} alt='website img' />
                    </a>
                    <div className='desc'>
                      <p className="title">{d.title}</p>
                      <a href={d.github}><i className="fa-brands fa-github"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className='toTop'>
        <div className="btnContainer">
            <button type="button" onClick={goToTop} >
              <i className="fa-solid fa-angles-up"></i>
            </button>
        </div>
      </div>

    </div>
  )
}
