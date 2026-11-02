import React from "react";
import {  Link, Outlet } from "react-router-dom";


const FirstYear = () => {
  return (
   <div className=" w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md   hover:shadow-xl">
      {/* Image Section */}
      <div className=" overflow-hidden">
        <img
          src="/images/FirstYear.png"
          alt="First Year BCA"
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        
      </div>

      {/* Card Content */}
      <div className="flex flex-col gap-4 p-5 text-left">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            National Business College
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Bachelor of Computer Applications (BCA)
          </p>
        </div>

        {/* Course Details */}
        <div className="flex items-center justify-between gap-2 border-y border-gray-100 py-4">
          <div>
            <p className="text-xs text-gray-500">Duration</p>
            <p className="mt-1 font-semibold text-gray-800">1 Year</p>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-500">Semesters</p>
            <p className="mt-1 font-semibold text-gray-800">Semester 1 & 2</p>
          </div>
        </div>

        {/* Button */}
        <Link to="/courses/firstyear">
        <button className="cursor-pointer w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
          Explore More →
        </button>
        </Link>
        {/* <Outlet></Outlet> */}
      </div>
    </div>
  );
};

export default FirstYear;
