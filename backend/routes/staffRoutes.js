const express = require('express');
const router = express.Router();
const Staff = require('../models/Staff');

// Route to log in a staff member (mark as on duty)
router.put('/on-duty/:staffId', async (req, res) => {
  const staff = await Staff.findById(req.params.staffId);

  if (staff) {
    staff.isOnDuty = true;
    await staff.save();
    res.json({ message: `${staff.name} is now on duty` });
  } else {
    res.status(404).json({ message: 'Staff member not found' });
  }
});

// Route to log out a staff member (mark as off duty)
router.put('/off-duty/:staffId', async (req, res) => {
  const staff = await Staff.findById(req.params.staffId);

  if (staff) {
    staff.isOnDuty = false;
    await staff.save();
    res.json({ message: `${staff.name} is now off duty` });
  } else {
    res.status(404).json({ message: 'Staff member not found' });
  }
});

module.exports = router;
