import "./menu.scss"

export default function Menu({menuOpen,SetmenuOpen}) {
  return (
   
    <div className = {'menu'+" "+(menuOpen && "active")}>
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
           
        </ul>
    </div>
  )
}
