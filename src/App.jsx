import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import HotelQRLanding from './Components/Pages/HotelQRLanding';
import Signin from './Components/SignIn/Signin';
import Signup from './Components/SignIn/Signup';
import StaffDashboard from './Components/StaffDashboard/StaffDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/hotel" element={<HotelQRLanding />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Dynamic route for any department */}
        <Route path="/staff/:department" element={<StaffDashboard />} />
        
        {/* 404 Page */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
