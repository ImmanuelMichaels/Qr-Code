const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    roomNumber: { type: String, required: true },
    serviceType: { type: String, required: true },
    details: { type: String, required: true },
    status: { type: String, default: 'Pending' },
    staffOnDuty: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' }, // Reference to the staff on duty
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
