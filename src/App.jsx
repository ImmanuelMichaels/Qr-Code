import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './Components/Hero/Hero';
import HotelQRLanding from './Components/Pages/HotelQRLanding';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/hotel" element={<HotelQRLanding />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
