const Attendance = require('../models/Attendance');

// Add or update attendance for an employee
const upsertAttendance = async (req, res) => {
  try {
    const { employeeId, status, task } = req.body;

    // Find and update if it exists, otherwise create a new record
    const attendance = await Attendance.findOneAndUpdate(
      { employeeId },
      { status, task },
      { new: true, upsert: true }
    );

    res.status(200).json(attendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get attendance data by filters
const getAttendance = async (req, res) => {
  try {
    const { employeeId } = req.query;

    const filters = {};
    if (employeeId) filters.employeeId = employeeId;

    const attendanceRecords = await Attendance.find(filters).populate('employeeId');
    res.status(200).json(attendanceRecords);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateAttendanceByEmployeeId = async (req, res) => {
    try {
      const { employeeId } = req.params; // Extract employeeId from route parameter
      const { status, task } = req.body; // Extract fields to update
  
      // Find and update the attendance record using employeeId, create if not exists
      const updatedAttendance = await Attendance.findOneAndUpdate(
        { employeeId }, // Match based on employeeId
        { status, task }, // Fields to update
        { new: true, upsert: true } // Return the updated document; create if not exists
      );
  
      res.status(200).json(updatedAttendance);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

module.exports = {
  upsertAttendance,
  getAttendance,
  updateAttendanceByEmployeeId,
};
