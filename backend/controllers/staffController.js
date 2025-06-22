const asyncHandler = require('express-async-handler');
const Staff = require('../models/Staff');

// @desc    Get all staff members
// @route   GET /api/staffs
// @access  Public
const getStaffs = asyncHandler(async (req, res) => {
  const staffs = await Staff.find({});
  res.json(staffs);
});

// @desc    Get staff member by ID
// @route   GET /api/staffs/:id
// @access  Public
const getStaffById = asyncHandler(async (req, res) => {
  const staff = await Staff.findById(req.params.id);

  if (staff) {
    res.json(staff);
  } else {
    res.status(404);
    throw new Error('Staff not found');
  }
});

// @desc    Create a staff member
// @route   POST /api/staffs
// @access  Public (can be made protected)
const createStaff = asyncHandler(async (req, res) => {
  const { name, email, phone, department, position, salary } = req.body;

  const staffExists = await Staff.findOne({ email });

  if (staffExists) {
    res.status(400);
    throw new Error('Staff already exists');
  }

  const staff = await Staff.create({
    name,
    email,
    phone,
    department,
    position,
    salary,
  });

  if (staff) {
    res.status(201).json(staff);
  } else {
    res.status(400);
    throw new Error('Invalid staff data');
  }
});

// @desc    Update staff member
// @route   PUT /api/staffs/:id
// @access  Public
const updateStaff = asyncHandler(async (req, res) => {
  const staff = await Staff.findById(req.params.id);

  if (staff) {
    staff.name = req.body.name || staff.name;
    staff.email = req.body.email || staff.email;
    staff.phone = req.body.phone || staff.phone;
    staff.department = req.body.department || staff.department;
    staff.position = req.body.position || staff.position;
    staff.salary = req.body.salary || staff.salary;
    staff.isActive = req.body.isActive !== undefined ? req.body.isActive : staff.isActive;

    const updatedStaff = await staff.save();
    res.json(updatedStaff);
  } else {
    res.status(404);
    throw new Error('Staff not found');
  }
});

// @desc    Delete staff member
// @route   DELETE /api/staffs/:id
// @access  Public
const deleteStaff = asyncHandler(async (req, res) => {
  const staff = await Staff.findById(req.params.id);

  if (staff) {
    await staff.remove();
    res.json({ message: 'Staff removed' });
  } else {
    res.status(404);
    throw new Error('Staff not found');
  }
});

// @desc    Get staff members by department
// @route   GET /api/staffs/department/:department
// @access  Public
const getStaffsByDepartment = asyncHandler(async (req, res) => {
  const staffs = await Staff.find({ department: req.params.department });
  res.json(staffs);
});

module.exports = {
  getStaffs,
  getStaffById,
  createStaff,
  updateStaff,
  deleteStaff,
  getStaffsByDepartment,
};
