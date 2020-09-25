const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");
const { celebrate, Joi, Segments } = require("celebrate");

module.exports = function (app) {
  app.use("/employees", router);

  router.get("/", controllers.getEmployees);
  router.post("/", controllers.createEmployee);
  router.put("/", controllers.updateEmployee);
  router.delete("/", controllers.deleteEmployee);
};
