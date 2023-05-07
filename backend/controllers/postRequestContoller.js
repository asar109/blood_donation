const PostRequests = require("../models/postRequestModel");
const tryCatchfuntion = require("../utils/tryCatchfuntion");
const ErrorHandler = require("../utils/errorHandler");
const sendEmail = require("../utils/sendEmail");
const Users = require("../models/userModel");

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

  const users = await Users.find({});
  users.forEach(async (user) => {

      await sendEmail(
        user.email,
        `Dear ${user.name},

        We are writing to inform you that a blood request has been posted on our platform from someon. The requester is in urgent need of ${bloodType} blood and we are reaching out to all our registered users.
        
        If you or someone you know can provide the requested blood type, please contact the requester directly using the contact information provided below:
        
        Name: ${name}
        Blood Group: ${bloodType}
        Location: ${location}
        
        Please note that time is of the essence in this situation and a quick response could save a life. We urge you to consider helping if you are able to do so.
        
        Thank you for being a part of our community and for considering to help those in need.
        
        Best regards,
        
        Reddrop`,
        "Blood Request Posted - Urgent Response Needed"
      );
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
