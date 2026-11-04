require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dbUrl = "mongodb://127.0.0.1:27017/CollegeManagement";
const PORT = process.env.PORT;

// router
const userRouter = require("./routes/user");

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("db connect successfull");
  })
  .catch((error) => {
    console.log("db Connection fail");
  });



app.get("/", (req, res) => {
  res.send("welcome to my server");
});


app.use("/users", userRouter);


app.listen(PORT, () => {
  console.log("Server is listening ");
});
