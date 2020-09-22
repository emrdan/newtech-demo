const { json, urlencoded } = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('../api');
const config = require('../config');

module.exports = (app) => {
  app.enable('trust proxy');
  app.disable('x-powered-by'); 
  app.use(cors()); // Enable Cross Origin Resource Sharing to all origins by default
  app.use(json()); // Middleware that transforms the raw string of req.body into json
  app.use(urlencoded({ extended: true })); //
  app.use(morgan('dev')); 
  app.use(config.api.prefix, routes()); // Load API routes

  app.use((req, res, next) => { /// catch 404 and forward to error handler
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message
      }
    });
  });
};
