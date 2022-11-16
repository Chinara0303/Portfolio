import './App.scss';
import Topbar from "./components/Topbar/Topbar"
import Works from "./components/Works/Works"
import Skills from "./components/Skills/Skills"
import Intro from "./components/Intro/Intro"
import { useState } from 'react';
import Menu from './components/Menu/Menu';

function App() {
 const [menuOpen,SetmenuOpen] = useState(false)
  return (
    <div className='App'>
        <Topbar menuOpen={menuOpen} SetmenuOpen={SetmenuOpen}/>
        <Menu menuOpen={menuOpen} SetmenuOpen={SetmenuOpen}/>
        <div className="sections">
          <Intro/>
          <Skills/>
          <Works/>
        </div>
    </div>
  );
}

export default App;
