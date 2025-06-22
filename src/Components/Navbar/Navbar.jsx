import { Router, Link } from "react-router-dom";
import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="announcement-board">
        <span>Announcement: Hospitio is getting revamped, <a href="">take a sneak peek.</a></span>
      </div>
      <div className="navbar-container">
        <div className="navbar-logo"><a href="/"><img src="/logo-removebg-preview.png" alt="" /></a></div>
        <ul className="navbar-menu">
          <li className="navbar-item"><Link to="/" className="link">Home</Link></li>
          <li className="navbar-item"><Link to="/signin" className="link">How it works</Link></li>
          <li className="navbar-item"><Link to="/signin" className="link">Why QR codes</Link></li>
          <li className="navbar-item"></li>
        </ul>
          <div className="nav-button">
            <button><Link to="/signin" className="link">Sign In</Link></button>
            <button id="invite"><Link to="/signup" className="link">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#f5f5f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#f5f5f5" stroke-width="2" stroke-linecap="round"></rect> </g></svg><span>Get in invite</span> 
              </Link>
            </button>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
