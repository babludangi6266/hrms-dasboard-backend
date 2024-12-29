const express = require('express');
const { upsertAttendance, getAttendance,updateAttendanceByEmployeeId   } = require('../controllers/attendanceController');

const router = express.Router();

// Route to upsert attendance
router.post('/', upsertAttendance);

// Route to get attendance
router.get('/', getAttendance);

router.put('/:employeeId', updateAttendanceByEmployeeId);
module.exports = router;
