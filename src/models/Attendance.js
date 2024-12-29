const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  status: { type: String, enum: ['Present', 'Absent', 'On Leave'], required: true },
  task: { type: String, required: false },
});

module.exports = mongoose.model('Attendance', attendanceSchema);
