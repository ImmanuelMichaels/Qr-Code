import React, { useRef, useState, useEffect } from 'react';
import './Signin.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState(null);

  // Simulated users database with roles
  const usersDB = [
    { email: 'foodstaff@example.com', password: 'food123', role: 'food' },
    { email: 'security@example.com', password: 'secure123', role: 'security' },
    { email: 'admin@example.com', password: 'admin123', role: 'admin' },
  ];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthError(null);

    if (validate()) {
      setIsSubmitting(true);

      setTimeout(() => {
        const matchedUser = usersDB.find(
          (user) =>
            user.email === formData.email &&
            user.password === formData.password
        );

        if (matchedUser) {
          console.log('Login successful:', matchedUser);

          // Save to localStorage
          localStorage.setItem('userRole', matchedUser.role);
          localStorage.setItem('userEmail', matchedUser.email);

          // Redirect based on role
          window.location.href = `/staff/${matchedUser.role}`;
        } else {
          setAuthError('Invalid email or password');
        }

        setIsSubmitting(false);
      }, 1000);
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
      <div className='logo'><img src="/logo.png" alt="Logo" /></div>
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
