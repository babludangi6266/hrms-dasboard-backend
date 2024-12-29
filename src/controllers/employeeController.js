const Employee = require("../models/Employee");

exports.createEmployee = async (req, res) => {
  try {
    const { fullName, emailAddress, phoneNumber, department, experience } = req.body;

    const employee = await Employee.create({
      fullName,
      emailAddress,
      phoneNumber,
      department,
      experience,
    });

    res.status(201).json({ message: "Employee saved successfully", employee });
  } catch (error) {
    res.status(500).json({ message: "Error saving employee", error: error.message });
  }
};

exports.getAllEmployees = async (req, res) => {
    try {
      const employees = await Employee.find();
      res.json(employees);
    } catch (error) {
      res.status(500).json({ message: "Error fetching employees" });
    }
  };

  exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      req.body,
      { new: true } // Ensures the updated employee object is returned
    );
    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: "Error updating employee details" });
  }
};
  // Delete an employee
  exports.deleteEmployee = async (req, res) => {
    try {
      const { id } = req.params;
  
      const employee = await Employee.findByIdAndDelete(id);
  
      if (!employee) {
        return res.status(404).json({ message: "Employee not found." });
      }
  
      res.json({ message: "Employee deleted successfully" });
    } catch (error) {
      console.error("Error deleting employee:", error);
      res.status(500).json({ message: "Server error" });
    }
  };