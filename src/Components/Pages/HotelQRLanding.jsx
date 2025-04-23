import React from 'react';
import { useState } from 'react';
import './HotelQRLanding.css'

const HotelQRLanding = () => {
  const [activeSection, setActiveSection] = useState('home');

   // my data
   const drinks = [
    { id: 1, name: 'Classic Mojito', description: 'Rum, mint, lime, soda water', price: 12 },
    { id: 2, name: 'Espresso Martini', description: 'Vodka, coffee liqueur, espresso', price: 14 },
    { id: 3, name: 'Signature Margarita', description: 'Tequila, lime, triple sec, salt rim', price: 13 },
    { id: 4, name: 'House Red Wine', description: 'Cabernet Sauvignon', price: 9 },
    { id: 5, name: 'Craft Beer', description: 'Local IPA', price: 8 },
    { id: 6, name: 'Virgin Colada', description: 'Pineapple, coconut cream', price: 7 }
  ];

  const rooms = [
    { id: 1, name: 'Standard Room', description: 'Cozy room with queen bed', price: 120, capacity: '1-2 guests' },
    { id: 2, name: 'Deluxe Room', description: 'Spacious room with king bed and city view', price: 180, capacity: '1-2 guests' },
    { id: 3, name: 'Family Suite', description: 'Large suite with two bedrooms', price: 250, capacity: '2-4 guests' },
    { id: 4, name: 'Executive Suite', description: 'Luxury suite with separate living area', price: 320, capacity: '1-2 guests' }
  ];

  const staff = [
    { id: 1, name: 'Maria Rodriguez', position: 'Concierge', hours: '7am - 3pm' },
    { id: 2, name: 'James Wilson', position: 'Bartender', hours: '4pm - 12am' },
    { id: 3, name: 'Sarah Chen', position: 'Front Desk Manager', hours: '9am - 5pm' },
    { id: 4, name: 'David Thompson', position: 'Room Service', hours: '24 hours' },
    { id: 5, name: 'Lisa Patel', position: 'Housekeeping Manager', hours: '8am - 4pm' }
  ];

  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">Luxury Hotel Services</h1>
      </header>

      {activeSection === 'home' && (
        <div className="main-content">
          <div className="menu-container">
            <div 
              className="menu-item drinks-item"
              onClick={() => setActiveSection('drinks')}
            >
              <div className="menu-icon drinks-icon">
                <div className="emoji">🍹</div>
              </div>
              <div className="menu-details">
                <h2 className="menu-title drinks-title">Drinks Menu</h2>
                <p className="menu-description">Explore our selection of beverages</p>
                <button className="btn drinks-btn">
                  View Menu
                </button>
              </div>
            </div>

            <div 
              className="menu-item rooms-item"
              onClick={() => setActiveSection('rooms')}
            >
              <div className="menu-icon rooms-icon">
                <div className="emoji">🛏️</div>
              </div>
              <div className="menu-details">
                <h2 className="menu-title rooms-title">Room Booking</h2>
                <p className="menu-description">Check availability and rates</p>
                <button className="btn rooms-btn">
                  View Rooms
                </button>
              </div>
            </div>

            <div 
              className="menu-item staff-item"
              onClick={() => setActiveSection('staff')}
            >
              <div className="menu-icon staff-icon">
                <div className="emoji">👨‍💼</div>
              </div>
              <div className="menu-details">
                <h2 className="menu-title staff-title">Our Staff</h2>
                <p className="menu-description">Meet our team members</p>
                <button className="btn staff-btn">
                  View Staff
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'drinks' && (
        <div className="main-content">
          <button 
            onClick={() => setActiveSection('home')}
            className="back-btn"
          >
            ← Back
          </button>
          <h2 className="section-title drinks-title">Drinks Menu</h2>
          <div className="item-list">
            {drinks.map(drink => (
              <div key={drink.id} className="item drink-item">
                <div>
                  <h3 className="item-title">{drink.name}</h3>
                  <p className="item-description">{drink.description}</p>
                </div>
                <div className="item-price drink-price">${drink.price}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'rooms' && (
        <div className="main-content">
          <button 
            onClick={() => setActiveSection('home')}
            className="back-btn"
          >
            ← Back
          </button>
          <h2 className="section-title rooms-title">Room Booking</h2>
          <div className="rooms-list">
            {rooms.map(room => (
              <div key={room.id} className="room-item">
                <div className="room-image">
                  <div className="room-emoji">🏨</div>
                </div>
                <div className="room-details">
                  <h3 className="item-title">{room.name}</h3>
                  <p className="item-description">{room.description}</p>
                  <div className="room-footer">
                    <div className="room-capacity">{room.capacity}</div>
                    <div className="room-price">${room.price}/night</div>
                  </div>
                  <button className="book-btn">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'staff' && (
        <div className="main-content">
          <button 
            onClick={() => setActiveSection('home')}
            className="back-btn"
          >
            ← Back
          </button>
          <h2 className="section-title staff-title">Our Staff</h2>
          <div className="item-list">
            {staff.map(person => (
              <div key={person.id} className="item staff-item">
                <h3 className="item-title">{person.name}</h3>
                <div className="staff-details">
                  <p className="staff-position">{person.position}</p>
                  <p className="staff-hours">{person.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <footer className="footer">
        <p>Scan this QR code again to access hotel services</p>
      </footer>
      <div className="footer-buttons">
        <button 
          onClick={() => (window.location.href = "/#/")}
          className="home-btn"
        >
          ← Back to Main Page
        </button>
      </div>
    </div>
  )
}

export default HotelQRLanding
