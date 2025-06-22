// Components/Unauthorized.js
import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="unauthorized-container">
      <h1>Access Denied</h1>
      <p>You do not have permission to access this page.</p>
      <p>
        <Link to="/">Return to Home</Link>
      </p>
    </div>
  );
};

export default Unauthorized;