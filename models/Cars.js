const mongoose = require("mongoose");

const Car = mongoose.model("Car", {
  model: String,
  year: Number,
  color: String,
});

module.exports = Car;
