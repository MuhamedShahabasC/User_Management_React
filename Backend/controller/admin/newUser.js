const Users = require("../../model/users");
const bcrypt = require("bcrypt");

const newUser = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await Users.findOne({ email: email });
  if (existingUser) {
    res.status(400).send({
      message: "User Already existing.",
    });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Users({
      name,
      email,
      password: hashedPassword,
    });
    newUser.save();
    console.log("Admin Added New User");
    res.json({
      message: "Added User Successfully..!",
      userData: newUser,
    });
  }
};

module.exports = newUser;
