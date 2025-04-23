import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './Hero.css';

const Hero = () => {
  const qrValue = `${window.location.origin}/#/hotel`;

  return (
    <div className="hero-container">
      <div className="content" id='image-container'>
        <img src="/friece.jpg" alt="Hotel" />
      </div>
      <div className="content" id='bar-code'>
        <div className="bar-content">
          <img src="/friece.jpg" alt="Hotel Logo" />
          <div className="image">
            <QRCodeSVG 
              value={qrValue}
              size={350}
              level="H"
              includeMargin={true}
              bgColor="#ffffff"
              fgColor="#000000"
            />
          </div>
        </div>
        <div className="title">
          <h2>Welcome!</h2>
          <p>Scan QR code for hotel services</p>
          <a href="/#/hotel" className="test-link">Test Hotel Page</a>
        </div>
      </div>
    </div>
  )
}

export default Hero;