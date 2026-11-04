const User = require("../schemas/User");

exports.userForm = async (req, res) => {

//   const newData = new User({
//     firstName: "mohan",
//     lastName: "pandit",
//     fatherName: "sohan pandit",
//     dateOfBirth: Date.now(),
//     email: "mohan@gmail.com",
//     mobileNumber: 1234567890,
//     academicSession: "2024-2027",
//     currentYear: 2,
//     collegeName: "National Business College",
//   });

//   await newData.save();

  res.send("Data stored in db");
};
