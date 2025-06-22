// models/User.js
// User model schema
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ['staff', 'admin'],
      default: 'staff',
    },
    department: {
      type: String,
      required: function() {
        return this.role === 'staff';
      },
      enum: ['frontdesk', 'food', 'security', 'housekeeping', 'management'],
    },
    isOnDuty: { 
      type: Boolean, 
      default: false 
    },
  },
  {
    timestamps: true,
  }
);

// Method to check if entered password matches hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

module.exports = User;