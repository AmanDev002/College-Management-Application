import React from "react";
import "./Categories.css";

const Categories = () => {
  return (
    <div className=" h-130 text-center bg-gray-50">
      <h1 className="text-5xl">Top Categories</h1>
      <p className="mt-8 text-lg text-gray-700 font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sit!
        Lorem ipsum dolor sit amet.
      </p>

      <div className="h-40 grid grid-flow-col grid-rows-3 ml-15 mt-10 gap-x-20 gap-y-30 ">
        <div className=" flex w-80 h-15 items-center justify-evenly rounded-md cursor-pointer bg-teal-100 hover:bg-teal-500  hover:text-white box">
          <i class="fa-solid fa-users-line text-3xl text-teal-500"></i>
          <p className="text-lg">Business Management</p>
        </div>

        <div className=" flex w-80 h-15 items-center justify-evenly rounded-md cursor-pointer bg-yellow-200 hover:bg-yellow-400  hover:text-white box">
          <i class="fa-solid fa-capsules text-3xl text-amber-500"></i>
          <p className="text-lg">Health and Fitness</p>
        </div>

        <div className=" flex w-80 h-15 items-center justify-evenly rounded-md cursor-pointer bg-fuchsia-200 hover:bg-fuchsia-600  hover:text-white box">
          <i class="fa-solid fa-handshake-angle text-3xl text-fuchsia-600"></i>
          <p className="text-lg">Business and Finance</p>
        </div>

        <div className=" flex w-80 h-15 items-center justify-evenly rounded-md cursor-pointer bg-red-300 hover:bg-red-600  hover:text-white box">
          <i class="fa-solid fa-pen-fancy text-3xl text-red-600"></i>
          <p className="text-lg">Art and Design</p>
        </div>

        <div className=" flex w-80 h-15 items-center justify-evenly rounded-md cursor-pointer bg-blue-400 hover:bg-blue-600  hover:text-white box">
          <i class="fa-solid fa-server text-3xl text-blue-700"></i>
          <p className="text-lg">Data Science</p>
        </div>

        <div className=" flex w-80 h-15 items-center justify-evenly rounded-md cursor-pointer bg-orange-200 hover:bg-orange-500  hover:text-white box">
          <i class="fa-solid fa-desktop text-3xl text-orange-400"></i>
          <p className="text-lg">Computer Science</p>
        </div>

        <div className=" flex w-80 h-15 items-center justify-evenly rounded-md cursor-pointer bg-green-200 hover:bg-green-500  hover:text-white box">
          <i class="fa-solid fa-arrow-up-right-dots text-3xl text-green-600"></i>
          <p className="text-lg">Personal Development</p>
        </div>

        <div className=" flex w-80 h-15 items-center justify-evenly rounded-md cursor-pointer bg-pink-200 hover:bg-pink-500  hover:text-white box">
          <i class="fa-solid fa-bullhorn text-3xl text-pink-500"></i>
          <p className="text-lg">Marketing</p>
        </div>

        <div className=" flex w-80 h-15 items-center justify-evenly rounded-md cursor-pointer bg-teal-200 hover:bg-teal-500  hover:text-white box">
          <i class="fa-regular fa-camera text-3xl text-teal-400"></i>
          <p className="text-lg">Video & Photograpy</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
