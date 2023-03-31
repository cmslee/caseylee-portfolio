import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';

import NavBar from './components/NavBar';
import About from './pages/About';
import Homepage from './pages/Homepage'
import Projects from './pages/Projects';
import Character from './pages/Character';

import hanzi from './data/Data';

import './App.css';

function App() {
  const [data, setData] = useState(hanzi);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage characters={data}/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />}/>
        <Route path='/:pinyin' element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
