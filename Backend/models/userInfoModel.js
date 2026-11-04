const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  academicSession: {
    type: String,
    required: true,
  },
  currentYear: {
    type: String,
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
});


const UserInfo = mongoose.model("UserInfo", userSchema);
module.exports = UserInfo;