const Blogs = require("../models/blogModel");
const tryCatchfuntion = require("../utils/tryCatchfuntion");
const ErrorHandler = require("../utils/errorHandler");

module.exports.addBlog = tryCatchfuntion(async (req, res, next) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return next(new ErrorHandler("Please provide title and description", 400));
  }
  const blog = await Blogs.create({
    title,
    description,
  });
  res.status(201).json({
    status: "success",
    blog,
  });
});

// get all posts

module.exports.getAllBlogs = tryCatchfuntion(async (req, res, next) => {
  const blogs = await Blogs.find();
  res.status(200).json(blogs);
});
