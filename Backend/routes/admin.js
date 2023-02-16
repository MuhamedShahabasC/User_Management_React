const express = require("express");
const allUsers = require("../controller/admin/allUsers");
const deleteUser = require("../controller/admin/deleteUser");
const editUser = require("../controller/admin/editUser");
const newUser = require("../controller/admin/newUser");
const loginAuth = require("../controller/admin/loginAuth");
const router = express.Router();

router.post("/login", loginAuth);
router.get("/allUsers", allUsers);
router.post("/addUser", newUser);
router.put('/edituser/:_id', editUser)
router.delete("/deleteuser/:_id", deleteUser);

module.exports = router;
