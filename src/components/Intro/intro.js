import "./intro.scss"

export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <i className="fa-solid fa-moon moon"></i>
      <i className="fa-solid fa-star solidstar1"></i>
      <i className="fa-regular fa-star regularstar1"></i>
      <i className="fa-solid fa-star solidstar2"></i>
      <i className="fa-regular fa-star regularstar2"></i>
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