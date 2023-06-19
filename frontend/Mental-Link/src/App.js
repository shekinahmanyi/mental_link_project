import React from 'react'
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import OurStory from './pages/OurStory';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/story' element={<OurStory/>} />
        <Route path='/works' element={<HowItWorks/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        </Routes>
    
        </div>
        </Router>
  )
}

export default App
