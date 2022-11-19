import "./intro.scss"

export default function Intro() {
  return (
    <div className='intro' id='intro'>
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