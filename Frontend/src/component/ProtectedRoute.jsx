import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if the pass card (token) exists in the browser's memory
  const token = localStorage.getItem('adminToken');

  if (!token) {
    // No token? Send them back to the login page immediately
    return <Navigate to="/admin" replace />;
  }

  // Token exists? Let them see the protected page
  return children;
};

export default ProtectedRoute;