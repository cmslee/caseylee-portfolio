import {Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import About from './pages/About';
import Homepage from './pages/Homepage'
import Projects from './pages/Projects';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />}/>
      </Routes>
    </div>
  );
}

export default App;
