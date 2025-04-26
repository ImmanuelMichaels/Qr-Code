import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FiHome, FiList, FiUsers, FiCalendar, FiClipboard, FiGrid } from 'react-icons/fi';
import '../Styles/layout.css'; // We'll polish the CSS too!

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">🏨 Hotel Admin</div>

        <nav className="nav-links">
          <NavLink to="overview" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <FiHome className="nav-icon" />
            <span>Overview</span>
          </NavLink>

          <NavLink to="orders" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <FiList className="nav-icon" />
            <span>Orders</span>
          </NavLink>

          <NavLink to="staffs" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <FiUsers className="nav-icon" />
            <span>Staffs</span>
          </NavLink>

          <NavLink to="staff-salaries" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <FiClipboard className="nav-icon" />
            <span>Staff Salaries</span>
          </NavLink>

          <NavLink to="staff-shifts" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <FiCalendar className="nav-icon" />
            <span>Staff Shifts</span>
          </NavLink>

          <NavLink to="room-activity" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <FiGrid className="nav-icon" />
            <span>Room Activity</span>
          </NavLink>

          <NavLink to="reports" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <FiClipboard className="nav-icon" />
            <span>Reports</span>
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="admin-header">
          <h1>Admin Dashboard</h1>
          {/* You can add a Logout button, Profile picture, etc here later */}
        </header>

        <main className="admin-body">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
