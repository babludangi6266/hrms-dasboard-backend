const express = require("express");
const { createEmployee ,getAllEmployees,updateEmployee, deleteEmployee, } = require("../controllers/employeeController");

const router = express.Router();

// Route to save a candidate as an employee
router.post("/", createEmployee);
// Get all employees
router.get("/", getAllEmployees);
// Update an employee's details
router.put("/:id", updateEmployee);

// Delete an employee
router.delete("/:id", deleteEmployee);

module.exports = router;
