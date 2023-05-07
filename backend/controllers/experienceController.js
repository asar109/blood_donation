const Experiences = require("../models/experienceModel");
const tryCatchfuntion = require("../utils/tryCatchfuntion");
const ErrorHandler = require("../utils/errorHandler");

module.exports.addExperience = tryCatchfuntion(async (req, res, next) => {
  const { title, description } = req.body;
  if ((!title, !description)) {
    return next(new ErrorHandler("Please fill all the fields", 400));
  }
  const experience = await Experiences.create({
    title,
    description,
  });
  res.status(201).send({
    success: true,
    message: "Experience Added Successfully",
    experience,
  });
});

// get all experices

module.exports.getExperiences = tryCatchfuntion(async (req, res, next) => {
  const experiences = await Experiences.find();
  res.status(200).send(experiences);
});
