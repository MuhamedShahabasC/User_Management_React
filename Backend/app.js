const express = require("express");
const app = express();
const cors = require("cors");

require("./config/db");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require("./routes/user");
app.use("/user", userRouter);

const admin = require("./routes/admin");
app.use("/admin", admin);

require("dotenv").config();
const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log("Error starting server: " + err);
  } else {
    console.log("Listening on http://localhost:8000");
  }
});
