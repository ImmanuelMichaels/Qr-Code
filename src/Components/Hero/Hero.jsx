import React from 'react';
import { Router, Link } from "react-router-dom";
import { QRCodeSVG } from 'qrcode.react';
import './Hero.css';

const Hero = () => {
  const qrValue = 'https://hoteldomain.vercel.app/hotel';

  
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
              <button id='demo'><Link to="/signin" className="link"><span>Book a demo</span></Link></button>
              <button id="join"><Link to="/signup" className="link">
                  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#f5f5f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#f5f5f5" stroke-width="2" stroke-linecap="round"></rect> </g></svg><span> Talk to sales </span> 
                </Link>
              </button>
            </div>
        </div>
        <div className="content" id='bar-code'>
          <div className="icon-box">

              <div className="icon">
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 13C9 15.2091 10.7909 17 13 17C14.1046 17 15.1046 16.5523 15.8284 15.8284M9 13H5M9 13C9 11.448 9.88388 10.1025 11.1757 9.43928M5 13C5 13.5523 4.55228 14 4 14C3.44772 14 3 13.5523 3 13C3 12.4477 3.44772 12 4 12C4.55228 12 5 12.4477 5 13ZM19.2929 6.70711C19.1119 6.52614 19 6.27614 19 6C19 5.44772 19.4477 5 20 5C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7C19.7239 7 19.4739 6.88807 19.2929 6.70711ZM19.2929 6.70711L15.8284 10.1716M9.37149 4.92872C9.73983 4.78126 10 4.42101 10 4C10 3.44772 9.55228 3 9 3C8.44772 3 8 3.44772 8 4C8 4.55228 8.44772 5 9 5C9.13127 5 9.25664 4.97471 9.37149 4.92872ZM9.37149 4.92872L11.1757 9.43928M15.8284 15.8284C16.5523 15.1046 17 14.1046 17 13C17 11.8954 16.5523 10.8954 15.8284 10.1716M15.8284 15.8284L19.2929 19.2929M19.2929 19.2929C19.1119 19.4739 19 19.7239 19 20C19 20.5523 19.4477 21 20 21C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19C19.7239 19 19.4739 19.1119 19.2929 19.2929ZM15.8284 10.1716C15.1046 9.44772 14.1046 9 13 9C12.3428 9 11.7227 9.15847 11.1757 9.43928" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
              
              <div className="icon">
                <svg width="64px" height="64px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z"></path></g></svg>
              </div>
              
              <div className="icon">
                <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-8H2V19z M19,4h-2V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H9V3c0-0.6-0.4-1-1-1S7,2.4,7,3v1H5C3.3,4,2,5.3,2,7v2h20V7C22,5.3,20.7,4,19,4z"></path></g></svg>
              </div>
            </div>

            <div className="bar-content">
              <div className="image">
                <QRCodeSVG 
                value={qrValue}
                size={350}
                level="H"
                includeMargin={true}
                />
              </div>

            </div>
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
       <section className="benefits-container" id="benefits-container">
        <div className="heading">Our Benefits</div>
        <h3><b>Why Switch to QR Self-Service?</b></h3>
        <p>“No more waiting. Just scan, select, and get served faster, smarter, and with zero hassle.”</p>
        <div className="benefit-content">
          <div id="benefits-box">
            <div className="particular">
              <div className="icon">
                <svg width="64px" height="64px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M548.195 513.698m-251.76 0a251.76 251.76 0 1 0 503.52 0 251.76 251.76 0 1 0-503.52 0Z" fill="#ED8F27"></path><path d="M548.195 513.698m-204.584 0a204.584 204.584 0 1 0 409.168 0 204.584 204.584 0 1 0-409.168 0Z" fill="#FCE3C3"></path><path d="M549.245 737.504c-123.071 0-223.194-100.123-223.194-223.194 0-123.071 100.123-223.2 223.194-223.2 123.071 0 223.2 100.13 223.2 223.2 0.001 123.071-100.129 223.194-223.2 223.194z m0-424.602c-111.054 0-201.402 90.354-201.402 201.408s90.347 201.402 201.402 201.402 201.408-90.347 201.408-201.402-90.354-201.408-201.408-201.408z" fill="#300604"></path><path d="M549.245 784.679c-149.085 0-270.368-121.284-270.368-270.368s121.284-270.375 270.368-270.375S819.62 365.227 819.62 514.311 698.329 784.679 549.245 784.679z m0-518.952c-137.068 0-248.576 111.516-248.576 248.583 0 137.068 111.508 248.576 248.576 248.576 137.067 0 248.583-111.508 248.583-248.576 0-137.067-111.516-248.583-248.583-248.583z" fill="#300604"></path><path d="M549.245 784.679c-149.085 0-270.368-121.284-270.368-270.368s121.284-270.375 270.368-270.375S819.62 365.227 819.62 514.311 698.329 784.679 549.245 784.679z m0-518.952c-137.068 0-248.576 111.516-248.576 248.583 0 137.068 111.508 248.576 248.576 248.576 137.067 0 248.583-111.508 248.583-248.576 0-137.067-111.516-248.583-248.583-248.583zM290.873 321.06l-17.437-13.067c34.994-46.713 81.516-84.02 134.528-107.89l8.953 19.877c-49.672 22.359-93.249 57.31-126.044 101.08zM808.717 322.535c-60.66-81.941-157.661-130.86-259.472-130.86v-21.792c108.685 0 212.234 52.218 276.993 139.685l-17.521 12.967z" fill="#300604"></path><path d="M538.349 329.168h21.792v27.163h-21.792zM466.097 348.541l13.584 23.523-18.87 10.897-13.583-23.523zM394.376 412.315L417.9 425.9l-10.897 18.87-23.524-13.586zM364.109 503.414h27.163v21.792h-27.163zM406.996 583.883l10.897 18.87-23.524 13.584-10.897-18.87zM460.813 645.69l18.87 10.897-13.586 23.524-18.869-10.896zM538.349 672.283h21.792v27.163h-21.792zM637.655 645.688l13.584 23.524-18.869 10.897-13.585-23.524zM691.533 583.876l23.523 13.585-10.896 18.869-23.524-13.584zM707.225 503.414h27.163v21.792h-27.163zM704.148 412.324l10.896 18.87-23.523 13.584-10.896-18.87zM632.383 348.552l18.869 10.897-13.584 23.523-18.87-10.897z" fill="#300604"></path><path d="M517.72 588.03l-18.685-11.209 39.314-65.526V398.51h21.792v118.815z" fill="#300604"></path><path d="M331.228 654.924c-11.722 8.299-26.001 13.221-41.456 13.221-39.703 0-71.888-32.185-71.888-71.888s32.185-71.888 71.888-71.888c0.086 0 0.169 0.012 0.255 0.012-0.129-3.347-0.255-6.696-0.255-10.075 0-35.131 7.018-68.612 19.669-99.169-1.194-1.204-2.828-1.956-4.632-1.956h-30.074a6.542 6.542 0 0 0-6.477 5.617l-3.947 27.625c-0.393 2.753-2.495 4.911-5.216 5.487a146.275 146.275 0 0 0-38.469 13.999c-2.456 1.307-5.453 1.004-7.524-0.853l-20.776-18.622a6.542 6.542 0 0 0-8.572-0.14l-23.039 19.331a6.544 6.544 0 0 0-1.351 8.467l14.745 23.717c1.468 2.362 1.247 5.365-0.466 7.556a147.124 147.124 0 0 0-20.512 35.441c-1.043 2.575-3.53 4.266-6.307 4.175l-27.863-0.909a6.543 6.543 0 0 0-6.657 5.403l-5.222 29.617a6.542 6.542 0 0 0 4.407 7.354l26.543 8.691c2.643 0.866 4.407 3.309 4.503 6.089 0.455 13.258 2.662 26.89 6.836 40.684 0.788 2.606-0.049 5.43-2.191 7.111l-21.659 17.002a6.542 6.542 0 0 0-1.626 8.418l15.036 26.045a6.544 6.544 0 0 0 8.105 2.8l23.907-9.595c2.542-1.021 5.479-0.375 7.287 1.683a132.81 132.81 0 0 0 33.071 27.201c2.41 1.401 3.61 4.224 3.036 6.952l-5.402 25.7a6.542 6.542 0 0 0 4.165 7.494l28.261 10.286a6.543 6.543 0 0 0 8.008-3.063l13.15-24.596c1.303-2.437 3.992-3.748 6.729-3.379 14.066 1.9 27.813 1.82 41.002-0.013 2.751-0.383 5.458 0.928 6.767 3.378l13.157 24.61a6.544 6.544 0 0 0 8.009 3.063l28.26-10.286a6.542 6.542 0 0 0 4.165-7.494l-5.738-27.304c-0.572-2.717 0.66-5.46 3.012-6.934 4.536-2.842 8.851-5.994 13.037-9.299a260.63 260.63 0 0 1-49.691-56.766z" fill="#B12800"></path><path d="M335.947 784.302a17.426 17.426 0 0 1-15.38-9.215l-11.747-21.976c-11.896 1.489-25.24 1.532-38.108 0.028l-11.74 21.941c-3.987 7.477-13.336 11.087-21.338 8.165l-28.254-10.286c-8.115-2.944-12.89-11.535-11.102-19.984l4.76-22.644a143.2 143.2 0 0 1-30.865-25.389l-21.076 8.456c-7.888 3.164-17.38-0.156-21.601-7.456l-15.032-26.048c-4.321-7.47-2.455-17.118 4.334-22.445l19.324-15.174c-3.554-12.499-5.689-25.161-6.349-37.725l-23.672-7.746c-8.2-2.688-13.245-11.124-11.74-19.615l5.213-29.61a17.406 17.406 0 0 1 17.167-14.408l25.424 0.823a158.128 158.128 0 0 1 19.097-33.001l-13.152-21.147c-4.555-7.321-3.008-17.026 3.604-22.572l23.04-19.331c6.399-5.377 16.579-5.228 22.835 0.369l18.537 16.614a157.282 157.282 0 0 1 35.831-13.038l3.511-24.63c1.227-8.541 8.647-14.975 17.266-14.975h30.078c4.667 0 9.066 1.844 12.372 5.192l5.086 5.143-2.767 6.682c-12.499 30.199-18.834 62.163-18.834 95.008 0 3.235 0.128 6.448 0.248 9.655l0.433 11.315-11.946-0.015c-33.462 0.198-60.624 27.482-60.624 60.993 0 33.632 27.361 60.993 60.992 60.993 12.634 0 24.793-3.88 35.165-11.223l9.278-6.562 6.164 9.541a249.64 249.64 0 0 0 47.614 54.396l10.101 8.619-10.428 8.222c-4.086 3.221-7.882 5.988-11.52 8.385l5.121 24.361c1.781 8.427-2.986 17.018-11.094 19.969l-28.269 10.286a17.19 17.19 0 0 1-5.957 1.059z m-24.75-53.303c6.477 0 12.385 3.519 15.429 9.187l11.379 21.295 21.161-7.704-4.958-23.608c-1.49-7.13 1.681-14.522 7.895-18.416 0.496-0.312 1.007-0.631 1.511-0.965a271.513 271.513 0 0 1-35.597-41.145c-11.776 6.179-24.808 9.4-38.243 9.4-45.648 0-82.785-37.136-82.785-82.785 0-41.953 31.369-76.72 71.888-82.069 0.015-30.965 5.207-61.205 15.458-90.113h-15.826l-3.405 23.884c-1.05 7.229-6.576 13.096-13.762 14.614a135.666 135.666 0 0 0-35.604 12.953c-6.307 3.369-14.578 2.433-19.912-2.362l-17.962-16.096-17.252 14.478 12.755 20.509c3.845 6.193 3.384 14.237-1.149 20.026a136.396 136.396 0 0 0-18.983 32.816c-2.703 6.668-9.059 10.981-16.195 10.981l-24.658-0.795-3.909 22.182 22.949 7.513c6.938 2.27 11.761 8.733 12.003 16.089 0.433 12.563 2.575 25.318 6.378 37.895 2.114 6.974-0.206 14.365-5.896 18.827l-18.685 14.678 11.258 19.5 20.408-8.186c6.704-2.703 14.791-0.802 19.537 4.618a121.916 121.916 0 0 0 30.354 24.957c6.469 3.745 9.775 11.23 8.222 18.614l-4.618 22.005 21.154 7.696 11.378-21.26c3.412-6.371 10.47-10.01 17.791-9.038 12.741 1.717 25.602 1.703 38.052-0.007a17.99 17.99 0 0 1 2.439-0.168z" fill="#300604"></path><path d="M289.773 679.044c-45.648 0-82.785-37.136-82.785-82.785 0-45.649 37.136-82.785 82.785-82.785l10.747 0.015 0.397 10.477c1.695 44.493 15.344 87.73 39.463 125.044l5.668 8.775-8.527 6.037c-14.066 9.958-30.581 15.222-47.748 15.222z m-9.967-142.963c-28.907 4.767-51.026 29.936-51.026 60.177 0 33.632 27.361 60.993 60.992 60.993a60.389 60.389 0 0 0 26.375-6.03c-20.649-35.093-33.078-74.492-36.341-115.14z" fill="#300604"></path><path d="M429.547 797.744l14.721 16.069-20.626 18.884 8.54 26.565-20.744 6.676-12.822-39.878z" fill="#231F20"></path><path d="M828.102 350.896l18.972-10.716c28.714 50.816 44.182 108.407 44.738 166.543l-21.799 0.211c-0.515-54.47-15.01-108.419-41.911-156.038z" fill="#300604"></path><path d="M548.575 863.313c-48.041 0-94.539-9.684-138.204-28.784l8.61-19.685c40.933 17.905 84.534 26.983 129.593 26.983 80.613 0 157.852-29.814 217.489-83.952 59.229-53.767 96.333-126.999 104.48-206.208l21.373 2.197c-8.689 84.485-48.256 162.588-111.412 219.919-63.598 57.736-145.965 89.53-231.929 89.53z" fill="#300604"></path></g></svg>
              </div>
              <div className="analysis">
              <div className="text">
                <h6>Real-Time Wait Time</h6>
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
              <div className="icon">
                <img src="/sav.svg" alt="icon" id='box-icon'/>
              </div>
              <div className="analysis">
                <div className="text">
                  <h6>Improve Guest Satisfaction</h6>
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
            <div className="particular">
              <div className="icon">
                <img src="/roc.svg" alt="icon" id='box-icon'/>
              </div>
              <div className="analysis">
                <div className="text">
                  <h6>Reduce Operational Costs</h6>
                  <p>No more maintenance for intercoms or hiring extra hands.</p> 
                </div>
                <div className="box">
                  {/* <div id="order-info">
                    <div className="orders">
                      <img src="/IMG_2138.JPG" alt="" />
                      <p>You can add to your orders</p>
                    </div>
                    <div id="wait-time">
                      <p>session closes in 7 minutes</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="particular">
              <div className="icon">
                <img src="/sac.svg" alt="" id='box-icon'/>
              </div>
              <div className="analysis">
                <div className="text">
                  <p>Stay Ahead of Competitors</p>
                  <p>Offer smart, touchless service guests will love.</p> 
                </div>
                {/* <div className="box">
                  <div id="order-info">
                    <div className="orders">
                      <img src="/IMG_2138.JPG" alt="" />
                      <p>Rate our service today</p>
                    </div>
                  </div>
                  <div id="wait-time">
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
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
      </section> 

      {/*FEATURES section */}
      <section className="features-container">
        <div className="features-content">
          <div className="heading">Features</div>
          <h3><b>What You Get with Our QR Solution</b></h3>

          <div className="feature-comp">
            <div className="text">
              {/* <h3>What You Get with Our QR Solution</h3> */}
              

            </div>
            {/* <div className="graphics-comp">
            </div> */}
            <ul className="feature-list">
                <li id='inner-list'>
                  <div className="text-icon">
                    <div id='heading'>QR-Based Room & Table Access</div>
                    <img src="/qricon.png" alt="" />
                  </div>
                  <div id='sub-text'>
                    <div className="sub-image qr"></div>
                    <p>Unique QR per room/table, scannable by any smartphone.</p>
                  </div>  
                </li>
                <li id='inner-list'>
                  <div className="text-icon">
                    <div id='heading'>Instant Order Dashboard</div>
                    <img src="/menuicon.png" alt="" />
                  </div>
                  <div id='sub-text'>
                    <div className="sub-image orders"></div>
                   <p>Staff get real-time notifications of customer orders.</p>
                  </div>
                </li>
                <li id='inner-list'>
                  <div className="text-icon">
                    <div id='heading'>Customizable Menu & Services</div>
                    <img src="/settingsicon.png" alt="" />
                  </div>
                  <div id='sub-text'>
                    <div className="sub-image custom"></div>
                    <p>Add food, drinks, laundry, or any service you offer.</p>
                  </div>
                </li>
                <li id='inner-list'>
                  <div className="text-icon">
                    <div id='heading'>Multi-Department Routing</div>
                    <img src="/depticon.png" alt="" />
                  </div>
                  <div id='sub-text'>
                    <div className="sub-image dept"></div>
                    <p>Orders go straight to the right department (e.g., kitchen, bar, cleaning).</p>
                  </div>
                </li>
                <li id='inner-list'>
                  <div className="text-icon">
                    <div id='heading'>Analytics & Insights</div>
                    <img src="/analysisicon.png" alt="" />
                  </div>
                  <div id='sub-text'>
                    <div className="sub-image analytics"></div>
                    <p>
                      Know your most ordered services and busiest hours.
                    </p>
                  </div>
                </li>
              </ul>
          </div>

        </div>
      </section>

      {/* How to use section */}
      <section className="how-it-works" id="how-it-works">
          <div className="heading">How it works</div>
          <h3><b>How Guests Use It</b></h3>
        <div className="how-it-works-content">
          <ul className="hiw-list">
            <li id='inner-list'>
              <div id='sub-text'>
                <div className="sub-image hwqr"></div>
              </div>
                <p>Scan the QR <br/>No app download needed.</p>
            </li>
            <li id='inner-list'>
              <div id='sub-text'>
                <div className="sub-image selectMENU"></div>
              </div>
                <p>Browse the Menu or Services<br/>Intuitive and mobile-friendly.</p>
            </li>
            <li id='inner-list'>
              <div id='sub-text'>
                <div className="sub-image staff"></div>
              </div>
                <p>Place an Order <br/> Select items and confirm.</p>
            </li>
            <li id='inner-list'>
              <div id='sub-text'>
                <div className="sub-image delivered"></div>
              </div>
                <p>Order Delivered <br/> Item Delivered to you.</p>
            </li>            
          </ul>
        </div>
      </section>

      {/* Pricing section */}
      <section className="pricing-container" id="prices">
          <div className="heading">Our Pricings</div>
          <h3><b>How users have achieved success with Hospitio</b></h3>
        <div className="pricing-content">
        <div id="price-list">
          <li id='price-details'>
            <div id="price-type">
              <h3>Standard</h3>
              <div id="users">5 Users</div>
            </div>
            <span>$50</span>/per month
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
            
        </div>
      </section>
      
    </div>
  );
};

export default Hero;