import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get dynamic route parameters
import './StaffDashboard.css';

const StaffDashboard = () => {
  const { department } = useParams(); // Retrieve department from the URL parameter
  const [orders, setOrders] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('current');
  const [totalSales, setTotalSales] = useState(0);

  // Helper function to return relevant items by department
  const getRelevantItems = () => {
    if (department === 'Food & Beverage') {
      return ['Classic Mojito', 'House Red Wine', 'Club Sandwich', 'Craft Beer'];
    } else if (department === 'Kitchen') {
      return ['Margherita Pizza', 'Caesar Salad'];
    } else if (department === 'Housekeeping') {
      return ['Express Laundry'];
    }
    return [];
  };

  useEffect(() => {
    const fetchOrders = () => {
      setIsLoading(true);

      setTimeout(() => {
        const mockOrders = [
          {
            id: 1,
            roomNumber: '304',
            items: [
              { name: 'Classic Mojito', quantity: 2, price: 12 },
              { name: 'House Red Wine', quantity: 1, price: 9 }
            ],
            total: 33,
            timestamp: new Date(Date.now() - 1000 * 60 * 15),
            status: 'pending'
          },
          {
            id: 2,
            roomNumber: '215',
            items: [
              { name: 'Margherita Pizza', quantity: 1, price: 15 },
              { name: 'Caesar Salad', quantity: 1, price: 14 }
            ],
            total: 29,
            timestamp: new Date(Date.now() - 1000 * 60 * 5),
            status: 'pending'
          }
        ];

        const mockHistory = [
          {
            id: 101,
            roomNumber: '412',
            items: [
              { name: 'Express Laundry', quantity: 2, price: 25, unit: 'per bag' }
            ],
            total: 50,
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
            status: 'completed'
          },
          {
            id: 102,
            roomNumber: '304',
            items: [
              { name: 'Club Sandwich', quantity: 1, price: 16 },
              { name: 'Craft Beer', quantity: 2, price: 8 }
            ],
            total: 32,
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
            status: 'completed'
          }
        ];

        const relevantItems = getRelevantItems();

        const filteredOrders = mockOrders.filter(order =>
          order.items.some(item => relevantItems.includes(item.name))
        );

        const filteredHistory = mockHistory.filter(order =>
          order.items.some(item => relevantItems.includes(item.name))
        );

        setOrders(filteredOrders);
        setOrderHistory(filteredHistory);
        setTotalSales(filteredHistory.reduce((sum, order) => sum + order.total, 0));
        setIsLoading(false);
      }, 800);
    };

    fetchOrders();

    const interval = setInterval(fetchOrders, 30000);

    return () => clearInterval(interval);
  }, [department]);

  const handleCompleteOrder = (orderId) => {
    const orderToComplete = orders.find(order => order.id === orderId);
    if (orderToComplete) {
      setOrders(orders.filter(order => order.id !== orderId));
      setOrderHistory([{ ...orderToComplete, status: 'completed' }, ...orderHistory]);
      setTotalSales(totalSales + orderToComplete.total);
    }
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString([], { month: 'short', day: 'numeric' });
  };

  return (
    <div className="staff-dashboard">
      <div className="dashboard-header">
        <h1>{department} Dashboard</h1>
        <div className="sales-summary">
          <span className="sales-label">Today's Sales:</span>
          <span className="sales-amount">${totalSales.toFixed(2)}</span>
        </div>
      </div>

      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === 'current' ? 'active' : ''}`}
          onClick={() => setActiveTab('current')}
        >
          Current Orders
        </button>
        <button
          className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          Order History
        </button>
      </div>

      {isLoading ? (
        <div className="loading">Loading orders...</div>
      ) : (
        <>
          {activeTab === 'current' && (
            <div className="current-orders">
              {orders.length === 0 ? (
                <div className="no-orders">No current orders</div>
              ) : (
                orders.map(order => (
                  <div key={order.id} className="order-card">
                    <div className="order-header">
                      <span className="room-number">Room {order.roomNumber}</span>
                      <span className="order-time">{formatTime(order.timestamp)}</span>
                    </div>

                    <div className="order-items">
                      {order.items.map((item, index) => (
                        <div key={index} className="order-item">
                          <span className="item-quantity">{item.quantity}x</span>
                          <span className="item-name">{item.name}</span>
                          <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="order-footer">
                      <div className="order-total">Total: ${order.total.toFixed(2)}</div>
                      <button
                        className="complete-btn"
                        onClick={() => handleCompleteOrder(order.id)}
                      >
                        Mark as Completed
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'history' && (
            <div className="order-history">
              {orderHistory.length === 0 ? (
                <div className="no-history">No order history</div>
              ) : (
                orderHistory.map(order => (
                  <div key={order.id} className="history-card">
                    <div className="history-header">
                      <span className="history-room">Room {order.roomNumber}</span>
                      <span className="history-date">
                        {formatDate(order.timestamp)} at {formatTime(order.timestamp)}
                      </span>
                      <span className={`history-status ${order.status}`}>
                        {order.status}
                      </span>
                    </div>

                    <div className="history-items">
                      {order.items.map((item, index) => (
                        <div key={index} className="history-item">
                          <span className="item-quantity">{item.quantity}x</span>
                          <span className="item-name">{item.name}</span>
                          {item.unit && <span className="item-unit">{item.unit}</span>}
                          <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="history-total">
                      Order Total: ${order.total.toFixed(2)}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default StaffDashboard;
