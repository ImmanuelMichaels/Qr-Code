import React from 'react';
import { Router, Link } from "react-router-dom";
import AnimatedOnScroll from '../AnimatedOnScroll';
import { QRCodeSVG } from 'qrcode.react';
import './Hero.css';

const Hero = () => {
  const qrValue = 'https://hoteldomain.vercel.app/hotel';
  const features = [
    "QR-Based Room & Table Access",
    "Instant Order Dashboard",
    "Customizable Menu & Services",
    "Multi-Department Routing",
    "Analytics & Insights",
  ];
  
  return (
    <div className="page-container">
      <div className="hero-container">
        <div className="hero-content">
          <div className="guest-feature">
            <p><span>New</span> 💥make your guest feel speacial with <b>guest feature</b> <a href="#"> Read more</a></p>
          </div>
          <h1 className='hero-heading'><b>QR</b> Code software built for hospitality.</h1>
          <p className='hero-sub'>Let your guests order food, drinks, laundry and room service in seconds — no calls, no delays.</p>
          <div className="hero-button">
              <button id='demo'>
                <Link to="/signin" className="link">
                  <span>Book a demo</span>
                  {/* <svg width="30px" 
                    height="30px" 
                    viewBox="0 0 24 24" 
                    fill="none" xmlns="http://www.w3.org/2000/svg" 
                    stroke="#ffffff"><g id="SVGRepo_bgCarrier" 
                    stroke-width="0"></g><g id="SVGRepo_tracerCarrier" 
                    stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                      <path d="M6 12H18M18 12L13 7M18 12L13 17" 
                      stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                 */}
                </Link>
              </button>
              <button id="join"><Link to="/signup" className="link">
                  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#f5f5f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#f5f5f5" stroke-width="2" stroke-linecap="round"></rect> </g></svg><span> Talk to sales </span> 
                </Link>
              </button>
            </div>
        </div>
        <div className="content" id='bar-code'>
            {/* <div className="bar-content">
              <div className="image">
                <QRCodeSVG 
                value={qrValue}
                size={350}
                level="H"
                includeMargin={true}
                />
              </div>

            </div> */}

        </div>
      </div>

      {/* Banner */}
      <div className="banner-container" id="banner-container">
        <div className="logo-banner">
          <img src="/lifrom.png" alt="" />
          <img src="/fairmont.png" alt="" />
          <img src="/cwp.png" alt="" />
          <img src="/ritz.png" alt="" />
          <img src="/carlson.png" alt="" />
        </div>
        <h3>Already leading the hospitality game in:</h3>
        <div className="banner-content">
          <div className="flag-box">
            <div id="flag"><img src="/barca_flag.webp" alt="" /></div>
            <div id="text"><p>Barcelona</p></div>  
          </div>
          <div className="flag-box">
            <div id="flag"><img src="/Ibiza_flag.png" alt="" /></div>
            <div id="text"><p>Ibiza</p></div>  
          </div>
          <div className="flag-box">
            <div id="flag"><img src="/nairobi.png" alt="" /></div>
            <div id="text"><p>Nairobi</p></div>  
          </div>
          <div className="flag-box">
            <div id="flag"><img src="/Flag-South-Africa.webp" alt="" /></div>
            <div id="text"><p>South Africa</p></div>  
          </div>
          <div className="flag-box">
            <div id="flag"><img src="/rwanda.jpeg" alt="" /></div>
            <div id="text"><p>Rwanda</p></div>  
          </div>
          <div className="flag-box">
            <div id="flag"><img src="/kenya.jpg" alt="" /></div>
            <div id="text"><p>Kenya</p></div>  
          </div>
          <div className="flag-box">
            <div id="flag"><img src="/public/meldives.jpg" alt="" /></div>
            <div id="text"><p>Meldives</p></div> 
          </div>
        
        </div>
      </div>

      {/* Benefit Section */}
      <AnimatedOnScroll>
      <section className="benefits-container" id="benefits-container">
        <div className="head-icon">
          <svg fill="#000000" width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M844.8 354.133c51.2-34.133 85.333-89.6 85.333-153.6 0-98.133-81.067-179.2-179.2-179.2s-179.2 81.067-179.2 179.2c0 64 34.133 119.467 85.333 153.6-85.333 29.867-145.067 110.933-145.067 204.8v371.2c0 38.4 29.867 68.267 68.267 68.267h345.6c38.4 0 68.267-29.867 68.267-68.267v-371.2c0-98.133-64-179.2-149.333-204.8zm-29.867 392.534l-68.267 55.467-64-55.467 21.333-230.4 8.533 8.533c8.533 8.533 21.333 12.8 34.133 12.8s25.6-4.267 34.133-12.8l8.533-8.533 25.6 230.4zm-25.6-290.134l-38.4 38.4c-4.267 4.267-8.533 4.267-12.8 0L704 460.8c0-4.267-4.267-4.267-4.267-8.533v-8.533l38.4-38.4 4.267-4.267s4.267 0 4.267 4.267l38.4 38.4c8.533 4.267 8.533 8.533 4.267 12.8zm-179.2-256c0-76.8 59.733-136.533 136.533-136.533s136.533 59.733 136.533 136.533c0 76.8-59.733 136.533-136.533 136.533s-136.533-59.733-136.533-136.533zm341.334 729.6c0 17.067-12.8 25.6-25.6 25.6h-345.6c-17.067 0-25.6-12.8-25.6-25.6v-371.2c0-89.6 68.267-162.133 153.6-170.667l-25.6 25.6c-8.533 8.533-12.8 21.333-12.8 34.133 0 8.533 4.267 17.067 8.533 25.6l-38.4 268.8c0 12.8 4.267 25.6 12.8 34.133l72.533 59.733c4.267 4.267 12.8 8.533 21.333 8.533s12.8-4.267 21.333-8.533l76.8-59.733c8.533-8.533 17.067-21.333 12.8-34.133l-29.867-268.8c4.267-8.533 8.533-17.067 8.533-25.6 0-12.8-4.267-25.6-12.8-34.133l-29.867-29.867c89.6 8.533 157.867 81.067 157.867 170.667v375.467zm-486.4-170.666c0-4.267 4.267-8.533 4.267-12.8h-4.267V635.734c0-4.267 4.267-8.533 4.267-12.8h-4.267v-115.2c0-4.267 4.267-8.533 4.267-12.8 0-68.267-98.133-119.467-221.867-119.467C128 375.467 38.4 418.134 25.6 482.134c0 4.267-4.267 4.267-4.267 8.533v396.8c0 4.267 0 8.533 4.267 8.533C38.4 955.733 128 998.4 247.467 998.4c128 0 221.867-51.2 221.867-119.467h-4.267V759.466zM243.2 413.867c98.133 0 170.667 34.133 179.2 68.267v17.067c-12.8 34.133-85.333 64-179.2 64-102.4 0-179.2-38.4-179.2-76.8 0-29.867 76.8-72.533 179.2-72.533zM64 558.933c38.4 29.867 106.667 46.933 179.2 46.933 76.8 0 136.533-17.067 179.2-46.933V627.2c-12.8 34.133-85.333 64-179.2 64-102.4 0-179.2-38.4-179.2-76.8v-55.467zM64 691.2c38.4 29.867 106.667 46.933 179.2 46.933 76.8 0 136.533-17.067 179.2-46.933v59.733c-12.8 34.133-85.333 64-179.2 64-102.4 0-179.2-38.4-179.2-76.8V691.2zm179.2 260.267c-102.4 0-179.2-38.4-179.2-76.8v-64c38.4 29.867 106.667 46.933 179.2 46.933 76.8 0 136.533-17.067 179.2-46.933v68.267c-8.533 38.4-81.067 72.533-179.2 72.533z"></path></g></svg>
          <p>Benefits</p>
        </div>
        <div className="heading">Our Benefits</div>
        <h3><b>Why Switch to QR Self-Service?</b></h3>
        <p>“No more waiting. Just scan, select, and get served faster, smarter, and with zero hassle.”</p>
        <div className="benefit-content">
          <div id="benefits-box">
            <div className="particular">
              <div className="analysis">
                <div className="text">
                  <div className="text2icon">
                    <h6>Real-Time Wait Time</h6>
                    <div className="icon">
                      <svg width="64px" height="64px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M548.195 513.698m-251.76 0a251.76 251.76 0 1 0 503.52 0 251.76 251.76 0 1 0-503.52 0Z" fill="#ED8F27"></path><path d="M548.195 513.698m-204.584 0a204.584 204.584 0 1 0 409.168 0 204.584 204.584 0 1 0-409.168 0Z" fill="#FCE3C3"></path><path d="M549.245 737.504c-123.071 0-223.194-100.123-223.194-223.194 0-123.071 100.123-223.2 223.194-223.2 123.071 0 223.2 100.13 223.2 223.2 0.001 123.071-100.129 223.194-223.2 223.194z m0-424.602c-111.054 0-201.402 90.354-201.402 201.408s90.347 201.402 201.402 201.402 201.408-90.347 201.408-201.402-90.354-201.408-201.408-201.408z" fill="#300604"></path><path d="M549.245 784.679c-149.085 0-270.368-121.284-270.368-270.368s121.284-270.375 270.368-270.375S819.62 365.227 819.62 514.311 698.329 784.679 549.245 784.679z m0-518.952c-137.068 0-248.576 111.516-248.576 248.583 0 137.068 111.508 248.576 248.576 248.576 137.067 0 248.583-111.508 248.583-248.576 0-137.067-111.516-248.583-248.583-248.583z" fill="#300604"></path><path d="M549.245 784.679c-149.085 0-270.368-121.284-270.368-270.368s121.284-270.375 270.368-270.375S819.62 365.227 819.62 514.311 698.329 784.679 549.245 784.679z m0-518.952c-137.068 0-248.576 111.516-248.576 248.583 0 137.068 111.508 248.576 248.576 248.576 137.067 0 248.583-111.508 248.583-248.576 0-137.067-111.516-248.583-248.583-248.583zM290.873 321.06l-17.437-13.067c34.994-46.713 81.516-84.02 134.528-107.89l8.953 19.877c-49.672 22.359-93.249 57.31-126.044 101.08zM808.717 322.535c-60.66-81.941-157.661-130.86-259.472-130.86v-21.792c108.685 0 212.234 52.218 276.993 139.685l-17.521 12.967z" fill="#300604"></path><path d="M538.349 329.168h21.792v27.163h-21.792zM466.097 348.541l13.584 23.523-18.87 10.897-13.583-23.523zM394.376 412.315L417.9 425.9l-10.897 18.87-23.524-13.586zM364.109 503.414h27.163v21.792h-27.163zM406.996 583.883l10.897 18.87-23.524 13.584-10.897-18.87zM460.813 645.69l18.87 10.897-13.586 23.524-18.869-10.896zM538.349 672.283h21.792v27.163h-21.792zM637.655 645.688l13.584 23.524-18.869 10.897-13.585-23.524zM691.533 583.876l23.523 13.585-10.896 18.869-23.524-13.584zM707.225 503.414h27.163v21.792h-27.163zM704.148 412.324l10.896 18.87-23.523 13.584-10.896-18.87zM632.383 348.552l18.869 10.897-13.584 23.523-18.87-10.897z" fill="#300604"></path><path d="M517.72 588.03l-18.685-11.209 39.314-65.526V398.51h21.792v118.815z" fill="#300604"></path><path d="M331.228 654.924c-11.722 8.299-26.001 13.221-41.456 13.221-39.703 0-71.888-32.185-71.888-71.888s32.185-71.888 71.888-71.888c0.086 0 0.169 0.012 0.255 0.012-0.129-3.347-0.255-6.696-0.255-10.075 0-35.131 7.018-68.612 19.669-99.169-1.194-1.204-2.828-1.956-4.632-1.956h-30.074a6.542 6.542 0 0 0-6.477 5.617l-3.947 27.625c-0.393 2.753-2.495 4.911-5.216 5.487a146.275 146.275 0 0 0-38.469 13.999c-2.456 1.307-5.453 1.004-7.524-0.853l-20.776-18.622a6.542 6.542 0 0 0-8.572-0.14l-23.039 19.331a6.544 6.544 0 0 0-1.351 8.467l14.745 23.717c1.468 2.362 1.247 5.365-0.466 7.556a147.124 147.124 0 0 0-20.512 35.441c-1.043 2.575-3.53 4.266-6.307 4.175l-27.863-0.909a6.543 6.543 0 0 0-6.657 5.403l-5.222 29.617a6.542 6.542 0 0 0 4.407 7.354l26.543 8.691c2.643 0.866 4.407 3.309 4.503 6.089 0.455 13.258 2.662 26.89 6.836 40.684 0.788 2.606-0.049 5.43-2.191 7.111l-21.659 17.002a6.542 6.542 0 0 0-1.626 8.418l15.036 26.045a6.544 6.544 0 0 0 8.105 2.8l23.907-9.595c2.542-1.021 5.479-0.375 7.287 1.683a132.81 132.81 0 0 0 33.071 27.201c2.41 1.401 3.61 4.224 3.036 6.952l-5.402 25.7a6.542 6.542 0 0 0 4.165 7.494l28.261 10.286a6.543 6.543 0 0 0 8.008-3.063l13.15-24.596c1.303-2.437 3.992-3.748 6.729-3.379 14.066 1.9 27.813 1.82 41.002-0.013 2.751-0.383 5.458 0.928 6.767 3.378l13.157 24.61a6.544 6.544 0 0 0 8.009 3.063l28.26-10.286a6.542 6.542 0 0 0 4.165-7.494l-5.738-27.304c-0.572-2.717 0.66-5.46 3.012-6.934 4.536-2.842 8.851-5.994 13.037-9.299a260.63 260.63 0 0 1-49.691-56.766z" fill="#B12800"></path><path d="M335.947 784.302a17.426 17.426 0 0 1-15.38-9.215l-11.747-21.976c-11.896 1.489-25.24 1.532-38.108 0.028l-11.74 21.941c-3.987 7.477-13.336 11.087-21.338 8.165l-28.254-10.286c-8.115-2.944-12.89-11.535-11.102-19.984l4.76-22.644a143.2 143.2 0 0 1-30.865-25.389l-21.076 8.456c-7.888 3.164-17.38-0.156-21.601-7.456l-15.032-26.048c-4.321-7.47-2.455-17.118 4.334-22.445l19.324-15.174c-3.554-12.499-5.689-25.161-6.349-37.725l-23.672-7.746c-8.2-2.688-13.245-11.124-11.74-19.615l5.213-29.61a17.406 17.406 0 0 1 17.167-14.408l25.424 0.823a158.128 158.128 0 0 1 19.097-33.001l-13.152-21.147c-4.555-7.321-3.008-17.026 3.604-22.572l23.04-19.331c6.399-5.377 16.579-5.228 22.835 0.369l18.537 16.614a157.282 157.282 0 0 1 35.831-13.038l3.511-24.63c1.227-8.541 8.647-14.975 17.266-14.975h30.078c4.667 0 9.066 1.844 12.372 5.192l5.086 5.143-2.767 6.682c-12.499 30.199-18.834 62.163-18.834 95.008 0 3.235 0.128 6.448 0.248 9.655l0.433 11.315-11.946-0.015c-33.462 0.198-60.624 27.482-60.624 60.993 0 33.632 27.361 60.993 60.992 60.993 12.634 0 24.793-3.88 35.165-11.223l9.278-6.562 6.164 9.541a249.64 249.64 0 0 0 47.614 54.396l10.101 8.619-10.428 8.222c-4.086 3.221-7.882 5.988-11.52 8.385l5.121 24.361c1.781 8.427-2.986 17.018-11.094 19.969l-28.269 10.286a17.19 17.19 0 0 1-5.957 1.059z m-24.75-53.303c6.477 0 12.385 3.519 15.429 9.187l11.379 21.295 21.161-7.704-4.958-23.608c-1.49-7.13 1.681-14.522 7.895-18.416 0.496-0.312 1.007-0.631 1.511-0.965a271.513 271.513 0 0 1-35.597-41.145c-11.776 6.179-24.808 9.4-38.243 9.4-45.648 0-82.785-37.136-82.785-82.785 0-41.953 31.369-76.72 71.888-82.069 0.015-30.965 5.207-61.205 15.458-90.113h-15.826l-3.405 23.884c-1.05 7.229-6.576 13.096-13.762 14.614a135.666 135.666 0 0 0-35.604 12.953c-6.307 3.369-14.578 2.433-19.912-2.362l-17.962-16.096-17.252 14.478 12.755 20.509c3.845 6.193 3.384 14.237-1.149 20.026a136.396 136.396 0 0 0-18.983 32.816c-2.703 6.668-9.059 10.981-16.195 10.981l-24.658-0.795-3.909 22.182 22.949 7.513c6.938 2.27 11.761 8.733 12.003 16.089 0.433 12.563 2.575 25.318 6.378 37.895 2.114 6.974-0.206 14.365-5.896 18.827l-18.685 14.678 11.258 19.5 20.408-8.186c6.704-2.703 14.791-0.802 19.537 4.618a121.916 121.916 0 0 0 30.354 24.957c6.469 3.745 9.775 11.23 8.222 18.614l-4.618 22.005 21.154 7.696 11.378-21.26c3.412-6.371 10.47-10.01 17.791-9.038 12.741 1.717 25.602 1.703 38.052-0.007a17.99 17.99 0 0 1 2.439-0.168z" fill="#300604"></path><path d="M289.773 679.044c-45.648 0-82.785-37.136-82.785-82.785 0-45.649 37.136-82.785 82.785-82.785l10.747 0.015 0.397 10.477c1.695 44.493 15.344 87.73 39.463 125.044l5.668 8.775-8.527 6.037c-14.066 9.958-30.581 15.222-47.748 15.222z m-9.967-142.963c-28.907 4.767-51.026 29.936-51.026 60.177 0 33.632 27.361 60.993 60.992 60.993a60.389 60.389 0 0 0 26.375-6.03c-20.649-35.093-33.078-74.492-36.341-115.14z" fill="#300604"></path><path d="M429.547 797.744l14.721 16.069-20.626 18.884 8.54 26.565-20.744 6.676-12.822-39.878z" fill="#231F20"></path><path d="M828.102 350.896l18.972-10.716c28.714 50.816 44.182 108.407 44.738 166.543l-21.799 0.211c-0.515-54.47-15.01-108.419-41.911-156.038z" fill="#300604"></path><path d="M548.575 863.313c-48.041 0-94.539-9.684-138.204-28.784l8.61-19.685c40.933 17.905 84.534 26.983 129.593 26.983 80.613 0 157.852-29.814 217.489-83.952 59.229-53.767 96.333-126.999 104.48-206.208l21.373 2.197c-8.689 84.485-48.256 162.588-111.412 219.919-63.598 57.736-145.965 89.53-231.929 89.53z" fill="#300604"></path></g></svg>
                    </div>
                  </div>
                    <p>Guests get served faster without needing to call reception or staff.</p> 
                </div>
                <div className="box">
                  <div id="order-info">
                    <div className="orders">
                      <img src="/IMG_2138.JPG" alt="" />
                      <h6>Immanuel's order placed</h6>
                    </div>
                    <div id="wait-time">
                      <p>Ready in 7 minutes</p>
                    </div>
                  </div>
                  <div id="order-info">
                    <div id="stacked-avatars">
                      <img src="/e.jpg" className='avatar' alt="" />
                      <img src="/IMG_2138.JPG"className='avatar' alt="" />
                      <img src="/d.jpg" className='avatar' alt="" />
                      <img src="/d.jpg" className='avatar' alt="" />
                      <img src="/d.jpg" className='avatar' alt="" />
                      <img src="" alt="" />
                    </div>
                    <div id="wait-time">
                      <p>7 others on queue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="particular">
              <div className="analysis" id='par-sec'>
                <div className="text">
                  <div className="text2icon">
                    <h6>Improve Guest Satisfaction</h6>
                    <div className="icon">
                      <img src="/sav.svg" alt="icon" id='box-icon'/>
                    </div>
                  </div>
                  <p>Self-service feels modern, fast, and convenient.</p> 
                </div>
                <div className="box">
                  <div id="order-info">
                    <div className="orders">
                      <img src="/IMG_2138.JPG" alt="image" />
                      <p>Rate our service today</p>
                    </div>
                    <div id="wait-time">
                      <p>⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mock">
            <div className="graphic-container">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="video-bg"
                >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div id="benefits-box-duplicate">
            <div className="particular-duplicate">
              <div className="analysis-duplicate" id='par-fes'>
                <div className="text">
                  <div className="text2icon">
                    <h6>Reduce Operational Costs</h6>
                    <div className="icon">
                      <img src="/roc.svg" alt="icon" id='box-icon'/>
                    </div>
                  </div>
                  <p>No more maintenance for intercoms or hiring extra hands.</p> 
                </div>
                <div className="box">
                  <div id="order-info">
                    <div className="orders">
                      <p>Room 116 request:</p>
                    </div>
                    <div id="wait-time">
                      <p>New towel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="particular-duplicate">
              <div className="analysis-duplicate" id='par-sec'>
                <div className="text">
                  <div className="text2icon">
                    <h6>Stay Ahead of Competitors</h6>
                    <div className="icon">
                      <img src="/sac.svg" alt="" id='box-icon'/>
                    </div>
                  </div>
                    <p>Offer smart, touchless service guests will love.</p> 
                </div>
                <div className="box">
                  <div id="order-info">
                    <div className="orders">
                      <p>Recent booking:</p>
                    </div>
                    <div id="wait-time">
                      <p>Room 112</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      </AnimatedOnScroll>

      {/*FEATURES section */}
      <AnimatedOnScroll delay={0.2} direction="left">
      <section className="features-container">
        <div className="head-icon">
            <img src="/features.png" alt="" />
            <p>Features</p>
        </div>
        <div className="features-content">
          <div className="heading">Features</div>
          <h3><b>What You Get with Our QR Solution</b></h3>

          <div className="feature-comp">
            <ul className="feature-list">
              {[
                {
                  heading: "QR-Based Room & Table Access",
                  img: "/qricon.png",
                  className: "qr",
                  desc: "Unique QR per room/table, scannable by any smartphone.",
                },
                {
                  heading: "Instant Order Dashboard",
                  img: "/menuicon.png",
                  className: "orders",
                  desc: "Staff get real-time notifications of customer orders.",
                },
                {
                  heading: "Customizable Menu & Services",
                  img: "/settingsicon.png",
                  className: "custom",
                  desc: "Add food, drinks, laundry, or any service you offer.",
                },
                {
                  heading: "Multi-Department Routing",
                  img: "/depticon.png",
                  className: "dept",
                  desc: "Orders go straight to the right department (e.g., kitchen, bar, cleaning).",
                },
                {
                  heading: "Analytics & Insights",
                  img: "/analysisicon.png",
                  className: "analytics",
                  desc: "Know your most ordered services and busiest hours.",
                },
              ].map((item, i) => (
                <AnimatedOnScroll
                  key={i}
                  delay={0.3 + i * 0.15}
                  direction="up"
                >
                  <li id="inner-list">
                    <div className="text-icon">
                      <div id="heading">{item.heading}</div>
                      <img src={item.img} alt="" />
                    </div>
                    <div id="sub-text">
                      <div className={`sub-image ${item.className}`}></div>
                      <p>{item.desc}</p>
                    </div>
                  </li>
                </AnimatedOnScroll>
              ))}
            </ul>
          </div>
        </div>
      </section>
      </AnimatedOnScroll>


      {/* How to use section */}
      <AnimatedOnScroll delay={0.4} direction="right">
        <section className="how-it-works" id="how-it-works">
          <div className="head-icon">
            <img src="/howitworks.png" alt="" />
            <p>How it works</p>
          </div>
          <div className="heading">How it works</div>

          <div className="how-it-works-content">
            <ul className="hiw-list">
              {[
                {
                  iconClass: "hwqr",
                  text: "Scan the QR",
                  sub: "No app download needed.",
                },
                {
                  iconClass: "selectMENU",
                  text: "Browse the Menu or Services",
                  sub: "Intuitive and mobile-friendly.",
                },
                {
                  iconClass: "staff",
                  text: "Place an Order",
                  sub: "Select items and confirm.",
                },
                {
                  iconClass: "delivered",
                  text: "Order Delivered",
                  sub: "Item delivered to you.",
                },
              ].map((item, i) => (
                <AnimatedOnScroll key={i} delay={0.3 + i * 0.15} direction="up">
                  <li id="inner-list">
                    <div id="sub-text">
                      <div className={`sub-image ${item.iconClass}`}></div>
                    </div>
                    <p>
                      {item.text} <br />
                      {item.sub}
                    </p>
                  </li>
                </AnimatedOnScroll>
              ))}
            </ul>
          </div>
        </section>
      </AnimatedOnScroll>

      
      {/* Pricing section */}
      <AnimatedOnScroll delay={0.6} direction="left">
      <section className="pricing-container" id="prices">
        <div className="head-icon">
            <img src="/icnprice.png" alt="" />
            <p>Pricing</p>
        </div>
        <div className="heading">Our Pricings</div>
          <h3><b>How users have achieved success with Hospitio</b></h3>
        <div className="pricing-content">
          <div id="price-list">
            {[
              {
                title: "Standard",
                price: "$50",
                users: "5 Users",
                tag: null,
              },
              {
                title: "Pro",
                price: "$80",
                users: "10 Users",
                tag: null,
              },
              {
                title: "Max",
                price: "$150",
                users: "20 Users",
                tag: "Mast. Purpose",
              },
              
            ].map((plan, i) => (
              <AnimatedOnScroll
                key={i}
                delay={0.3 + i * 0.2}
                direction="up" 
              >
                <li id="price-details">
                  <div id="price-type">
                    <div id={plan.tag ? "with-cta" : ""}>
                      <h3>{plan.title}</h3>
                      {plan.tag && <div id="tag">{plan.tag}</div>}
                    </div>
                    <div id="users">
                      <p>{plan.users}</p>
                    </div>
                  </div>
                  <div className="price-amount">
                    <h3>{plan.price}</h3>
                    <p>/per month</p>
                  </div>
                </li>
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
        <div className="cta-container">
          <button>Get started now <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
        </div>
      </section>
      </AnimatedOnScroll>

      {/* Testimonial section */}
      <section className="testimonial-container" id="testimonial">
        <div className="head-icon">
          <svg width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <clipPath id="clip-pricetag2"> <rect width="32" height="32"></rect> </clipPath> </defs> <g id="pricetag2" clip-path="url(#000000clip-pricetag2)"> <g id="Group_2401" data-name="Group 2401" transform="translate(-208 -260)"> <g id="Group_2397" data-name="Group 2397"> <g id="Group_2396" data-name="Group 2396"> <g id="Group_2395" data-name="Group 2395"> <path id="Path_3856" data-name="Path 3856" d="M227.168,273.419l.524-.524q.4-.4.087-.708t-.713.1l-.514.514a3.37,3.37,0,0,0-2.156-.915,2.941,2.941,0,0,0-2.675,2.156,2.6,2.6,0,0,0,.08,1.337,8.391,8.391,0,0,0,.687,1.486l-2.256,2.255a1.844,1.844,0,0,1-.254-.788,1.652,1.652,0,0,1,.092-.679,8.652,8.652,0,0,1,.381-.836.745.745,0,0,0,.077-.495.906.906,0,0,0-.267-.471.854.854,0,0,0-.64-.266.828.828,0,0,0-.6.237,2.367,2.367,0,0,0-.507.779,2.985,2.985,0,0,0-.211,1.05,3.323,3.323,0,0,0,.2,1.215,4.338,4.338,0,0,0,.725,1.258l-1.309,1.31a.861.861,0,0,0-.26.4.386.386,0,0,0,.138.352.336.336,0,0,0,.376.114,1.61,1.61,0,0,0,.473-.362l1.208-1.207a3.856,3.856,0,0,0,1.562.834,2.913,2.913,0,0,0,1.552-.024,3.061,3.061,0,0,0,1.295-.776,2.85,2.85,0,0,0,.65-.975,2.564,2.564,0,0,0,.174-1.1,2.806,2.806,0,0,0-.245-1.031q-.22-.492-.657-1.259l2.018-2.017a1.554,1.554,0,0,1-.034,1.576.853.853,0,0,0,.1,1.13.826.826,0,0,0,.606.252.807.807,0,0,0,.6-.242,1.666,1.666,0,0,0,.362-.6,2.914,2.914,0,0,0,.172-.846,2.5,2.5,0,0,0-.162-1.133A4.3,4.3,0,0,0,227.168,273.419Zm-4.263,6.31a1.413,1.413,0,0,1-.956.422,1.883,1.883,0,0,1-1.149-.364l2.124-2.124a2.987,2.987,0,0,1,.374,1.154A1.174,1.174,0,0,1,222.9,279.729Zm.844-4.123a2.76,2.76,0,0,1-.294-1.006,1.274,1.274,0,0,1,1.2-1.167,2.414,2.414,0,0,1,.955.315Z" fill="#000000"></path> </g> </g> </g> <g id="Group_2400" data-name="Group 2400"> <g id="Group_2399" data-name="Group 2399"> <g id="Group_2398" data-name="Group 2398"> <path id="Path_3857" data-name="Path 3857" d="M239.516,261.014a.47.47,0,0,0-.519-.462.506.506,0,0,0-.48.514c0,.063-.013,1.556-3.314,1.978a4.632,4.632,0,0,0-1.631.529l-1.613-1.614a1,1,0,0,0-.966-.259l-8.016,2.149a1,1,0,0,0-.675.292l-13.526,13.526a1,1,0,0,0,0,1.414l12.08,12.079a1,1,0,0,0,1.414,0L235.8,277.635a1,1,0,0,0,.292-.673l2.148-8.018a1,1,0,0,0-.259-.966l-3.657-3.657a3.672,3.672,0,0,1,1.01-.285C239.621,263.488,239.522,261.114,239.516,261.014Zm-5.361,15.433-12.592,12.592L210.9,278.374l12.592-12.593,7.464-2,1.092,1.093a7.589,7.589,0,0,0-1.165,2.164,2.122,2.122,0,1,0,.967.245,6.461,6.461,0,0,1,.908-1.7l3.4,3.4Zm-2.545-8.12a1,1,0,1,1-1.415,0,.978.978,0,0,1,.371-.227,7.822,7.822,0,0,0-.161.886.5.5,0,0,0,.448.545.423.423,0,0,0,.05,0,.5.5,0,0,0,.5-.451,7.226,7.226,0,0,1,.147-.8C231.566,268.3,231.591,268.309,231.61,268.327Z" fill="#000000"></path> </g> </g> </g> </g> </g> </g></svg>
          <p>Testimonial</p>
        </div>
        <div className="heading">Hear from Our Users</div>
          <h3><b>Check our Reviews and Ratings from Google Reviews.</b></h3>
        <div className="testimonial-content">
            <img src="/google.png" alt="" />
          <div className="cta-container">
            <button>Check Reviews <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="call-to-action" id="call-to-action">
        <div className="cta-group">
          <div className="cta-content">
            <h3>Ready to Upgrade Your Guest Experience?</h3>
            <p>Give your guests more control, free your staff from answering calls, and modernize your service — all with one QR scan.</p>
          </div>
          <ul className="wtu-list">
            <li><svg width="20px" height="20px" viewBox="0 -3.5 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00FF00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M142.196 30.4125C142.586 30.0637 142.897 29.6356 143.109 29.1567C143.32 28.6778 143.427 28.1592 143.422 27.6357C143.417 27.1122 143.3 26.5959 143.079 26.1213C142.858 25.6467 142.538 25.2248 142.141 24.8838C141.722 24.5249 141.307 24.1678 140.895 23.8127C137.751 21.1093 134.5 18.3102 131.1 15.9225C105.123 -2.36044 78.1316 -2.4633 50.8803 7.23287C26.2068 16.0055 10.3619 33.5563 3.77909 59.3882C-3.56415 88.249 2.86618 113.71 22.9048 135.073C23.4261 135.625 23.9582 136.177 24.4895 136.704C35.2539 147.469 48.6614 154.115 59.2847 158.739C63.8445 160.731 87.2404 163.149 93.5707 162.206C131.19 156.588 155.946 135.37 164.569 99.8725C166.215 92.9194 167.035 85.7962 167.011 78.6508C166.974 71.1466 165.712 63.6988 163.275 56.6012C163.097 56.0703 162.805 55.5851 162.418 55.1805C162.031 54.7759 161.56 54.4618 161.037 54.2606C160.515 54.0595 159.954 53.9764 159.396 54.0171C158.838 54.0579 158.295 54.2216 157.808 54.4965L157.706 54.5547C156.931 54.9984 156.336 55.7005 156.027 56.5381C155.717 57.3757 155.712 58.2954 156.012 59.1364C158.212 65.2371 159.334 71.674 159.327 78.1592C159.251 85.9394 158.198 93.6792 156.192 101.197C150.248 122.8 136.038 138.545 112.75 149.315C89.0741 160.65 55.1215 149.19 46.0879 143.226C36.1031 136.4 27.3663 127.908 20.2596 118.121C9.11418 102.34 6.61369 79.6587 12.6028 58.9229C15.4055 49.3489 20.3036 40.5185 26.9421 33.0722C33.5806 25.6259 41.793 19.7503 50.9838 15.8714C74.8941 5.93474 98.8852 4.18192 122.285 19.0635C125.422 21.061 133.422 27.3424 137.465 30.5501C138.143 31.0882 138.99 31.3691 139.855 31.3432C140.721 31.3172 141.549 30.986 142.194 30.4082L142.196 30.4125Z" fill="#00FF00"></path> <path d="M74.6287 104.313C76.2312 102.79 77.1115 102.019 77.9173 101.177C103.753 74.1855 132.047 49.8851 160.508 25.7727C161.584 24.8619 162.685 23.7 163.958 23.3737C165.493 22.9815 167.996 23.4326 168.682 24.2661C169.133 24.8821 169.418 25.6035 169.509 26.3612C169.601 27.1189 169.496 27.8875 169.206 28.5932C168.537 30.3474 166.907 31.8498 165.429 33.1629C156.607 41.0019 147.538 48.5708 138.872 56.5716C120.756 73.3024 102.756 90.1576 84.8704 107.137C77.0334 114.561 74.0173 114.862 66.8059 106.929C62.0589 101.705 47.7328 84.0973 43.3455 78.5495C42.7256 77.6872 42.1735 76.7781 41.6941 75.8305C40.7045 74.0756 40.0576 72.1419 42.0246 70.7814C44.2158 69.2662 45.7707 70.8473 47.0696 72.4937C48.384 74.1607 49.5048 75.9916 50.9121 77.5713C55.2811 82.4737 69.908 99.1421 74.6287 104.313Z" fill="#00FF00"></path> </g></svg> Hotels</li>
            <li><svg width="20px" height="20px" viewBox="0 -3.5 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00FF00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M142.196 30.4125C142.586 30.0637 142.897 29.6356 143.109 29.1567C143.32 28.6778 143.427 28.1592 143.422 27.6357C143.417 27.1122 143.3 26.5959 143.079 26.1213C142.858 25.6467 142.538 25.2248 142.141 24.8838C141.722 24.5249 141.307 24.1678 140.895 23.8127C137.751 21.1093 134.5 18.3102 131.1 15.9225C105.123 -2.36044 78.1316 -2.4633 50.8803 7.23287C26.2068 16.0055 10.3619 33.5563 3.77909 59.3882C-3.56415 88.249 2.86618 113.71 22.9048 135.073C23.4261 135.625 23.9582 136.177 24.4895 136.704C35.2539 147.469 48.6614 154.115 59.2847 158.739C63.8445 160.731 87.2404 163.149 93.5707 162.206C131.19 156.588 155.946 135.37 164.569 99.8725C166.215 92.9194 167.035 85.7962 167.011 78.6508C166.974 71.1466 165.712 63.6988 163.275 56.6012C163.097 56.0703 162.805 55.5851 162.418 55.1805C162.031 54.7759 161.56 54.4618 161.037 54.2606C160.515 54.0595 159.954 53.9764 159.396 54.0171C158.838 54.0579 158.295 54.2216 157.808 54.4965L157.706 54.5547C156.931 54.9984 156.336 55.7005 156.027 56.5381C155.717 57.3757 155.712 58.2954 156.012 59.1364C158.212 65.2371 159.334 71.674 159.327 78.1592C159.251 85.9394 158.198 93.6792 156.192 101.197C150.248 122.8 136.038 138.545 112.75 149.315C89.0741 160.65 55.1215 149.19 46.0879 143.226C36.1031 136.4 27.3663 127.908 20.2596 118.121C9.11418 102.34 6.61369 79.6587 12.6028 58.9229C15.4055 49.3489 20.3036 40.5185 26.9421 33.0722C33.5806 25.6259 41.793 19.7503 50.9838 15.8714C74.8941 5.93474 98.8852 4.18192 122.285 19.0635C125.422 21.061 133.422 27.3424 137.465 30.5501C138.143 31.0882 138.99 31.3691 139.855 31.3432C140.721 31.3172 141.549 30.986 142.194 30.4082L142.196 30.4125Z" fill="#00FF00"></path> <path d="M74.6287 104.313C76.2312 102.79 77.1115 102.019 77.9173 101.177C103.753 74.1855 132.047 49.8851 160.508 25.7727C161.584 24.8619 162.685 23.7 163.958 23.3737C165.493 22.9815 167.996 23.4326 168.682 24.2661C169.133 24.8821 169.418 25.6035 169.509 26.3612C169.601 27.1189 169.496 27.8875 169.206 28.5932C168.537 30.3474 166.907 31.8498 165.429 33.1629C156.607 41.0019 147.538 48.5708 138.872 56.5716C120.756 73.3024 102.756 90.1576 84.8704 107.137C77.0334 114.561 74.0173 114.862 66.8059 106.929C62.0589 101.705 47.7328 84.0973 43.3455 78.5495C42.7256 77.6872 42.1735 76.7781 41.6941 75.8305C40.7045 74.0756 40.0576 72.1419 42.0246 70.7814C44.2158 69.2662 45.7707 70.8473 47.0696 72.4937C48.384 74.1607 49.5048 75.9916 50.9121 77.5713C55.2811 82.4737 69.908 99.1421 74.6287 104.313Z" fill="#00FF00"></path> </g></svg>Shortlet Apartments</li>
            <li><svg width="20px" height="20px" viewBox="0 -3.5 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00FF00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M142.196 30.4125C142.586 30.0637 142.897 29.6356 143.109 29.1567C143.32 28.6778 143.427 28.1592 143.422 27.6357C143.417 27.1122 143.3 26.5959 143.079 26.1213C142.858 25.6467 142.538 25.2248 142.141 24.8838C141.722 24.5249 141.307 24.1678 140.895 23.8127C137.751 21.1093 134.5 18.3102 131.1 15.9225C105.123 -2.36044 78.1316 -2.4633 50.8803 7.23287C26.2068 16.0055 10.3619 33.5563 3.77909 59.3882C-3.56415 88.249 2.86618 113.71 22.9048 135.073C23.4261 135.625 23.9582 136.177 24.4895 136.704C35.2539 147.469 48.6614 154.115 59.2847 158.739C63.8445 160.731 87.2404 163.149 93.5707 162.206C131.19 156.588 155.946 135.37 164.569 99.8725C166.215 92.9194 167.035 85.7962 167.011 78.6508C166.974 71.1466 165.712 63.6988 163.275 56.6012C163.097 56.0703 162.805 55.5851 162.418 55.1805C162.031 54.7759 161.56 54.4618 161.037 54.2606C160.515 54.0595 159.954 53.9764 159.396 54.0171C158.838 54.0579 158.295 54.2216 157.808 54.4965L157.706 54.5547C156.931 54.9984 156.336 55.7005 156.027 56.5381C155.717 57.3757 155.712 58.2954 156.012 59.1364C158.212 65.2371 159.334 71.674 159.327 78.1592C159.251 85.9394 158.198 93.6792 156.192 101.197C150.248 122.8 136.038 138.545 112.75 149.315C89.0741 160.65 55.1215 149.19 46.0879 143.226C36.1031 136.4 27.3663 127.908 20.2596 118.121C9.11418 102.34 6.61369 79.6587 12.6028 58.9229C15.4055 49.3489 20.3036 40.5185 26.9421 33.0722C33.5806 25.6259 41.793 19.7503 50.9838 15.8714C74.8941 5.93474 98.8852 4.18192 122.285 19.0635C125.422 21.061 133.422 27.3424 137.465 30.5501C138.143 31.0882 138.99 31.3691 139.855 31.3432C140.721 31.3172 141.549 30.986 142.194 30.4082L142.196 30.4125Z" fill="#00FF00"></path> <path d="M74.6287 104.313C76.2312 102.79 77.1115 102.019 77.9173 101.177C103.753 74.1855 132.047 49.8851 160.508 25.7727C161.584 24.8619 162.685 23.7 163.958 23.3737C165.493 22.9815 167.996 23.4326 168.682 24.2661C169.133 24.8821 169.418 25.6035 169.509 26.3612C169.601 27.1189 169.496 27.8875 169.206 28.5932C168.537 30.3474 166.907 31.8498 165.429 33.1629C156.607 41.0019 147.538 48.5708 138.872 56.5716C120.756 73.3024 102.756 90.1576 84.8704 107.137C77.0334 114.561 74.0173 114.862 66.8059 106.929C62.0589 101.705 47.7328 84.0973 43.3455 78.5495C42.7256 77.6872 42.1735 76.7781 41.6941 75.8305C40.7045 74.0756 40.0576 72.1419 42.0246 70.7814C44.2158 69.2662 45.7707 70.8473 47.0696 72.4937C48.384 74.1607 49.5048 75.9916 50.9121 77.5713C55.2811 82.4737 69.908 99.1421 74.6287 104.313Z" fill="#00FF00"></path> </g></svg>Bars</li>
            <li><svg width="20px" height="20px" viewBox="0 -3.5 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00FF00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M142.196 30.4125C142.586 30.0637 142.897 29.6356 143.109 29.1567C143.32 28.6778 143.427 28.1592 143.422 27.6357C143.417 27.1122 143.3 26.5959 143.079 26.1213C142.858 25.6467 142.538 25.2248 142.141 24.8838C141.722 24.5249 141.307 24.1678 140.895 23.8127C137.751 21.1093 134.5 18.3102 131.1 15.9225C105.123 -2.36044 78.1316 -2.4633 50.8803 7.23287C26.2068 16.0055 10.3619 33.5563 3.77909 59.3882C-3.56415 88.249 2.86618 113.71 22.9048 135.073C23.4261 135.625 23.9582 136.177 24.4895 136.704C35.2539 147.469 48.6614 154.115 59.2847 158.739C63.8445 160.731 87.2404 163.149 93.5707 162.206C131.19 156.588 155.946 135.37 164.569 99.8725C166.215 92.9194 167.035 85.7962 167.011 78.6508C166.974 71.1466 165.712 63.6988 163.275 56.6012C163.097 56.0703 162.805 55.5851 162.418 55.1805C162.031 54.7759 161.56 54.4618 161.037 54.2606C160.515 54.0595 159.954 53.9764 159.396 54.0171C158.838 54.0579 158.295 54.2216 157.808 54.4965L157.706 54.5547C156.931 54.9984 156.336 55.7005 156.027 56.5381C155.717 57.3757 155.712 58.2954 156.012 59.1364C158.212 65.2371 159.334 71.674 159.327 78.1592C159.251 85.9394 158.198 93.6792 156.192 101.197C150.248 122.8 136.038 138.545 112.75 149.315C89.0741 160.65 55.1215 149.19 46.0879 143.226C36.1031 136.4 27.3663 127.908 20.2596 118.121C9.11418 102.34 6.61369 79.6587 12.6028 58.9229C15.4055 49.3489 20.3036 40.5185 26.9421 33.0722C33.5806 25.6259 41.793 19.7503 50.9838 15.8714C74.8941 5.93474 98.8852 4.18192 122.285 19.0635C125.422 21.061 133.422 27.3424 137.465 30.5501C138.143 31.0882 138.99 31.3691 139.855 31.3432C140.721 31.3172 141.549 30.986 142.194 30.4082L142.196 30.4125Z" fill="#00FF00"></path> <path d="M74.6287 104.313C76.2312 102.79 77.1115 102.019 77.9173 101.177C103.753 74.1855 132.047 49.8851 160.508 25.7727C161.584 24.8619 162.685 23.7 163.958 23.3737C165.493 22.9815 167.996 23.4326 168.682 24.2661C169.133 24.8821 169.418 25.6035 169.509 26.3612C169.601 27.1189 169.496 27.8875 169.206 28.5932C168.537 30.3474 166.907 31.8498 165.429 33.1629C156.607 41.0019 147.538 48.5708 138.872 56.5716C120.756 73.3024 102.756 90.1576 84.8704 107.137C77.0334 114.561 74.0173 114.862 66.8059 106.929C62.0589 101.705 47.7328 84.0973 43.3455 78.5495C42.7256 77.6872 42.1735 76.7781 41.6941 75.8305C40.7045 74.0756 40.0576 72.1419 42.0246 70.7814C44.2158 69.2662 45.7707 70.8473 47.0696 72.4937C48.384 74.1607 49.5048 75.9916 50.9121 77.5713C55.2811 82.4737 69.908 99.1421 74.6287 104.313Z" fill="#00FF00"></path> </g></svg>Restaurants</li>
            <li><svg width="20px" height="20px" viewBox="0 -3.5 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00FF00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M142.196 30.4125C142.586 30.0637 142.897 29.6356 143.109 29.1567C143.32 28.6778 143.427 28.1592 143.422 27.6357C143.417 27.1122 143.3 26.5959 143.079 26.1213C142.858 25.6467 142.538 25.2248 142.141 24.8838C141.722 24.5249 141.307 24.1678 140.895 23.8127C137.751 21.1093 134.5 18.3102 131.1 15.9225C105.123 -2.36044 78.1316 -2.4633 50.8803 7.23287C26.2068 16.0055 10.3619 33.5563 3.77909 59.3882C-3.56415 88.249 2.86618 113.71 22.9048 135.073C23.4261 135.625 23.9582 136.177 24.4895 136.704C35.2539 147.469 48.6614 154.115 59.2847 158.739C63.8445 160.731 87.2404 163.149 93.5707 162.206C131.19 156.588 155.946 135.37 164.569 99.8725C166.215 92.9194 167.035 85.7962 167.011 78.6508C166.974 71.1466 165.712 63.6988 163.275 56.6012C163.097 56.0703 162.805 55.5851 162.418 55.1805C162.031 54.7759 161.56 54.4618 161.037 54.2606C160.515 54.0595 159.954 53.9764 159.396 54.0171C158.838 54.0579 158.295 54.2216 157.808 54.4965L157.706 54.5547C156.931 54.9984 156.336 55.7005 156.027 56.5381C155.717 57.3757 155.712 58.2954 156.012 59.1364C158.212 65.2371 159.334 71.674 159.327 78.1592C159.251 85.9394 158.198 93.6792 156.192 101.197C150.248 122.8 136.038 138.545 112.75 149.315C89.0741 160.65 55.1215 149.19 46.0879 143.226C36.1031 136.4 27.3663 127.908 20.2596 118.121C9.11418 102.34 6.61369 79.6587 12.6028 58.9229C15.4055 49.3489 20.3036 40.5185 26.9421 33.0722C33.5806 25.6259 41.793 19.7503 50.9838 15.8714C74.8941 5.93474 98.8852 4.18192 122.285 19.0635C125.422 21.061 133.422 27.3424 137.465 30.5501C138.143 31.0882 138.99 31.3691 139.855 31.3432C140.721 31.3172 141.549 30.986 142.194 30.4082L142.196 30.4125Z" fill="#00FF00"></path> <path d="M74.6287 104.313C76.2312 102.79 77.1115 102.019 77.9173 101.177C103.753 74.1855 132.047 49.8851 160.508 25.7727C161.584 24.8619 162.685 23.7 163.958 23.3737C165.493 22.9815 167.996 23.4326 168.682 24.2661C169.133 24.8821 169.418 25.6035 169.509 26.3612C169.601 27.1189 169.496 27.8875 169.206 28.5932C168.537 30.3474 166.907 31.8498 165.429 33.1629C156.607 41.0019 147.538 48.5708 138.872 56.5716C120.756 73.3024 102.756 90.1576 84.8704 107.137C77.0334 114.561 74.0173 114.862 66.8059 106.929C62.0589 101.705 47.7328 84.0973 43.3455 78.5495C42.7256 77.6872 42.1735 76.7781 41.6941 75.8305C40.7045 74.0756 40.0576 72.1419 42.0246 70.7814C44.2158 69.2662 45.7707 70.8473 47.0696 72.4937C48.384 74.1607 49.5048 75.9916 50.9121 77.5713C55.2811 82.4737 69.908 99.1421 74.6287 104.313Z" fill="#00FF00"></path> </g></svg>Lounges</li>
            <li><svg width="20px" height="20px" viewBox="0 -3.5 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00FF00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M142.196 30.4125C142.586 30.0637 142.897 29.6356 143.109 29.1567C143.32 28.6778 143.427 28.1592 143.422 27.6357C143.417 27.1122 143.3 26.5959 143.079 26.1213C142.858 25.6467 142.538 25.2248 142.141 24.8838C141.722 24.5249 141.307 24.1678 140.895 23.8127C137.751 21.1093 134.5 18.3102 131.1 15.9225C105.123 -2.36044 78.1316 -2.4633 50.8803 7.23287C26.2068 16.0055 10.3619 33.5563 3.77909 59.3882C-3.56415 88.249 2.86618 113.71 22.9048 135.073C23.4261 135.625 23.9582 136.177 24.4895 136.704C35.2539 147.469 48.6614 154.115 59.2847 158.739C63.8445 160.731 87.2404 163.149 93.5707 162.206C131.19 156.588 155.946 135.37 164.569 99.8725C166.215 92.9194 167.035 85.7962 167.011 78.6508C166.974 71.1466 165.712 63.6988 163.275 56.6012C163.097 56.0703 162.805 55.5851 162.418 55.1805C162.031 54.7759 161.56 54.4618 161.037 54.2606C160.515 54.0595 159.954 53.9764 159.396 54.0171C158.838 54.0579 158.295 54.2216 157.808 54.4965L157.706 54.5547C156.931 54.9984 156.336 55.7005 156.027 56.5381C155.717 57.3757 155.712 58.2954 156.012 59.1364C158.212 65.2371 159.334 71.674 159.327 78.1592C159.251 85.9394 158.198 93.6792 156.192 101.197C150.248 122.8 136.038 138.545 112.75 149.315C89.0741 160.65 55.1215 149.19 46.0879 143.226C36.1031 136.4 27.3663 127.908 20.2596 118.121C9.11418 102.34 6.61369 79.6587 12.6028 58.9229C15.4055 49.3489 20.3036 40.5185 26.9421 33.0722C33.5806 25.6259 41.793 19.7503 50.9838 15.8714C74.8941 5.93474 98.8852 4.18192 122.285 19.0635C125.422 21.061 133.422 27.3424 137.465 30.5501C138.143 31.0882 138.99 31.3691 139.855 31.3432C140.721 31.3172 141.549 30.986 142.194 30.4082L142.196 30.4125Z" fill="#00FF00"></path> <path d="M74.6287 104.313C76.2312 102.79 77.1115 102.019 77.9173 101.177C103.753 74.1855 132.047 49.8851 160.508 25.7727C161.584 24.8619 162.685 23.7 163.958 23.3737C165.493 22.9815 167.996 23.4326 168.682 24.2661C169.133 24.8821 169.418 25.6035 169.509 26.3612C169.601 27.1189 169.496 27.8875 169.206 28.5932C168.537 30.3474 166.907 31.8498 165.429 33.1629C156.607 41.0019 147.538 48.5708 138.872 56.5716C120.756 73.3024 102.756 90.1576 84.8704 107.137C77.0334 114.561 74.0173 114.862 66.8059 106.929C62.0589 101.705 47.7328 84.0973 43.3455 78.5495C42.7256 77.6872 42.1735 76.7781 41.6941 75.8305C40.7045 74.0756 40.0576 72.1419 42.0246 70.7814C44.2158 69.2662 45.7707 70.8473 47.0696 72.4937C48.384 74.1607 49.5048 75.9916 50.9121 77.5713C55.2811 82.4737 69.908 99.1421 74.6287 104.313Z" fill="#00FF00"></path> </g></svg>Beach Houses</li>
            <li><svg width="20px" height="20px" viewBox="0 -3.5 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00FF00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M142.196 30.4125C142.586 30.0637 142.897 29.6356 143.109 29.1567C143.32 28.6778 143.427 28.1592 143.422 27.6357C143.417 27.1122 143.3 26.5959 143.079 26.1213C142.858 25.6467 142.538 25.2248 142.141 24.8838C141.722 24.5249 141.307 24.1678 140.895 23.8127C137.751 21.1093 134.5 18.3102 131.1 15.9225C105.123 -2.36044 78.1316 -2.4633 50.8803 7.23287C26.2068 16.0055 10.3619 33.5563 3.77909 59.3882C-3.56415 88.249 2.86618 113.71 22.9048 135.073C23.4261 135.625 23.9582 136.177 24.4895 136.704C35.2539 147.469 48.6614 154.115 59.2847 158.739C63.8445 160.731 87.2404 163.149 93.5707 162.206C131.19 156.588 155.946 135.37 164.569 99.8725C166.215 92.9194 167.035 85.7962 167.011 78.6508C166.974 71.1466 165.712 63.6988 163.275 56.6012C163.097 56.0703 162.805 55.5851 162.418 55.1805C162.031 54.7759 161.56 54.4618 161.037 54.2606C160.515 54.0595 159.954 53.9764 159.396 54.0171C158.838 54.0579 158.295 54.2216 157.808 54.4965L157.706 54.5547C156.931 54.9984 156.336 55.7005 156.027 56.5381C155.717 57.3757 155.712 58.2954 156.012 59.1364C158.212 65.2371 159.334 71.674 159.327 78.1592C159.251 85.9394 158.198 93.6792 156.192 101.197C150.248 122.8 136.038 138.545 112.75 149.315C89.0741 160.65 55.1215 149.19 46.0879 143.226C36.1031 136.4 27.3663 127.908 20.2596 118.121C9.11418 102.34 6.61369 79.6587 12.6028 58.9229C15.4055 49.3489 20.3036 40.5185 26.9421 33.0722C33.5806 25.6259 41.793 19.7503 50.9838 15.8714C74.8941 5.93474 98.8852 4.18192 122.285 19.0635C125.422 21.061 133.422 27.3424 137.465 30.5501C138.143 31.0882 138.99 31.3691 139.855 31.3432C140.721 31.3172 141.549 30.986 142.194 30.4082L142.196 30.4125Z" fill="#00FF00"></path> <path d="M74.6287 104.313C76.2312 102.79 77.1115 102.019 77.9173 101.177C103.753 74.1855 132.047 49.8851 160.508 25.7727C161.584 24.8619 162.685 23.7 163.958 23.3737C165.493 22.9815 167.996 23.4326 168.682 24.2661C169.133 24.8821 169.418 25.6035 169.509 26.3612C169.601 27.1189 169.496 27.8875 169.206 28.5932C168.537 30.3474 166.907 31.8498 165.429 33.1629C156.607 41.0019 147.538 48.5708 138.872 56.5716C120.756 73.3024 102.756 90.1576 84.8704 107.137C77.0334 114.561 74.0173 114.862 66.8059 106.929C62.0589 101.705 47.7328 84.0973 43.3455 78.5495C42.7256 77.6872 42.1735 76.7781 41.6941 75.8305C40.7045 74.0756 40.0576 72.1419 42.0246 70.7814C44.2158 69.2662 45.7707 70.8473 47.0696 72.4937C48.384 74.1607 49.5048 75.9916 50.9121 77.5713C55.2811 82.4737 69.908 99.1421 74.6287 104.313Z" fill="#00FF00"></path> </g></svg>Event Centers</li>
          </ul>
            <div className="cta-container">
              <button>🔍 See a Live Demo</button>
              <button>📞 Book a Free Call</button>
              <button>🎯 Start for Free</button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;