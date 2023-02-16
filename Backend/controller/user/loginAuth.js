const Users = require("../../model/users");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: '1d'})
}

const loginAuth = async (req, res) => {
  // res.status(400).send({message: 'dskf'});
  const { email, password } = req.body;
  const existingUser = await Users.findOne({ email: email });
  if (existingUser) {
    const passwordCheck = await bcrypt.compare(password, existingUser.password);
    if (passwordCheck) {
      const token = createToken(existingUser._id)
      res.json({
        userData: existingUser, token
      });
    } else {
      res.status(400).send({
        message: "Wrong Password",
      });
    }
  } else {
    res.status(400).send({
      message: "User not found",
    });
  }
};

module.exports = loginAuth;
