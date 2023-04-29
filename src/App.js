import './App.css';
import {Route, Routes } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar'
import Project from './components/Project'
import Contect from './components/Contect'
import HomePage from './components/HomePage';
function App() {
  return (
    <>
     <div className='first_div'>
      <Navbar></Navbar>
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='Home' element={<HomePage/>} />
          <Route path='About' element={<About/>}/>
          <Route path='Project' element={<Project/>}/>
          <Route path='Contect' element={<Contect/>}/>
      </Routes>
     </div>
    </>
  );
}

export default App;
