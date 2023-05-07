const Donors = require("../models/donorModel");
const tryCatchfuntion = require("../utils/tryCatchfuntion");
const ErrorHandler = require("../utils/errorHandler");

// Register a donor => /api/v1/donor/register

exports.registerDonor = tryCatchfuntion(async (req, res, next) => {
  const {
    name,
    phone,
    bloodGroup,
    age,
    city,
    lastDonation,
    ispaid,
    longitude,
    latitude,
    userId,
  } = req.body;
  if ((!name, !phone, !bloodGroup, !age, !city, !lastDonation)) {
    return next(new ErrorHandler("Please fill all the fields", 400));
  }

  const today = new Date();
  const lastDonationDate = new Date(lastDonation);
  const timeDiff = today.getTime() - lastDonationDate.getTime();
  const diffDays = timeDiff / (1000 * 3600 * 24);

  const eligibility = diffDays > 90 ? true : false; // 90 days is equivalent to 3 months

  const donor = await Donors.create({
    name,
    phone,
    bloodGroup,
    age,
    ispaid,
    userId,
    city,
    lastDonation: lastDonationDate, // convert the string to a Date object
    eligibility,
    longitude,
    latitude,
  });
  res.status(201).send({
    success: true,
    message: "Donor Registered Successfully",
    donor,
  });
});

// Get all donors => /api/v1/donor

exports.getDonors = tryCatchfuntion(async (req, res, next) => {
  const donors = await Donors.find();
  res.status(200).send(donors);
});

// elegiblity Change
exports.eligibilityChecker = tryCatchfuntion(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorHandler("Please provide an id", 400));
  }
  const donor = await Donors.findOne({ userId: id });
  if (!donor) {
    return next(new ErrorHandler("User not found", 404));
  }
  // check if last donation date is greater than 90 days then cahnge elegibility to true
  const today = new Date();
  const lastDonationDate = new Date(donor.lastDonation);
  const timeDiff = today.getTime() - lastDonationDate.getTime();
  const diffDays = timeDiff / (1000 * 3600 * 24);

  const eligibility = diffDays > 90 ? true : false; // 90 days is equivalent to 3 months

  donor.eligibility = eligibility;
  donor.save();
  // const donor = await Donors.findById(id);
  res.status(200).json({
    success: true,
    message: "Eligibility checked Successfully",
    donor,
  });
});

// update donor location

exports.updateLocation = tryCatchfuntion(async (req, res, next) => {
  const { id } = req.params;
  const { longitude, latitude } = req.body;
  const donor = await Donors.findOne({ userId: id });
  if (!donor) {
    return res.status(200).json({
      message: "you are not a donor",
    });
  }
  if (!longitude || !latitude) {
    return res.status(200).json({
      message: "Please provide longitude and latitude",
    });
  } else {
    donor.longitude = longitude;
    donor.latitude = latitude;
    donor.save();
  }

  res.status(200).json({
    success: true,
    message: "Location updated Successfully",
    donor,
  });
});
