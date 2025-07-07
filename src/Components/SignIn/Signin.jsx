import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Signin.css';

const Signin = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const userInfo = localStorage.getItem('userInfo') || sessionStorage.getItem('userInfo');
    if (userInfo) {
      const user = JSON.parse(userInfo);
      navigate(`/staff/${user.role}`);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthError(null);

    if (validate()) {
      setIsSubmitting(true);

      try {
        const { data } = await api.post(
          '/api/auth/login',
          { email: formData.email, password: formData.password }
        );

        if (formData.rememberMe) {
          localStorage.setItem('userInfo', JSON.stringify(data));
        } else {
          sessionStorage.setItem('userInfo', JSON.stringify(data));
        }

        localStorage.setItem('token', data.token);
        
        navigate(`/staff/${data.role}`);
      } catch (error) {
        setAuthError(
          error.response && error.response.data.message
            ? error.response.data.message
            : 'Invalid email or password'
        );
      }

      setIsSubmitting(false);
    }
  };

  const images = ['/x.jpg', '/y.jpg', '/u.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='form-container' id='f-container'>
      <div className="form-content">

        <div className="f-images">
          <div className="fade-slider">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`slide-${index}`}
                className={`fade-image ${index === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>

        <div className="form-content">
          <div className="signin-container">
            <h1>Welcome Back</h1>
            <p className="subtitle">Sign in to your account</p>

            {authError && <div className="auth-error">{authError}</div>}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  autoComplete="username"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'error' : ''}
                  autoComplete="current-password"
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <div className="form-options">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <a href="/forgot-password" className="forgot-password">Forgot password?</a>
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Signing In...' : 'Sign In'}
              </button>
            </form>

            <div className="signup-link">
              Don't have an account? <a href="/signup">Sign up</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signin;