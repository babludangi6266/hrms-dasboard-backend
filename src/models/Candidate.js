const mongoose = require("mongoose");
const candidateSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  emailAddress: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  department: { type: String, required: true },
  experience: { type: String, required: true },
  status: { type: String, default: "New" },
  resumeUrl: { type: String, required: true }, // URL to the file in Supabase Storage
});

module.exports = mongoose.model("Candidate", candidateSchema);
