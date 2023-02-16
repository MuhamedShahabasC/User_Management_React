const Users = require("../../model/users");

const editUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const { name } = req.body;
    await Users.findByIdAndUpdate(_id, { name });
    res.json({
      message: "User edited successfully.",
    });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

module.exports = editUser;
