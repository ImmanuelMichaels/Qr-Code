import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import HotelQRLanding from './Components/QRpage/HotelQRLanding';
import Signin from './Components/SignIn/Signin';
import Signup from './Components/SignIn/Signup';
import StaffDashboard from './Components/StaffDashboard/StaffDashboard';
import AdminLayout from './Components/Admin/AdminLayout';
import { Overview, Orders, Staff, StaffSalaries, StaffShifts } from './Components/Admin/Pages';
import ProtectedRoute from './Components/ProtectedRoute';
import Unauthorized from './Components/Unauthorized';
import Footer from './Components/Footer/Footer';
import './App.css';
import './Utils/axiosConfig'; // Import axios config

function App() {
  return (
    <Router>
      < Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Hero />} />
        <Route path="/qr-hotel/:hotelId" element={<HotelQRLanding />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        
        {/* Protected Staff Routes */}
        <Route element={<ProtectedRoute allowedRoles={['staff', 'admin']} />}>
          <Route path="/staff-dashboard" element={<StaffDashboard />} />
        </Route>
        
        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="orders" element={<Orders />} />
            <Route path="staff" element={<Staff />} />
            <Route path="staff/salaries" element={<StaffSalaries />} />
            <Route path="staff/shifts" element={<StaffShifts />} />
            {/* Catch-all route for unmatched admin routes */}
            <Route path="*" element={<div>Admin Page Not Found</div>} />
          </Route>
        </Route>
        
        {/* Catch-all route for non-existent pages */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
      < Footer />
    </Router>
  );
}

export default App;