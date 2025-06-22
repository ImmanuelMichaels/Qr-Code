import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FiHome, FiList, FiUsers, FiCalendar, FiClipboard, FiGrid, FiBell, FiUser } from 'react-icons/fi';
import '../Styles/layout.css';

const AdminLayout = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(prev => !prev);
    setIsNotificationsOpen(false);
  };
  const toggleNotifications = () => {
    setIsNotificationsOpen(prev => !prev);
    setIsProfileOpen(false);
  };
  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  const toggleSidebar = () => setIsCollapsed(prev => !prev);

  return (
    <div className={`admin-layout ${isDarkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="logo">{isCollapsed ? 'HA' : 'Hotel Admin'}</div>
        <nav className="nav-links">
          <NavLink to="overview" className={({ isActive }) => isActive ? 'active' : ''}>
            <FiHome /> {!isCollapsed && <span>Overview</span>}
          </NavLink>
          <NavLink to="orders" className={({ isActive }) => isActive ? 'active' : ''}>
            <FiList /> {!isCollapsed && <span>Orders</span>}
          </NavLink>
          <NavLink to="staffs" className={({ isActive }) => isActive ? 'active' : ''}>
            <FiUsers /> {!isCollapsed && <span>Staffs</span>}
          </NavLink>
          <NavLink to="staff-salaries" className={({ isActive }) => isActive ? 'active' : ''}>
            <FiClipboard /> {!isCollapsed && <span>Staff Salaries</span>}
          </NavLink>
          <NavLink to="staff-shifts" className={({ isActive }) => isActive ? 'active' : ''}>
            <FiCalendar /> {!isCollapsed && <span>Staff Shifts</span>}
          </NavLink>
          <NavLink to="room-activity" className={({ isActive }) => isActive ? 'active' : ''}>
            <FiGrid /> {!isCollapsed && <span>Room Activity</span>}
          </NavLink>
          <NavLink to="dashboard-orders" className={({ isActive }) => isActive ? 'active' : ''}>
            <FiGrid /> {!isCollapsed && <span>Dashboard Order</span>}
          </NavLink>
        </nav>

        <button onClick={toggleSidebar} className="collapse-btn">
          {isCollapsed ? '➔' : '⬅'}
        </button>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="admin-header">
          <h1>Dashboard</h1>
          <div className="header-controls">
            <button onClick={toggleNotifications} className="menu-btn">
              <FiBell />
            </button>
            <button onClick={toggleDarkMode} className="menu-btn dark-btn">
              {isDarkMode ? 'Light' : 'Dark'} Mode
            </button>
            <button onClick={toggleProfile} className="menu-btn">
              <FiUser />
            </button>
          </div>
        </header>

        {/* Dropdowns */}
        {isNotificationsOpen && (
          <div className="dropdown notifications-dropdown">
            <h4>Notifications</h4>
            <ul>
              <li>New order received!</li>
              <li>Staff shift updated.</li>
              <li>Room 101 needs cleaning.</li>
            </ul>
          </div>
        )}

        {isProfileOpen && (
          <div className="dropdown profile-drawer">
            <h4>Profile Settings</h4>
            <ul>
              <li>Account Info</li>
              <li>Settings</li>
              <li>Log Out</li>
            </ul>
          </div>
        )}

        {/* Main Content Section */}
        <section className="admin-body">
          <Outlet />
        </section>
      </div>
      
    </div>
  );
};

export default AdminLayout;
