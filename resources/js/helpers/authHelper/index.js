import React from 'react';

const getToken = () => {
    return localStorage.getItem('token');
}

const setToken = (token) => {
    localStorage.setItem('token', token);
}

const removeToken = () => {
    localStorage.removeItem('token');
}

const isAuthenticated = () => {
    return getToken() !== null;
}   
const authHelper = {
        getToken,
        setToken,
        removeToken,
        isAuthenticated
  }

export default authHelper;