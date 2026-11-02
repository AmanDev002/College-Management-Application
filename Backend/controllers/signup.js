const signupModel = require("../models/signupModel");

const bcrypt = require("bcrypt");
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const checkUser = await signupModel.findOne({ email });

    if (checkUser) {
      return res.send("user already signup");
    }

    let hashPassword = await bcrypt.hash(password, 10);

    let newUser = new signupModel({
      username,
      email,
      password: hashPassword,
    });

    newUser.save();

    res.status(200).send("User save in db");
  } catch (error) {
    res.status(400).send("Error is ", error);
  }
};
