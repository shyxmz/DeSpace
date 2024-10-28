const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Import userRoute
const userRoute = require("./routes/userRoute");

// Middleware for parsing JSON
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);
      console.log("Server running at", process.env.PORT || 8000);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });

// Use the userRoute with a base path
app.use(userRoute);
