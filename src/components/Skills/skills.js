import "./skill.scss"

export default function skills() {
  return (
    <div className='skills' id='skill'>
      <div className ='title'>
          <h2>Skills</h2>
        </div>
      <div className='skillWrapper'>
        <div className='skillcard'>
        <ul className='firstcolumn'>
          <li>
            <a href='#'><i className="fa-brands fa-html5"></i>HTML</a>
          </li>
          <li>
            <a href='#'><i className="fa-brands fa-css3"></i>CSS</a>
          </li>
          <li>
            <a href='#'><i className="fa-brands fa-sass"></i>SASS</a>
          </li>
          <li>
            <a href='#'><i className="fa-brands fa-js"></i>Javascript</a>
          </li>
          <li>
            <a href='#'><i className="fa-brands fa-bootstrap"></i>Bootstrap</a>
          </li>
          <li>
            <a href='#'>Typescript</a>
          </li>

          
        </ul>
        <ul className='secondcolumn'>
        <li>
            <a href='#'>Jquery</a>
          </li>
          <li>
            <a href='#'><i className="fa-brands fa-react"></i>React</a>
          </li>
          <li>
            <a href='#'>C#</a>
          </li>
          <li>
            <a href='#'>ASP.NET</a>
          </li>
          <li>
            <a href='#'><i className="fa-solid fa-database"></i>MSSQL</a>
          </li>
          <li>
            <a href='#'><i className="fa-solid fa-code-branch"></i>GIT</a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  )
}
