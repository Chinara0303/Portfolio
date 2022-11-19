import "./topbar.scss";

export default function TopBar({menuOpen,SetmenuOpen}) {
  return (
    <div className={`topbar ${menuOpen && 'active'}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro">chinara</a>
          <div className="itemContainer">
           <i className="fa-solid fa-mobile-screen-button"></i>
             <span>+994 50 482 21 64</span> 
          </div>
          <div className="itemContainer">
           <i className="fa-solid fa-envelope"></i>
           <span>cinareibadova1202@gmail.com</span> 
          </div>
          
        </div>
        <div className="rigth">
          <div className="hamburger" onClick={()=>SetmenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
