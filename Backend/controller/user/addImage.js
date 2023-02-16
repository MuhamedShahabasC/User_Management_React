const Users = require("../../model/users");

const addImage = async (req, res) => {
  const { email, url } = req.body;
  Users.findOneAndUpdate({ email }, { profilePic: url }).catch((error) => {
    res.status(400).send({ message: "Image adding failed." });
  });
  const updatedUser = await Users.findOne({ email });
  res.json({ updatedUser });
};

module.exports = addImage;
