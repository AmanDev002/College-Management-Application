import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../Context/GlobalContext";
import { useContext } from "react";

const Signup = () => {
  const {navigate} = useContext(GlobalContext);

  const [signupUser, setSignupUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  function formSubmitHandler(event) {
    event.preventDefault();
  }

  function userChangeHandler(e) {
    setSignupUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function submitHandler() {
    try {
      const response = await axios.post(
        "http://localhost:3000/signup",
        signupUser,
      );

      setSignupUser({ username: "", email: "", password: "" });
      if (response.status === 200) {
        alert("Signup Successfull");
        navigate("/login");
      }
    } catch (error) {
      console.log("error aaya hai");
    }
  }

  return (
    <div className="  flex items-center justify-center  bg-blue-100 h-138 p-4">
      <div className=" w-1/2  h-full rounded-lg">
        <img
          src="images/Signup.png"
          alt="Signup"
          className="rounded-l-lg h-full w-full"
        />
      </div>

      <div className=" flex flex-col  h-full w-1/3  items-center  rounded-lg p-2 bg-white">
        <h1 className="text-5xl text-blue-800 font-semibold">Student Signup</h1>
        <p className="text-sm p-2">Hey Enter you details to create account</p>
        <form
          className="flex flex-col h-65 justify-around"
          onSubmit={formSubmitHandler}
        >
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              className="rounded border w-70 p-2 text-lg"
              name="username"
              onChange={userChangeHandler}
              value={signupUser.username}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your password"
              className="rounded border w-70 p-2 text-lg"
              name="email"
              value={signupUser.email}
              onChange={userChangeHandler}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter password"
              className="rounded border w-70 p-2 text-lg"
              name="password"
              value={signupUser.password}
              onChange={userChangeHandler}
              required
            />
          </div>
          <button
            className="rounded-lg cursor-pointer border w-70 p-2 text-lg bg-blue-800 text-white"
            onClick={submitHandler}
          >
            Sign up
          </button>
        </form>
        <p className="text-blue-700 font-semibold">
          Build your dream with Us...
        </p>

        <Link
          to="/login"
          className="text-red-600 font-semibold text-lg underline"
        >
          Back to login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
