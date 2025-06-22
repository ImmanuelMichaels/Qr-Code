// components/ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles = [] }) => {
  // Check if user is logged in
  const userInfoFromStorage = localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo'))
    : sessionStorage.getItem('userInfo')
    ? JSON.parse(sessionStorage.getItem('userInfo'))
    : null;

  // If not logged in, redirect to login
  if (!userInfoFromStorage) {
    return <Navigate to="/signin" replace />;
  }

  // If role restrictions and user doesn't have allowed role
  if (allowedRoles.length > 0 && !allowedRoles.includes(userInfoFromStorage.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // If logged in and has correct role, show outlet (child routes)
  return <Outlet />;
};

export default ProtectedRoute;