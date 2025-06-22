// utils/axiosConfig.js
import axios from 'axios';

// Base URL
axios.defaults.baseURL = 'http://localhost:5000'; // Change to your backend URL

// Request interceptor for API calls
axios.interceptors.request.use(
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

// Response interceptor for API calls
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Logout on 401 Unauthorized
    if (error.response.status === 401 && !originalRequest._retry) {
      localStorage.removeItem('userInfo');
      localStorage.removeItem('token');
      sessionStorage.removeItem('userInfo');
      window.location.href = '/signin';
    }

    return Promise.reject(error);
  }
);

export default axios;