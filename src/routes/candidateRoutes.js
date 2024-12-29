const express = require("express");
const multer = require("multer");
const { getAllCandidates, createCandidate, updateCandidateStatus, deleteCandidate, } = require("../controllers/candidateController");

const router = express.Router();

// Configure multer for in-memory file storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to fetch all candidates
router.get("/", getAllCandidates);

// Route to add a new candidate with resume upload
router.post("/", upload.single("resume"), createCandidate);

// Route to update candidate status
router.put("/:id/status", updateCandidateStatus);

// Route to delete a candidate
router.delete("/:id", deleteCandidate)

module.exports = router;
