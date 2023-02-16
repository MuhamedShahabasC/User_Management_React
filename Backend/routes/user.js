const express = require("express");
const router = express.Router();
const loginAuth = require("../controller/user/loginAuth");
const addUser = require("../controller/user/signUp");
const addImage = require("../controller/user/addImage");
const userData = require("../controller/user/userData");
const checkAuth = require("../middleware/checkAuth");

router.post("/login", loginAuth);
router.get("/data", userData); // dont do this, instead just res.json user data while logging in. did it already
router.post("/signup", addUser);
router.post("/addImage", checkAuth, addImage);

module.exports = router;
