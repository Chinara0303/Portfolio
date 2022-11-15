import './App.scss';
import Topbar from "./components/Topbar/topbar"
import Contact from "./components/Contact/contact"
import Works from "./components/Works/works"
import Skills from "./components/Skills/skills"
import Intro from "./components/Intro/intro"
import { useState } from 'react';
import Menu from './components/Menu/Menu';

function App() {
 const [menuOpen,SetmenuOpen] = useState(false)
  return (
    <div className='App'>
        <Topbar menuOpen={menuOpen} SetmenuOpen={SetmenuOpen}/>
        <Menu menuOpen={menuOpen} SetmenuOpen={SetmenuOpen}/>
        <div className="sections">
          <Intro />
          <Skills/>
          <Works/>
          <Contact/>
        </div>
    </div>
  );
}

export default App;
