const exprees = require("express");
const { registerDonor, getDonors , eligibilityChecker, updateLocation } = require("../controllers/donorController");
const router = exprees.Router();

router.route("/register/donor").post(registerDonor);
router.route("/donors").get(getDonors);
router.route("/elegibility/checker/:id").put(eligibilityChecker);
router.route("/update/location/:id").put(updateLocation);

module.exports = router;
