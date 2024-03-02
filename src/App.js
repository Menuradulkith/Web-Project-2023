import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Loginform from './pages/Loginform';
import SignUpform from './pages/SignUpform';
import { Route, Routes } from 'react-router-dom';
import Navbar2 from './Navbar2';
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact';





function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    
    setIsAuthenticated(false);
  };
  
  return (
    <>
     {isAuthenticated ? <Navbar2 className='vij' onLogout={handleLogout} /> : <Navbar className='vij'/>}

    
    
      
    <div className="container">
        <Routes>
          
          
          <Route path="/login" element={<Loginform onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUpform />} />
        </Routes>
    </div>
    <div className='new'>
      <Routes>
          
          <Route path="/" element={<Home />} />
      </Routes>

    </div>
    <div className='news'>
      <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          
      </Routes>
    </div>
    <div >
    <Routes>
          
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>





    


    
    
     
    </>
    
   
  );
}

export default App;
