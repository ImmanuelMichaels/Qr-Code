// services/api.js
import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
  baseURL: 'http://localhost:5000',
});

// Add a request interceptor to include auth token in all requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear storage and redirect to login on auth error
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
      sessionStorage.removeItem('userInfo');
      window.location.href = '/signin';
    }
    return Promise.reject(error);
  }
);

export default api;