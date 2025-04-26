import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '/Users/Michael/Desktop/QR-project/firebase'; // ✅ Correct import (keep just this one)
import { collection, doc, updateDoc, onSnapshot, query, where } from 'firebase/firestore';
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
    const relevantItems = getRelevantItems();
  
    // Firestore query for current orders (status: 'pending')
    const currentOrdersQuery = query(
      collection(db, 'orders'),
      where('status', '==', 'pending')
    );
  
    // Firestore query for order history (status: 'completed')
    const historyOrdersQuery = query(
      collection(db, 'orders'),
      where('status', '==', 'completed')
    );
  
    const unsubscribeCurrent = onSnapshot(currentOrdersQuery, (snapshot) => {
      const current = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(order =>
          order.items.some(item => relevantItems.includes(item.name))
        );
  
      setOrders(current);
      setIsLoading(false);
    });
  
    const unsubscribeHistory = onSnapshot(historyOrdersQuery, (snapshot) => {
      const history = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(order =>
          order.items.some(item => relevantItems.includes(item.name))
        );
  
      setOrderHistory(history);
      const total = history.reduce((sum, order) => sum + order.total, 0);
      setTotalSales(total);
    });
  
    return () => {
      unsubscribeCurrent();
      unsubscribeHistory();
    };
  }, [department]);
  

  const handleCompleteOrder = async (orderId) => {
    try {
      const orderRef = doc(db, 'orders', orderId);
      await updateDoc(orderRef, {
        status: 'completed',
        completedAt: new Date() // optional: timestamp for history sorting
      });
    } catch (error) {
      console.error('Error completing order:', error);
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
