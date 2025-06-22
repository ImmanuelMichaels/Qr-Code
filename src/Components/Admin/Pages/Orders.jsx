import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Add this for Axios
import '../../Styles/orders.css'

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [filters, setFilters] = useState({
    department: '',
    room: '',
    date: '',
  });

  useEffect(() => {
    // Fetch orders from backend API
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders');
        setOrders(response.data); // Set orders data
        setFilteredOrders(response.data); // Initialize filtered orders with all orders
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    
    fetchOrders();
  }, []);

  useEffect(() => {
    // Filter orders based on selected filters
    setFilteredOrders(orders.filter(order => {
      const matchesDepartment = filters.department ? order.department.includes(filters.department) : true;
      const matchesRoom = filters.room ? order.room.includes(filters.room) : true;
      const matchesDate = filters.date ? order.date === filters.date : true;
      return matchesDepartment && matchesRoom && matchesDate;
    }));
  }, [filters, orders]);

  const handleUpdateStatus = async (id, status) => {
    try {
      const response = await axios.put(`/api/orders/${id}`, { status });
      setOrders(prevOrders =>
        prevOrders.map(order => order.id === id ? { ...order, status: response.data.status } : order)
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const handleCancelOrder = async (id) => {
    try {
      await axios.delete(`/api/orders/${id}`);
      setOrders(prevOrders => prevOrders.filter(order => order.id !== id));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div className="orders-page">
      <h1>Orders Management</h1>
      
      <div className="filters">
        <label>Department:
          <input
            type="text"
            value={filters.department}
            onChange={e => setFilters({ ...filters, department: e.target.value })}
            placeholder="Filter by department"
          />
        </label>
        <label>Room:
          <input
            type="text"
            value={filters.room}
            onChange={e => setFilters({ ...filters, room: e.target.value })}
            placeholder="Filter by room"
          />
        </label>
        <label>Date:
          <input
            type="date"
            value={filters.date}
            onChange={e => setFilters({ ...filters, date: e.target.value })}
          />
        </label>
      </div>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Room</th>
            <th>Department</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <tr key={order._id}> {/* Use _id for MongoDB object ID */}
              <td>{order._id}</td> {/* Display MongoDB ID */}
              <td>{order.roomNumber}</td>
              <td>{order.department}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => handleUpdateStatus(order._id, 'Completed')}>Complete</button>
                <button onClick={() => handleCancelOrder(order._id)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
