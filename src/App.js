import './App.scss';
import Topbar from "./components/Topbar/Topbar"
import Works from "./components/Works/Works"
import Skills from "./components/Skills/Skills"
import Intro from "./components/Intro/Intro"
import { useEffect, useState } from 'react';
import Menu from './components/Menu/Menu';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [menuOpen, SetmenuOpen] = useState(false)
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  useEffect(()=>{
    Aos.init();
  },[]);
  return (
    !loading && (
      <div className='App'>
        <Topbar menuOpen={menuOpen} SetmenuOpen={SetmenuOpen} />
        <Menu menuOpen={menuOpen} SetmenuOpen={SetmenuOpen} />
        <div className="sections">
          <Intro/>
          <Skills/>
          <Works/>
        </div>
          

      </div>
    )

  );
}

export default App;
