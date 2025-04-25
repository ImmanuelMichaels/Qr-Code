import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import HotelQRLanding from './Components/Pages/HotelQRLanding';
import Signin from './Components/SignIn/Signin';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/hotel" element={<HotelQRLanding />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
