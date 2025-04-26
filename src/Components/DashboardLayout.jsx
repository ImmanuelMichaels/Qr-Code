import React from 'react';
import Sidebar from '..Components/Sidebar';
import Navbar from '../Components/Navbar';
import '../styles/layout.css';

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
