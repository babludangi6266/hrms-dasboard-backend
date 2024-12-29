const Candidate = require("../models/Candidate");

exports.getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ message: "Error fetching candidates" });
  }
};

exports.createCandidate = async (req, res) => {
  try {
    const { fullName, emailAddress, phoneNumber, department, experience, resumeUrl } = req.body;

    if (!fullName || !emailAddress || !phoneNumber || !department || !experience || !resumeUrl) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const candidate = await Candidate.create({
      fullName,
      emailAddress,
      phoneNumber,
      department,
      experience,
      resumeUrl,
    });

    res.status(201).json({ message: "Candidate added successfully", candidate });
  } catch (error) {
    console.error("Error creating candidate:", error);
    res.status(500).json({ message: "Server error" });
  }
};
// Update candidate status
exports.updateCandidateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: "Status is required." });
    }

    const candidate = await Candidate.findByIdAndUpdate(req.params.id, { status }, { new: true });

    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found." });
    }

    res.json({ message: "Status updated successfully", candidate });
  } catch (error) {
    console.error("Error updating candidate status:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a candidate
exports.deleteCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.findByIdAndDelete(req.params.id);

    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found." });
    }

    res.json({ message: "Candidate deleted successfully" });
  } catch (error) {
    console.error("Error deleting candidate:", error);
    res.status(500).json({ message: "Server error" });
  }
};