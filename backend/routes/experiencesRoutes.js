const express = require("express");
const {
  addExperience,
  getExperiences,
} = require("../controllers/experienceController");

const router = express.Router();

router.post("/addExperience", addExperience);
router.get("/experiences", getExperiences);

module.exports = router;
