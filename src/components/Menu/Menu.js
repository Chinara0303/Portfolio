import "./menu.scss"

export default function Menu({menuOpen,SetmenuOpen}) {
  return (
    <div className={'menu'+" "+(menuOpen && "active")}>
        <ul>
            <li onClick={()=>SetmenuOpen(false)}>
                <a href="#contact">Home</a>
            </li>
            <li onClick={()=>SetmenuOpen(false)}>
                <a href="#intro">Intro</a>
            </li>
            <li onClick={()=>SetmenuOpen(false)}>
                <a href="#contact" >Works</a>
            </li>
            <li onClick={()=>SetmenuOpen(false)}>
                <a href="#contact">Skills</a>
            </li>
            <li onClick={()=>SetmenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
