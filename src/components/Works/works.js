import "./work.scss"

export default function work() {
  const data =[
    {
      id:1,
      title: "Ecoshop",
      src:"../assets/ECOSHOPimg.png",
      desc:"E-commerce website",
      weblink:"https://echoshopp.netlify.app/index.html"
    }
  ]
  return (
    <div className='works' id='works'>
     <div className='headerTitle'>
        <h2>Works</h2>
      </div>
       <div className='slider'>
      {data.map((d)=> <div className='container'>
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
       <img src='../assets/arrow.png' alt='' className="arrow left"/>
       <img src='../assets/arrow.png' alt='' className="arrow right"/>
    </div>
  )
}
