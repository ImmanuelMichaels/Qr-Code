const mongoose = require('mongoose');

const staffSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    dob: { type: String, required: true },
    address: { type: String, required: true },
    state: { type: String, required: true },
    role: { 
      type: String, 
      required: true, 
      enum: ['frontdesk', 'food', 'security', 'housekeeping', 'manager'],
      default: 'frontdesk'
    },
    isOnDuty: { type: Boolean, default: false }, // Keeping your original field
  },
  { timestamps: true }
);

const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;