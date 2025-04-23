import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Hero from './Components/Hero/Hero';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Hero />
      </div>
    </Router>
  )
}

export default App
