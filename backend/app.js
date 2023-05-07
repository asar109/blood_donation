const epxress = require("express");
const connectDB = require("./config/mongoConnector");
const app = epxress();
const userRoutes = require("./routes/userRoutes");
const donorRoutes = require("./routes/donorRoutes");
const expRoutes = require("./routes/experiencesRoutes");
const postReqRoutes = require("./routes/postRequestRoutes");
const blogRoutes = require("./routes/blogRoutes");
const error = require("./middlewares/error");
const cookie_parser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config({ path: "./config/config.env" });
connectDB();

// using middleware
app.use(epxress.json());
app.use(epxress.urlencoded({ extended: true }));
app.use(cookie_parser());
app.use(cors());

// import routes
app.use("/api/v1", userRoutes);
app.use("/api/v1", donorRoutes);
app.use("/api/v1", expRoutes);
app.use("/api/v1", postReqRoutes);
app.use("/api/v1", blogRoutes);

app.use("/api/v1/*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

// error midleware
app.use(error);

module.exports = app;
