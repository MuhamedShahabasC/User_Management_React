const express = require("express");
const allUsers = require("../controller/admin/allUsers");
const deleteUser = require("../controller/admin/deleteUser");
const editUser = require("../controller/admin/editUser");
const newUser = require("../controller/admin/newUser");
const loginAuth = require("../controller/admin/loginAuth");
const checkAuth = require("../middleware/checkAuth");
const router = express.Router();

router.post("/login", loginAuth);
router.get("/allUsers", checkAuth, allUsers);
router.post("/addUser", checkAuth, newUser);
router.put("/edituser/:_id", checkAuth, editUser);
router.delete("/deleteuser/:_id", checkAuth, deleteUser);

module.exports = router;
