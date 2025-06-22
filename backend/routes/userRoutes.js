// routes/userRoutes.js
// User management routes
const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  updateDutyStatus
} = require('../controllers/userController');

const { protect, authorize } = require('../middleware/auth');

// Admin routes - need both protection and authorization
router.get('/', protect, authorize('admin'), getAllUsers);
router.get('/:id', protect, authorize('admin'), getUserById);
router.put('/:id', protect, authorize('admin'), updateUser);
router.delete('/:id', protect, authorize('admin'), deleteUser);

// Staff can update their own duty status
router.patch('/duty-status/:id', protect, updateDutyStatus);

module.exports = router;