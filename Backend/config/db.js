const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

mongoose.connect(
  process.env.mongoDB_URL,
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      console.log("Database connected..!");
    } else {
      console.log("Error connecting database: " + err);
    }
  }
);
