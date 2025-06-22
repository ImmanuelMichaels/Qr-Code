const express = require('express');
const router = express.Router();
const { createOrder, getOrdersForStaff } = require('../controllers/orderController');

// Route to create a new order
router.post('/', createOrder);

// Route to get orders assigned to a specific staff member
router.get('/staff/:staffId', getOrdersForStaff);

module.exports = router;
