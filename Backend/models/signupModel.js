const mongoose = require("mongoose");
const userSchema = require("../schemas/signup");

const singupModel = mongoose.model("signupUser", userSchema);
module.exports = singupModel;
