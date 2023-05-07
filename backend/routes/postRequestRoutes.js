const express = require("express");
const {
  postRequest,
  getAllPosts,
} = require("../controllers/postRequestContoller");

const router = express.Router();

router.post("/post/request", postRequest);
router.get("/posts", getAllPosts);

module.exports = router;
