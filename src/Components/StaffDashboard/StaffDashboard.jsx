import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StaffDashboard = ({ staffId }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`/api/orders/staff/${staffId}`);
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [staffId]);

  return (
    <div>
      <h1>Your Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <p>Order ID: {order._id}</p>
            <p>Room: {order.roomNumber}</p>
            <p>Service: {order.serviceType}</p>
            <p>Status: {order.status}</p>
            {/* Optionally, allow staff to mark order as completed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffDashboard;
