const Users = require("../../model/users");

const deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;
    await Users.findByIdAndDelete(_id);
    res.json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
module.exports = deleteUser;
