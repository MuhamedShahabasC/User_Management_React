const jwt = require("jsonwebtoken");

const checkAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send({ message: "Authorization required" });
  }
  const token = authorization.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    return res.status(401).send({ message: "Invalid Authorization" });
  }
};

module.exports = checkAuth;
