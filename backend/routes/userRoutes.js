const exprees = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getMyProfile,
} = require("../controllers/userContorller");
const { isAuthenticated } = require("../utils/isAuthenticated");

const router = exprees.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/forgot/Password").post(forgotPassword);
router.route("/reset/Password/:token").put(resetPassword);
router.route("/me").get(isAuthenticated, getMyProfile);

module.exports = router;
