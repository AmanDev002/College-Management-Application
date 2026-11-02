import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" w-full h-128 flex justify-around ">
      <div className="flex flex-col justify-evenly flex-wrap items-start w-1/2 p-5 ">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold text-gray-600">
            Help Studend Reach
          </h1>
          <h2 className="text-4xl font-bold text-red-500 mt-3">
            their Student
          </h2>
        </div>
        <p className="text-gray-500 text-lg">
          Our college provides a supportive and engaging environment where
          students can learn, grow, and prepare for their future careers. With
          experienced faculty, modern facilities, and a variety of academic and
          extracurricular activities, we encourage students to develop both
          their knowledge and practical skills...
        </p>
        <Link to="/courses">
          <button className="bg-green-400 w-40 h-15 rounded-2xl text-white text-lg text-center cursor-pointer">
            Find Courses <i className="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
      </div>

      <div className=" w-1/2 p-4 ">
        <img src="images/boy2.png" alt="Boy" />
      </div>
    </div>
  );
};

export default Hero;
