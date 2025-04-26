import React, { useState, useEffect } from 'react';
import '../../Styles/orders.css'

// Sample order data (to be fetched from your backend)
const ordersData = [
  { id: 1, room: '101', department: 'Room Service', date: '2025-04-20', status: 'Pending' },
  { id: 2, room: '102', department: 'Housekeeping', date: '2025-04-19', status: 'Completed' },
  { id: 3, room: '103', department: 'Room Service', date: '2025-04-18', status: 'In Progress' },
  // Add more sample data here or fetch from API
];

const Orders = () => {
  const [orders, setOrders] = useState(ordersData);
  const [filteredOrders, setFilteredOrders] = useState(ordersData);
  const [filters, setFilters] = useState({
    department: '',
    room: '',
    date: '',
  });

  useEffect(() => {
    // Logic to fetch real orders data, for now using mock data
    setFilteredOrders(orders.filter(order => {
      const matchesDepartment = filters.department ? order.department.includes(filters.department) : true;
      const matchesRoom = filters.room ? order.room.includes(filters.room) : true;
      const matchesDate = filters.date ? order.date === filters.date : true;
      return matchesDepartment && matchesRoom && matchesDate;
    }));
  }, [filters, orders]);

  // Handle updates and cancellations
  const handleUpdateStatus = (id, status) => {
    setOrders(prevOrders =>
      prevOrders.map(order => order.id === id ? { ...order, status } : order)
    );
  };

  const handleCancelOrder = id => {
    setOrders(prevOrders => prevOrders.filter(order => order.id !== id));
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
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.room}</td>
              <td>{order.department}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => handleUpdateStatus(order.id, 'Completed')}>Complete</button>
                <button onClick={() => handleCancelOrder(order.id)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
