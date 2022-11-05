const mongoose = require("mongoose");

const studSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  roll_no: {
    type: Number,
    required: true,
  },

  courses: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Student", studSchema);
