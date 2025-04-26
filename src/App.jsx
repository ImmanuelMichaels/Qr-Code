import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import HotelQRLanding from './Components/QRpage/HotelQRLanding';
import Signin from './Components/SignIn/Signin';
import Signup from './Components/SignIn/Signup';
import StaffDashboard from './Components/StaffDashboard/StaffDashboard';
import AdminLayout from './Components/Admin/AdminLayout';
import {
  Overview,
  Orders,
  Staffs,
  StaffSalaries,
  StaffShifts,
  RoomActivity,
  Reports, // 📌 Don't forget Reports if you have it
} from './Components/Admin/Pages';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Hero />} />
        <Route path="/hotel" element={<HotelQRLanding />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/staff/:department" element={<StaffDashboard />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="overview" replace />} /> {/* Default redirect */}
          <Route path="overview" element={<Overview />} />
          <Route path="orders" element={<Orders />} />
          <Route path="staffs" element={<Staffs />} />
          <Route path="staff-salaries" element={<StaffSalaries />} />
          <Route path="staff-shifts" element={<StaffShifts />} />
          <Route path="room-activity" element={<RoomActivity />} />
          <Route path="reports" element={<Reports />} /> {/* Add this if you're working on Reports page */}
          <Route path="*" element={<div>Admin Page Not Found</div>} />
        </Route>

        {/* Catch-all route for non-existent pages */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
