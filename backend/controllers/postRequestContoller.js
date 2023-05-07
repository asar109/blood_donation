const PostRequests = require("../models/postRequestModel");
const tryCatchfuntion = require("../utils/tryCatchfuntion");
const ErrorHandler = require("../utils/errorHandler");

exports.postRequest = tryCatchfuntion(async (req, res, next) => {
  const { name, bloodType, location, message } = req.body;
  if (!name || !bloodType || !location || !message) {
    return next(new ErrorHandler("Please fill all the fields", 400));
  }
  const postRequest = await PostRequests.create({
    name,
    bloodType,
    location,
    message,
  });
  res.status(201).json({
    success: true,
    postRequest,
  });
});

// get all posts
exports.getAllPosts = tryCatchfuntion(async (req, res, next) => {
  const posts = await PostRequests.find();
  res.status(200).json(posts);
});
