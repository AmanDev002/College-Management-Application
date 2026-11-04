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
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  academicSession: {
    type: String,
    required: true,
  },
  currentYear: {
    type: Number,
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
});


const User = mongoose.model("User", userSchema);
module.exports = User;