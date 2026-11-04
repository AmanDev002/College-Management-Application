const UserInfo = require("../models/userInfoModel");

exports.userForm = async (req, res) => {
  try {
    let newUserInfo = await new UserInfo(req.body);
    await newUserInfo.save();
    res.status(200).send("Info Store in DB");
  } catch (error) {
    res.status(500).send("Internal server Error");
    console.log(error);
  }
};
