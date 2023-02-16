const Users = require("../../model/users");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const loginAuth = async (req, res) => {
  const { email, password } = req.body;
  const admin = {
    email: process.env.ADMIN_MAIL,
    password: process.env.ADMIN_PASSWORD,
  };
  if (admin) {
    const passwordCheck = await bcrypt.compare(password, admin.password);
    if (passwordCheck) {
      const token = createToken(admin.email);
      res.json({
        adminToken: token,
      });
    } else {
      res.status(400).send({
        message: "Wrong Password",
      });
    }
  } else {
    res.status(400).send({
      message: "Admin not found",
    });
  }
};

module.exports = loginAuth;
