import "./menu.scss"

export default function Menu({menuOpen,SetmenuOpen}) {
  return (
   
    <div className = {'menu' + " " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=>SetmenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>SetmenuOpen(false)}>
                <a href="#skill">Skills</a>
            </li>
            <li onClick={()=>SetmenuOpen(false)}>
                <a href="#works" >Works</a>
            </li>
            <li>
              <a className="gitlink" href="https://github.com/Chinara0303"><i className="fa-brands fa-square-github"></i></a>
              <a className="linkedinlink" href="https://www.linkedin.com/in/cinare-ibadova-5952b724b/"><i className="fa-brands fa-linkedin"></i></a> 
            </li>
            
                <a className="contact" href="tel:050 482 21 64"><i className="fa-solid fa-mobile-screen-button"></i>+994 50 482 21 64</a>
                <a className="contact email" href="mailto:cinareibadova1202@gmail.com"><i className="fa-solid fa-envelope"></i>cinareibadova1202@gmail.com</a>
            
        </ul>
    </div>
  )
}
