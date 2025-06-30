import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/public/logo-removebg-preview.png" alt="" />
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/" className="link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/signin" className="link">How it works</Link>
            </li>
            <li className="navbar-item">
              <Link to="/signin" className="link">Why Hospitio</Link>
            </li>
          </ul>
        </div>

        <div className="newsletter">
          <p>Effortlessly recieve updates on new products from Hospitio.</p>
          <div className="email">
            <input type="email" name="email" id="subscribe" />
            <button>Subscribe</button>
          </div>
          <div className="sm-container">
            <img src="/ig.svg" alt="" />
            <img src="/fb.svg" alt="" />
            <img src="/x.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="terms">
        <div className="copyright">
          <p>&copy; 2025 Hospitio All right reserved</p>
        </div>
        <div className="t-p">
          <p>Terms of use</p> |
          <p>Privacy</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
