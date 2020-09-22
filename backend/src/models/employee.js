const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    jobTitle: {
      type: String,
      required: true
    },
    contactInfo: {
      email: {
        type: String,
        required: true
      },
      phoneNumber: String
    }
  },
  { timestamps: true },
);

module.exports = {
  model: mongoose.model('Employee', employeeSchema)
}