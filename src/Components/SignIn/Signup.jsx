import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    dob: '',
    address: '',
    state: '',
    acceptTerms: false,
    role: 'staff', // Default role changed to 'staff'
    department: 'frontdesk', // Added department field
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [apiError, setApiError] = useState(null);
  
  const [departmentOptions, setDepartmentOptions] = useState([
    { value: 'frontdesk', label: 'Front Desk' },
    { value: 'food', label: 'Food Service' },
    { value: 'security', label: 'Security' },
    { value: 'housekeeping', label: 'Housekeeping' },
  ]);

  // Dynamically update department options if needed
  useEffect(() => {
    // Example condition to add a new department option
    const newDepartmentOptions = [...departmentOptions];
    if (formData.state === 'California') {
      newDepartmentOptions.push({ value: 'management', label: 'Management' });
    }
    setDepartmentOptions(newDepartmentOptions);
  }, [formData.state]); // Re-run when the state changes

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.address) newErrors.address = 'Home address is required';
    if (!formData.state) newErrors.state = 'State of residence is required';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms';
    if (!formData.department) newErrors.department = 'Department is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage(null);
    setApiError(null);

    if (validate()) {
      setIsSubmitting(true);

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        // Remove confirmPassword and acceptTerms before sending to API
        const { confirmPassword, acceptTerms, ...dataToSend } = formData;

        // Format data as required by backend
        const formattedData = {
          ...dataToSend,
          name: `${dataToSend.firstName} ${dataToSend.lastName}`, // Combine first and last name
          // Keep role as 'staff' but include department
        };

        const response = await axios.post(
          'http://localhost:5000/api/users/register', 
          formattedData,
          config
        );

        console.log('Registration successful:', response.data);
        setSuccessMessage('Registration successful! Please log in.');
        
        // Clear form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          phoneNumber: '',
          dob: '',
          address: '',
          state: '',
          acceptTerms: false,
          role: 'staff',
          department: 'frontdesk',
        });
        
        // Redirect to login after a delay
        setTimeout(() => {
          navigate('/signin');
        }, 2000);
        
      } catch (error) {
        console.error('Registration error:', error);
        setApiError(
          error.response && error.response.data.message
            ? error.response.data.message
            : 'Registration failed. Please try again.'
        );
      }

      setIsSubmitting(false);
    }
  };

  return (

    <section className="auth-container" id="auth-con">
      <div className="signup-container">
        <h1>Create Staff Account</h1>
        <p className="subtitle">Fill in your details to register</p>

        {successMessage && <div className="success-message">{successMessage}</div>}
        {apiError && <div className="error-message api-error">{apiError}</div>}

        <form onSubmit={handleSubmit} noValidate>
          {/* First Name */}
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? 'error' : ''}
            />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
          </div>

          {/* Last Name */}
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? 'error' : ''}
            />
            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={errors.phoneNumber ? 'error' : ''}
            />
            {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
          </div>

          {/* Date of Birth */}
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className={errors.dob ? 'error' : ''}
            />
            {errors.dob && <span className="error-message">{errors.dob}</span>}
          </div>

          {/* Address */}
          <div className="form-group">
            <label htmlFor="address">Home Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? 'error' : ''}
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>

          {/* State */}
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={errors.state ? 'error' : ''}
            />
            {errors.state && <span className="error-message">{errors.state}</span>}
          </div>

          {/* Department Selection */}
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={errors.department ? 'error' : ''}
            >
              {departmentOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.department && <span className="error-message">{errors.department}</span>}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? 'error' : ''}
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>

          {/* Terms and Conditions */}
          <div className="form-options">
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
            />
            <label htmlFor="acceptTerms">
              I agree to the <a href="/terms">terms and conditions</a>
            </label>
            {errors.acceptTerms && <span className="error-message">{errors.acceptTerms}</span>}
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <div className="signin-link">
          Already have an account? <a href="/signin">Sign in</a>
        </div>
      </div>
    </section>
  );
};

export default Signup;