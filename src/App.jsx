import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className={`App ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
        <Routes>
          <Route path="/" element={<Home mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
