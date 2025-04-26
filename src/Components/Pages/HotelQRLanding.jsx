import React from 'react';
import { useState } from 'react';
import './HotelQRLanding.css'

const HotelQRLanding = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedItems, setSelectedItems] = useState([]);
  const [orderStatus, setOrderStatus] = useState(''); 
  const [roomNumber, setRoomNumber] = useState('');
  const [orderSubmitting, setOrderSubmitting] = useState(false);

  // My data
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

  // Add laundry services
  const laundryServices = [
    { id: 1, name: 'Regular Laundry', description: '24-hour turnaround', price: 15, unit: 'per bag' },
    { id: 2, name: 'Express Laundry', description: '6-hour turnaround', price: 25, unit: 'per bag' },
    { id: 3, name: 'Dry Cleaning', description: '48-hour turnaround', price: 12, unit: 'per item' },
    { id: 4, name: 'Ironing Service', description: '2-hour turnaround', price: 8, unit: 'per item' },
    { id: 5, name: 'Fold & Press', description: '12-hour turnaround', price: 20, unit: 'per bag' }
  ];

  // Add kitchen/food menu
  const kitchenItems = [
    { id: 1, name: 'Club Sandwich', description: 'Triple-decker with chicken, bacon, lettuce, and tomato', price: 16 },
    { id: 2, name: 'Beef Burger', description: 'Angus beef patty with cheese and fries', price: 18 },
    { id: 3, name: 'Caesar Salad', description: 'Romaine lettuce, croutons, parmesan, and Caesar dressing', price: 14 },
    { id: 4, name: 'Pasta Carbonara', description: 'Spaghetti with bacon, egg, cheese, and black pepper', price: 17 },
    { id: 5, name: 'Margherita Pizza', description: 'Tomato sauce, mozzarella, and fresh basil', price: 15 },
    { id: 6, name: 'Vegetable Stir-Fry', description: 'Seasonal vegetables in soy-ginger sauce', price: 13 }
  ];

  // Define departments for background info (not shown to user anymore)
  const departments = [
    { id: 1, name: 'Food & Beverage', emoji: '🍽️' },
    { id: 2, name: 'Room Service', emoji: '🛎️' },
    { id: 3, name: 'Housekeeping', emoji: '🧹' },
    { id: 4, name: 'Front Office', emoji: '🔑' },
    { id: 5, name: 'Customer Service', emoji: '👋' },
    { id: 6, name: 'Kitchen', emoji: '👨‍🍳' }
  ];

  // Staff roster with on-duty status
  const staff = [
    { id: 1, name: 'Maria Rodriguez', position: 'Concierge', hours: '7am - 3pm', department: 'Customer Service', isOnDuty: true },
    { id: 2, name: 'James Wilson', position: 'Bartender', hours: '4pm - 12am', department: 'Food & Beverage', isOnDuty: false },
    { id: 3, name: 'Sarah Chen', position: 'Front Desk Manager', hours: '9am - 5pm', department: 'Front Office', isOnDuty: true },
    { id: 4, name: 'David Thompson', position: 'Room Service', hours: '24 hours', department: 'Food & Beverage', isOnDuty: true },
    { id: 5, name: 'Lisa Patel', position: 'Housekeeping Manager', hours: '8am - 4pm', department: 'Housekeeping', isOnDuty: true },
    { id: 6, name: 'Chef Michael Jones', position: 'Kitchen Manager', hours: '7am - 10pm', department: 'Kitchen', isOnDuty: true },
    { id: 7, name: 'Thomas Wright', position: 'Laundry Supervisor', hours: '8am - 6pm', department: 'Housekeeping', isOnDuty: true }
  ];

  // Get on-duty staff for the corresponding department based on order type
  const getOnDutyStaffForOrderType = (type) => {
    let departmentName;
    switch(type) {
      case 'drinks':
        departmentName = 'Food & Beverage';
        break;
      case 'kitchen':
        departmentName = 'Kitchen';
        break;
      case 'laundry':
        departmentName = 'Housekeeping';
        break;
      default:
        departmentName = 'Customer Service';
    }
    
    return staff.filter(person => person.isOnDuty && person.department === departmentName);
  };

  // Function to add item to selection
  const addItemToOrder = (item, type) => {
    const existingItem = selectedItems.find(i => i.id === item.id && i.type === type);
    
    if (existingItem) {
      setSelectedItems(selectedItems.map(i => 
        i.id === item.id && i.type === type ? {...i, quantity: i.quantity + 1} : i
      ));
    } else {
      setSelectedItems([...selectedItems, {...item, quantity: 1, type}]);
    }
  };

  // Function to remove item from selection
  const removeItemFromOrder = (itemId, type) => {
    const existingItem = selectedItems.find(i => i.id === itemId && i.type === type);
    
    if (existingItem.quantity > 1) {
      setSelectedItems(selectedItems.map(i => 
        i.id === itemId && i.type === type ? {...i, quantity: i.quantity - 1} : i
      ));
    } else {
      setSelectedItems(selectedItems.filter(i => !(i.id === itemId && i.type === type)));
    }
  };

  // Calculate total bill
  const calculateTotal = (type) => {
    if (type) {
      return selectedItems
        .filter(item => item.type === type)
        .reduce((total, item) => total + (item.price * item.quantity), 0);
    }
    return selectedItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Submit order directly to on-duty staff
  const submitOrder = (type) => {
    if (!roomNumber) {
      setOrderStatus('Please enter your room number.');
      setTimeout(() => setOrderStatus(''), 3000);
      return;
    }
    
    // Get on-duty staff for this order type
    const onDutyStaff = getOnDutyStaffForOrderType(type);
    
    if (onDutyStaff.length === 0) {
      setOrderStatus('No staff currently available. Please try again later.');
      setTimeout(() => setOrderStatus(''), 3000);
      return;
    }
    
    // Simulate sending order to the staff system
    setOrderSubmitting(true);
    
    // In a real app, we would use an API call here
    setTimeout(() => {
      const orderTypeText = type === 'drinks' ? 'Drink order' : 
                           type === 'laundry' ? 'Laundry request' : 
                           type === 'kitchen' ? 'Food order' : 'Order';
      
      // Get a random on-duty staff member who will receive the order
      const assignedStaff = onDutyStaff[Math.floor(Math.random() * onDutyStaff.length)];
      
      setOrderStatus(`${orderTypeText} sent to ${assignedStaff.name}! Your order will be processed shortly.`);
      setOrderSubmitting(false);
      
      // Reset UI state
      setTimeout(() => {
        setOrderStatus('');
        // Only clear the items of current type
        setSelectedItems(selectedItems.filter(item => item.type !== type));
      }, 5000);
    }, 1500);
  };

  // Get selected items of specific type
  const getSelectedItemsByType = (type) => {
    return selectedItems.filter(item => item.type === type);
  };

  // Group staff by department for the staff directory
  const getStaffByDepartment = () => {
    const staffByDepartment = {};
    
    departments.forEach(dept => {
      staffByDepartment[dept.name] = {
        emoji: dept.emoji,
        staff: staff.filter(person => person.department === dept.name)
      };
    });
    
    return staffByDepartment;
  };

  // Add this state to your component
  const [isStaffMode, setIsStaffMode] = useState(false);
  const [staffDepartment, setStaffDepartment] = useState('');

  // Add this function
  const handleStaffLogin = (department) => {
    setIsStaffMode(true);
    setStaffDepartment(department);
  };

  // Add this near the beginning of your return statement
  if (isStaffMode) {
    return <StaffDashboard department={staffDepartment} />;
  }


  return (
    <div className="container">
      <header className="header">
        <div className="header-container">
          <h1 className='header-title'>Oriental Hotel Services</h1>
        </div>
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
              className="menu-item kitchen-item"
              onClick={() => setActiveSection('kitchen')}
            >
              <div className="menu-icon kitchen-icon">
                <div className="emoji">🍔</div>
              </div>
              <div className="menu-details">
                <h2 className="menu-title kitchen-title">Kitchen</h2>
                <p className="menu-description">Delicious meals delivered to your room</p>
                <button className="btn kitchen-btn">
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
              className="menu-item laundry-item"
              onClick={() => setActiveSection('laundry')}
            >
              <div className="menu-icon laundry-icon">
                <div className="emoji">👔</div>
              </div>
              <div className="menu-details">
                <h2 className="menu-title laundry-title">Laundry Services</h2>
                <p className="menu-description">Clean and press your clothes</p>
                <button className="btn laundry-btn">
                  View Services
                </button>
              </div>
            </div>
            
            <div 
              className="menu-item staff-item"
              onClick={() => setActiveSection('staff')}
            >
              <div className="menu-icon staff-icon">
                <div className="emoji">👥</div>
              </div>
              <div className="menu-details">
                <h2 className="menu-title staff-title">Staff Directory</h2>
                <p className="menu-description">Find hotel staff by department</p>
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
          
          {orderStatus && (
            <div className="order-status-message">
              {orderStatus}
            </div>
          )}
          
          <div className="item-list">
            {drinks.map(drink => (
              <div key={drink.id} className="item drink-item">
                <div>
                  <h3 className="item-title">{drink.name}</h3>
                  <p className="item-description">{drink.description}</p>
                </div>
                <div className="drink-order-section">
                  <div className="item-price drink-price">${drink.price}</div>
                  <button 
                    className="add-drink-btn"
                    onClick={() => addItemToOrder(drink, 'drinks')}
                  >
                    Add +
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {getSelectedItemsByType('drinks').length > 0 && (
            <div className="order-summary">
              <h3 className="summary-title">Your Order</h3>
              <div className="selected-items">
                {getSelectedItemsByType('drinks').map(item => (
                  <div key={item.id} className="selected-item">
                    <div className="selected-item-info">
                      <span className="selected-item-name">{item.name}</span>
                      <span className="selected-item-price">${item.price}</span>
                    </div>
                    <div className="quantity-control">
                      <button 
                        className="quantity-btn"
                        onClick={() => removeItemFromOrder(item.id, 'drinks')}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => addItemToOrder(item, 'drinks')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="total-section">
                <div className="total-label">Total:</div>
                <div className="total-amount">${calculateTotal('drinks').toFixed(2)}</div>
              </div>
              
              <div className="room-number-input">
                <label htmlFor="roomNumber">Room Number:</label>
                <input 
                  type="text" 
                  id="roomNumber" 
                  placeholder="Enter your room number"
                  value={roomNumber}
                  onChange={(e) => setRoomNumber(e.target.value)}
                />
              </div>
              
              <button 
                className="submit-order-btn"
                onClick={() => submitOrder('drinks')}
                disabled={orderSubmitting}
              >
                {orderSubmitting ? 'Sending Order...' : 'Send Order'}
              </button>
            </div>
          )}
        </div>
      )}

      {activeSection === 'kitchen' && (
        <div className="main-content">
          <button 
            onClick={() => setActiveSection('home')}
            className="back-btn"
          >
            ← Back
          </button>
          <h2 className="section-title kitchen-title">Kitchen Menu</h2>
          
          {orderStatus && (
            <div className="order-status-message">
              {orderStatus}
            </div>
          )}
          
          <div className="item-list">
            {kitchenItems.map(item => (
              <div key={item.id} className="item kitchen-item">
                <div>
                  <h3 className="item-title">{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                </div>
                <div className="kitchen-order-section">
                  <div className="item-price kitchen-price">${item.price}</div>
                  <button 
                    className="add-kitchen-btn"
                    onClick={() => addItemToOrder(item, 'kitchen')}
                  >
                    Add +
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {getSelectedItemsByType('kitchen').length > 0 && (
            <div className="order-summary">
              <h3 className="summary-title">Your Food Order</h3>
              <div className="selected-items">
                {getSelectedItemsByType('kitchen').map(item => (
                  <div key={item.id} className="selected-item">
                    <div className="selected-item-info">
                      <span className="selected-item-name">{item.name}</span>
                      <span className="selected-item-price">${item.price}</span>
                    </div>
                    <div className="quantity-control">
                      <button 
                        className="quantity-btn"
                        onClick={() => removeItemFromOrder(item.id, 'kitchen')}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => addItemToOrder(item, 'kitchen')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="total-section">
                <div className="total-label">Total:</div>
                <div className="total-amount">${calculateTotal('kitchen').toFixed(2)}</div>
              </div>
              
              <div className="room-number-input">
                <label htmlFor="roomNumberKitchen">Room Number:</label>
                <input 
                  type="text" 
                  id="roomNumberKitchen" 
                  placeholder="Enter your room number"
                  value={roomNumber}
                  onChange={(e) => setRoomNumber(e.target.value)}
                />
              </div>
              
              <button 
                className="submit-order-btn"
                onClick={() => submitOrder('kitchen')}
                disabled={orderSubmitting}
              >
                {orderSubmitting ? 'Sending Order...' : 'Send Food Order'}
              </button>
            </div>
          )}
        </div>
      )}

      {activeSection === 'laundry' && (
        <div className="main-content">
          <button 
            onClick={() => setActiveSection('home')}
            className="back-btn"
          >
            ← Back
          </button>
          <h2 className="section-title laundry-title">Laundry Services</h2>
          
          {orderStatus && (
            <div className="order-status-message">
              {orderStatus}
            </div>
          )}
          
          <div className="item-list">
            {laundryServices.map(service => (
              <div key={service.id} className="item laundry-item">
                <div>
                  <h3 className="item-title">{service.name}</h3>
                  <p className="item-description">{service.description}</p>
                </div>
                <div className="laundry-price-container">
                  <div className="item-price laundry-price">${service.price} {service.unit}</div>
                  <button 
                    className="service-btn"
                    onClick={() => addItemToOrder(service, 'laundry')}
                  >
                    Request
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {getSelectedItemsByType('laundry').length > 0 && (
            <div className="order-summary">
              <h3 className="summary-title">Your Laundry Request</h3>
              <div className="selected-items">
                {getSelectedItemsByType('laundry').map(item => (
                  <div key={item.id} className="selected-item">
                    <div className="selected-item-info">
                      <span className="selected-item-name">{item.name}</span>
                      <span className="selected-item-price">${item.price} {item.unit}</span>
                    </div>
                    <div className="quantity-control">
                      <button 
                        className="quantity-btn"
                        onClick={() => removeItemFromOrder(item.id, 'laundry')}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => addItemToOrder(item, 'laundry')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="total-section">
                <div className="total-label">Total:</div>
                <div className="total-amount">${calculateTotal('laundry').toFixed(2)}</div>
              </div>
              
              <div className="room-number-input">
                <label htmlFor="roomNumberLaundry">Room Number:</label>
                <input 
                  type="text" 
                  id="roomNumberLaundry" 
                  placeholder="Enter your room number"
                  value={roomNumber}
                  onChange={(e) => setRoomNumber(e.target.value)}
                />
              </div>
              
              <button 
                className="submit-order-btn"
                onClick={() => submitOrder('laundry')}
                disabled={orderSubmitting}
              >
                {orderSubmitting ? 'Sending Request...' : 'Send Laundry Request'}
              </button>
            </div>
          )}
          
          <div className="laundry-note">
            <p>For laundry pickup, please call extension 423 or request service above.</p>
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
          <h2 className="section-title staff-title">Staff Directory</h2>
          <p className="staff-intro">Find the right staff member to assist you during your stay.</p>
          
          <div className="departments-list">
            {departments.map(dept => (
              <div key={dept.id} className="department-section">
                <div className="department-header">
                  <span className="department-emoji">{dept.emoji}</span>
                  <h3 className="department-name">{dept.name}</h3>
                </div>
                
                <div className="staff-list">
                  {staff
                    .filter(person => person.department === dept.name)
                    .map(person => (
                      <div key={person.id} className={`staff-card ${person.isOnDuty ? 'on-duty' : 'off-duty'}`}>
                        <div className="staff-status">
                          <span className={`status-indicator ${person.isOnDuty ? 'active' : 'inactive'}`}></span>
                          <span className="status-text">{person.isOnDuty ? 'On Duty' : 'Off Duty'}</span>
                        </div>
                        <h4 className="staff-name">{person.name}</h4>
                        <p className="staff-position">{person.position}</p>
                        <p className="staff-hours">Hours: {person.hours}</p>
                        {person.isOnDuty && (
                          <button className="contact-staff-btn">Contact</button>
                        )}
                      </div>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
          
          <div className="staff-note">
            <p>For immediate assistance, please contact the front desk by dialing 0 from your room phone.</p>
          </div>
        </div>
      )}

      <button 
        onClick={() => handleStaffLogin('Food & Beverage')}
        style={{ position: 'absolute', top: 10, right: 10, opacity: 0.1 }}
      >
        Staff
      </button>

      <div className="footer-buttons">
        <button 
          onClick={() => (window.location.href = "/#/")}
          className="home-btn">
          ← Back to Main Page
        </button>
      </div>
      <footer className="footer">
        <p>Scan this QR code again to access hotel services</p>
      </footer>
    </div>
  )
}

export default HotelQRLanding