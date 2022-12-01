import './App.scss';
import Topbar from "./components/Topbar/Topbar"
import Works from "./components/Works/Works"
import Skills from "./components/Skills/Skills"
import Intro from "./components/Intro/Intro"
import { useState } from 'react';
import Menu from './components/Menu/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
  return (
    !loading && (
      <div className='App'>
        <Topbar menuOpen={menuOpen} SetmenuOpen={SetmenuOpen} />
        <Menu menuOpen={menuOpen} SetmenuOpen={SetmenuOpen} />
        <div className="sections">
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Intro />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/works' element={<Works />} />
            </Routes>
          </BrowserRouter>
          <Skills/>
          <Works/>
        </div>
      </div>
    )

  );
}

export default App;
