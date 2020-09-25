const { Router } = require("express");
const Image = require("./image");
const Employee = require("./employee");
const Department = require("./department");

module.exports = function () {
  const app = Router();
  Image(app);
  Employee(app);
  Department(app);
  return app;
};
