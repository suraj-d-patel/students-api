const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  class: { type: Number, required: true },
  mobile_no: { type: Number, required: true },
  roll_no: { type: Number, required: true },
  subjects: {type:[String]}
});

module.exports = mongoose.model("Student", studentSchema);
