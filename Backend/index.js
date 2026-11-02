require('dotenv').config();
const mongoose = require("mongoose");
const dbUrl = "mongodb://127.0.0.1:27017/myLocalDb";
const { signup } = require("./controllers/signup");
const { login } = require("./controllers/Login");
const {logout} = require("./controllers/Logout");
const cors = require("cors");
const express = require("express");
const app = express();


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT;

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

app.post("/signup", signup);
app.post("/login", login);
app.post("/logout", logout);

app.listen(PORT, () => {
  console.log("Server is listening ");
});
