import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import HotelQRLanding from './Components/Pages/HotelQRLanding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/hotel" element={<HotelQRLanding />} />
      </Routes>
    </Router>
  );
}

export default App;
