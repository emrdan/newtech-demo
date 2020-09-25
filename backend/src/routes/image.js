const controllers = require("../controllers");
const { celebrate, Joi, Segments } = require("celebrate");

module.exports = function (app) {
  app.get("/randomImage", controllers.getRandomImg);
};
