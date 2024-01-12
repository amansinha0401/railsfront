import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from "./Home"
import Login from './Login'
import Reg from './Reg'
import About from './About';
import Logsing from './Logsing';

const Home1 = () => {
  return (
    <div>
      <div className='okay'><h1>Welcome to Indian Railways<br/>
       Press Login/Signup to continue
  </h1></div>
    </div>
  )
}
const App = () => {
  return (
    
    <Router>
        <nav className="fixed-nav"> {/* Add a class for styling */}
        <div id="main">
          <div id="hey"><img src="logo.png" alt="Logo" width="70px" height="70px" /></div>
          <div id="menu">
            <p id="brand" href="index.html">INDIAN RAILWAYS</p>
            <div id="menu1">
              <a href="login">LOGIN/SIGN-UP</a>
              <a href="ls">LOG-IN</a>
              <a href="signup">SIGN-UP</a>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
      <Route path="/" element={<Home1/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ls" element={<Login/>} />
        <Route path="/signup" element={<Reg/>} />
        <Route path="/login" element={<Logsing/>} />
      </Routes>
    </Router>
  );
};

export default App;
