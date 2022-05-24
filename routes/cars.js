const express = require("express");
const router = express.Router();
const formidable = require("express-formidable");

const Car = require("../models/Cars");

router.get("/allCars", async (req, res) => {
  try {
    const allExistingCars = await Car.find();
    return res.status(200).json(allExistingCars);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
});
router.post("/cars/create", formidable(), async (req, res) => {
  try {
    const newCar = new Car({
      model: req.fields.model,
      year: req.fields.year,
      color: req.fields.color,
    });
    await newCar.save();
    return res.status(200).json({ message: "Created" });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
});

module.exports = router;
