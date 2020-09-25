const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const departmentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    membersCount: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Department", departmentSchema);
