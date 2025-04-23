import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './Hero.css';

const Hero = () => {
  // Get current origin (works in dev and production)
  const baseUrl = window.location.origin;
  
  // Create the correct hash-based URL
  const hotelUrl = `${baseUrl}/#/hotel`;

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
              value={hotelUrl}  // Now includes the hash
              size={350}
              level="H"
              includeMargin={true}
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
  );
};

export default Hero;