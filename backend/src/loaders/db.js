const mongoose = require('mongoose');
const { databaseURL } = require('../config');

module.exports = async () => {
  const conn = await mongoose.connect(databaseURL, { 
    useNewUrlParser: true, 
    useCreateIndex: true 
  });
  return conn.connection.db;
};