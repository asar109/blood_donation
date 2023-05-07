const express = require("express");
const { addBlog, getAllBlogs } = require("../controllers/blogContoller");

const router = express.Router();

router.post("/blog/post", addBlog);
router.get("/blog/posts", getAllBlogs);

module.exports = router;
