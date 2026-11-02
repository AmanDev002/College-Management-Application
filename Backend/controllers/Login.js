const signupModel = require("../models/signupModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    if (!email || !password) {
      return res.status(400).send("please enter valid details");
    }
    let userExist = await signupModel.findOne({ email });

    if (!userExist) {
      return res.status(400).send("Please signup first");
    }
    const passwordCheck = await bcrypt.compare(password, userExist.password);

    if (!passwordCheck) {
      return res.status(401).send("password mismatch");
    }

    const token = jwt.sign({ id: userExist._id }, process.env.SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });

    res.status(200).send("Login successfull");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
