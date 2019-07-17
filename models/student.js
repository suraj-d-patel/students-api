const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50},
  age: { type: Number, required: true , min:1,max: 50},
  class: { type: Number, required: true ,min:1,max: 12},
  mobile_no: { type: Number, required: true, validate: /^$|^\d{10}$/ },
  roll_no: { type: Number, required: true, min:1, max: 1000},
  subjects: {type: [String]}
});

module.exports = mongoose.model("Student", studentSchema);
