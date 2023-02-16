const Users = require("../../model/users");

const allUsers = async (req, res) => {
  const allUsers = await Users.find();
  res.json({ allUsers });
};

module.exports = allUsers;
