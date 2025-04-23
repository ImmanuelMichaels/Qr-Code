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
        <div className="bar-content">
            <img src="/friece.jpg" alt="" />
          <div className="image">
            <img src="/qrcode.png" alt="bar code" />
          </div>
        </div>
        <div className="title">
          <h2>Welcome!</h2>
          <p>Our menu on your smartphone</p>
          
        </div>
      </div>
    </div>
  )
}

export default Hero
