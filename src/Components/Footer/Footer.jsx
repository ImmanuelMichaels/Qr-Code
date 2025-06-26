import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="footer-logo"><img src="/public/logo-removebg-preview.png" alt="" /></div>
      <div className="footer-content">
        <p>Effortlessly recieve updates on new products from Hospitio.</p>
        <div className="email">hello@hospitio.com</div>
        <div className="sm-container">
          <img src="/ig.svg" alt="" />
          <img src="/fb.svg" alt="" />
          <img src="/x.svg" alt="" />
        </div>
      </div>
      <p>copyright reserved &copy; Magiccodes 2025</p>
    </section>
  )
}

export default Footer
