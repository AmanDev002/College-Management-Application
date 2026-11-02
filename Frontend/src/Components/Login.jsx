import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GlobalContext from "../Context/GlobalContext";
import { useContext } from "react";


const Login = () => {
 
  // context provider
  const { setIsLoggedIn, navigate } = useContext(GlobalContext);

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  function formSubmitHandler(event) {
    event.preventDefault();
  }

  function userChangeHandler(e) {
    setLoginUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function submitHandler() {
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        loginUser,
        {
          withCredentials: true,
        },
      );
      if (response.status === 200) {
        alert("Login Successfull");
        navigate("/");
        setIsLoggedIn(true);
      }
      setLoginUser({ email: "", password: "" });
    } catch (error) {
      console.log(error);
      alert(error);
      setLoginUser({ email: "", password: "" });
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
        <h1 className="text-5xl text-blue-800 font-semibold">Student Login</h1>
        <p className="text-sm p-2">Hey Enter you details to Login account</p>

        <form
          className="flex flex-col h-65 justify-evenly"
          onSubmit={formSubmitHandler}
        >
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded border w-70 p-2 text-lg"
              name="email"
              value={loginUser.email}
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
              value={loginUser.password}
              onChange={userChangeHandler}
              required
            />
          </div>
          <button
            className="rounded-lg cursor-pointer border w-70 p-2 text-lg bg-blue-800 text-white"
            onClick={submitHandler}
          >
            Login
          </button>
          <p className="text-blue-700 font-semibold text-center">
            Build your dream with Us...
          </p>

          <Link
            to="/signup"
            className="text-red-600 font-semibold text-lg underline text-center"
          >
            Back to sign up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
