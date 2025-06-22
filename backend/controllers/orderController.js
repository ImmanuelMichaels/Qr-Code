const asyncHandler = require('express-async-handler');
const Order = require('../../../../backend/models/Order');
const Staff = require('../../../../backend/models/Staff');

// @desc    Create a new order and assign it to a staff member
// @route   POST /api/orders
// @access  Public
const createOrder = asyncHandler(async (req, res) => {
  const { customerName, customerEmail, roomNumber, serviceType, details } = req.body;

  if (!customerName || !customerEmail || !roomNumber || !serviceType || !details) {
    res.status(400);
    throw new Error('Please provide all required fields');
  }

  // Get staff member on duty
  const staffOnDuty = await Staff.findOne({ isOnDuty: true });

  if (!staffOnDuty) {
    res.status(400);
    throw new Error('No staff members available on duty');
  }

  const order = new Order({
    customerName,
    customerEmail,
    roomNumber,
    serviceType,
    details,
    staffOnDuty: staffOnDuty._id, // Assign the staff member on duty
  });

  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
});

// @desc    Get all orders assigned to a specific staff member
// @route   GET /api/orders/staff/:staffId
// @access  Public
const getOrdersForStaff = asyncHandler(async (req, res) => {
  const orders = await Order.find({ staffOnDuty: req.params.staffId });

  if (orders.length === 0) {
    res.status(404);
    throw new Error('No orders found for this staff member');
  }

  res.json(orders);
});

module.exports = {
  createOrder,
  getOrdersForStaff,
};
