import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin Dashboard</h2>
      <nav className="sidebar-nav">
        <Link to="/admin/overview">Overview</Link>
        <Link to="/admin/orders">Orders</Link>
        <Link to="/admin/staffs">Staff</Link>
        <Link to="/admin/staff-salaries">Staff Salaries</Link>
        <Link to="/admin/staff-shifts">Staff Shifts</Link>
      </nav>
    </div>
  );
}

export default Sidebar;