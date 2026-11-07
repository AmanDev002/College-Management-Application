import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";

const Register = () => {
  const { isLoggedIn } = useContext(GlobalContext);
  return (
    <div className="text-center">
      {isLoggedIn ? (
        <p className="text-5xl text-red-500 font-semibold mb-4">National Business College</p>
      ) : (
        <button className="bg-green-500 w-40 h-15 rounded-2xl text-white text-lg text-center cursor-pointer">
          <Link to="/signup">
            {" "}
            Register <i className="fa-regular fa-hand-point-up"></i>
          </Link>
        </button>
      )}
    </div>
  );
};

export default Register;
