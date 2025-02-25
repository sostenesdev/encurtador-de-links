import React from 'react';
import { Navigate } from 'react-router-dom';
import authHelper from '../helpers/authHelper';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  return authHelper.isAuthenticated() ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;