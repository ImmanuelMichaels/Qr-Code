import React, { useState, useEffect, useRef } from 'react';
import '../../Styles/overview.css';

function Overview() {
  return (
    <div className="overview-page">
      <h2 className="page-title">Overview</h2>

      <div className="cards-container">
        <div className="card">
          <h3>Total Orders Today</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h3>Staff on Duty</h3>
          <p>15</p>
        </div>

        <div className="card">
          <h3>Pending Orders</h3>
          <p>5</p>
        </div>

        <div className="card">
          <h3>Completed Orders</h3>
          <p>110</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
