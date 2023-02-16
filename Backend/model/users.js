const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  profilePic: String,
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
