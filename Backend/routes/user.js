const express = require("express");
const router = express.Router({mergeParams:true});

const {signup} = require("../controllers/signup");
const {login} = require("../controllers/Login");
const {logout} = require("../controllers/Logout");
const {userForm} = require("../controllers/userForm");

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/formInfo", userForm);


module.exports = router;