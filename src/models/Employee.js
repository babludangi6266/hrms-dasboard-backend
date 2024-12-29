const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  emailAddress: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  department: { type: String, required: true },
  role: { type: String,  },
  dateOfJoining: { type: Date, }, 
  experience: { type: String, required: false }, 
});

module.exports = mongoose.model("Employee", employeeSchema);
