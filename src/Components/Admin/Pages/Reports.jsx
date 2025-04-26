import React, { useState, useEffect, useRef } from 'react';
import { CSVLink } from 'react-csv';
import { useReactToPrint } from 'react-to-print';
import '../../Styles/reports.css';

const Reports = () => {
  const [orders, setOrders] = useState([]);
  const componentRef = useRef();

  useEffect(() => {
    fetch('/api/orders') // Replace with your API
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error('Error fetching orders:', err));
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Order Summary',
  });

  const csvHeaders = [
    { label: 'Order ID', key: 'id' },
    { label: 'Room Number', key: 'roomNumber' },
    { label: 'Department', key: 'department' },
    { label: 'Item', key: 'item' },
    { label: 'Status', key: 'status' },
    { label: 'Date', key: 'date' },
  ];

  return (
    <div className="reports-page">
      <h2>Reports & History</h2>

      <div className="report-buttons">
        <CSVLink
          data={orders}
          headers={csvHeaders}
          filename="orders_report.csv"
          className="btn export-btn"
        >
          Export as CSV
        </CSVLink>

        <button onClick={handlePrint} className="btn print-btn">
          Print Orders
        </button>
      </div>

      <div ref={componentRef} className="print-section">
        <h3>Order Summary</h3>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Room</th>
              <th>Department</th>
              <th>Item</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.roomNumber}</td>
                <td>{order.department}</td>
                <td>{order.item}</td>
                <td>{order.status}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
