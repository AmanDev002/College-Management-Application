const { userForm } = require("../controllers/userForm");

const express = require("express");
const router = express.Router({mergeParams : true});

router.post("/form", userForm);

module.exports = router;
