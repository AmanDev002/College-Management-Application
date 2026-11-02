import { Link } from "react-router-dom";
import axios from "axios";
import GlobalContext from "../Context/GlobalContext";
import { useContext } from "react";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn, navigate } = useContext(GlobalContext);

  const handleLogout = async () => {
    const response = axios.post(
      "http://localhost:3000/logout",
      {},
      { withCredentials: true },
    );
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="h-22 flex  justify-around items-center bg-white border-b sticky top-0 left-0">
      <div className=" h-full flex items-center w-20 justify-around">
        <Link to="/">
          <i className="fa-regular fa-compass text-2xl text-red-600"></i>
        </Link>

        <span className="text-lg">NBC</span>
      </div>

      <div className="w-1/3  flex justify-evenly h-full items-center font-medium text-lg">
        {/* <a href="/courser">Courses</a> */}
        <Link to="/courses">Semester</Link>
        <Link to="/about">About</Link>
        <Link to="/section">Section</Link>
        <Link to="/info" >Info</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className=" h-full flex items-center justify-around w-40 font-medium ">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="cursor-pointer">
            Log out
          </button>
        ) : (
          <div className="flex gap-5">
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
