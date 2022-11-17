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
            <i className="fa-brands fa-html5"></i>HTML
          </li>
          <li>
            <i className="fa-brands fa-css3"></i>CSS
          </li>
          <li>
            <i className="fa-brands fa-sass"></i>SASS
          </li>
          <li>
            <i className="fa-brands fa-js"></i>Javascript
          </li>
          <li>
            <i className="fa-brands fa-bootstrap"></i>Bootstrap
          </li>
          <li>
           Typescript
          </li>

          
        </ul>
        <ul className='secondcolumn'>
        <li>
            Jquery
          </li>
          <li>
            <i className="fa-brands fa-react"></i>React
          </li>
          <li>
            C#
          </li>
          <li>
            ASP.NET
          </li>
          <li>
            <i className="fa-solid fa-database"></i>MSSQL
          </li>
          <li>
            <i className="fa-solid fa-code-branch"></i>GIT
          </li>
        </ul>
        </div>
      </div>
    </div>
  )
}
