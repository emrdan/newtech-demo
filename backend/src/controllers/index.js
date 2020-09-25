const mongoose = require("mongoose");
const Image = require("../models/images");
const Department = require("../models/department");
const Employee = require("../models/employee");

function getRandomArbitrary(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

async function getRandomImg(req, res) {
  const count = Image.estimatedDocumentCount();
  const skipRecords = getRandomArbitrary(1, count);
  await Image.findOne()
    .skip(skipRecords)
    .exec((err, item) => {
      if (err) {
        return res.status(401).json({ message: "Error" });
      }
      return res.status(200).json(item);
    });
}

async function getEmployees(req, res) {
  await Employee.find({}, function (err, item) {
    if (err) {
      return res.status(401).json({ message: "Error Finding Employees." });
    }
    return res.status(200).json(item);
  });
}

async function createEmployee(req, res) {
  const newEmployee = new Employee(req.body);
  await newEmployee.save(function (err, item) {
    if (err) {
      return res.status(401).json({ message: "Error Creating Employee." });
    }
    return res.status(200).json(item);
  });
}

async function updateEmployee(req, res) {
  await Employee.findOneAndUpdate({ _id: req.params.requestID }, req.body, { new: true }, function (err, item) {
    if (err) {
      return res.status(401).json({ message: "Error Updating Employee." });
    }
    return res.status(200).json(item);
  });
}

async function deleteEmployee(req, res) {
  await Employee.deleteOne({ _id: req.params.requestID }, function (err, task) {
    if (err) {
      return res.status(401).json({ message: "Error Deleting Employee." });
    }
    return res.status(200).json({ message: "Employee Deleted Successfully." });
  });
}

async function getDepartments(req, res) {
  await Department.find({}, function (err, item) {
    if (err) {
      return res.status(401).json({ message: "Error Finding Departments." });
    }
    return res.status(200).json(item);
  });
}

async function createDepartment(req, res) {
  const newDepartment = new Department(req.body);
  await newDepartment.save(function (err, item) {
    if (err) {
      return res.status(401).json({ message: "Error Creating Department." });
    }
    return res.status(200).json(item);
  });
}

async function updateDepartment(req, res) {
  await Department.findOneAndUpdate({ _id: req.params.requestID }, req.body, { new: true }, function (err, item) {
    if (err) {
      return res.status(401).json({ message: "Error Updating Department." });
    }
    return res.status(200).json(item);
  });
}

async function deleteDepartment(req, res) {
  await Department.deleteOne({ _id: req.params.requestID }, function (err, task) {
    if (err) {
      return res.status(401).json({ message: "Error Deleting Department." });
    }
    return res.status(200).json({ message: "Department Deleted Successfully." });
  });
}

module.exports = {
  getRandomImg,
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getDepartments,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
