import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="content" id='image-container'>
        <img src="/friece.jpg" alt="" />
      </div>
      <div className="content" id='bar-code'>

      </div>
    </div>
  )
}

export default Hero
