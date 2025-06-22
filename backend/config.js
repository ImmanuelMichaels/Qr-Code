// config.js
// Configuration file to handle environment variables
const dotenv = require('dotenv');

// Load environment variables from .env file in development
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

module.exports = {
  // Server configuration
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5000,
  
  // MongoDB configuration
  MONGO_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/hotel_staff_management',
  
  // JWT configuration
  JWT_SECRET: process.env.JWT_SECRET || 'MyS3cur3_JWT_S3cr3t_K3y_123456789!',
  JWT_EXPIRE: process.env.JWT_EXPIRE || '24h'
};