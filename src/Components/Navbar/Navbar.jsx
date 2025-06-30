import { Router, Link } from "react-router-dom";
import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="announcement-board">
        <span>Announcement: Hospitio is getting revamped, <a href="">take a sneak peek.</a></span>
      </div>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/"><img src="/logo-removebg-preview.png" alt="" /></a>
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Menu & Mobile Menu */}
        <div className={`navbar-content ${isMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/" className="link" onClick={closeMenu}>Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/signin" className="link" onClick={closeMenu}>How it works</Link>
            </li>
            <li className="navbar-item">
              <Link to="/signin" className="link" onClick={closeMenu}>Why Hospitio</Link>
            </li>
          </ul>
          
        </div>
          <div className="nav-button">
            <button>
              <Link to="/signin" className="link" onClick={closeMenu}>Sign In</Link>
            </button>
            <button id="invite">
              <Link to="/signup" className="link" onClick={closeMenu}>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier"> 
                    <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round"></rect> 
                  </g>
                </svg>
                <span>Get in invite</span> 
              </Link>
            </button>
          </div>

        {/* Mobile Overlay */}
        {isMenuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
      </div>
    </nav>
  )
}

export default Navbar