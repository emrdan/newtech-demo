const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");
const { celebrate, Joi, Segments } = require("celebrate");

module.exports = function (app) {
  app.use("/departments", router);

  router.get("/", controllers.getDepartments);
  router.post("/", controllers.createDepartment);
  router.put("/", controllers.updateDepartment);
  router.delete("/", controllers.deleteDepartment);
};
