require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.DATABASE_URI);

const carsRoutes = require("./routes/cars");
app.use(carsRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server has started");
});
