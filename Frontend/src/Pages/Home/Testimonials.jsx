import React from "react";

const Testimonials = () => {
  return ( 
    <div className="h-110 mt-20 flex bg-gray-100">
      <div className="w-1/3  flex flex-col flex-wrap gap-10 p-5">
        <p className="text-2xl text-gray-500">Testimonials</p>
        <p className="text-4xl">What Our Studend Have to Say</p>
        <p className="text-lg">
          College is a place where students gain knowledge, develop new skills,
          and prepare themselves for their future careers.
        </p>
        <button className="bg-green-400 w-40 h-15 rounded-2xl text-white text-lg text-center cursor-pointer">
          View All :) <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div className="flex flex-1   justify-around items-center  p-5 ">

      
        <div className="flex  flex-col items-start w-1/3  h-full gap-8 p-2 rounded-xl bg-white">
          <img
            src="images/girlCard.jpg"
            alt="Girl"
            className="rounded-full w-20 h-20  object-cover"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            ab!lorem5 Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </p>
          <div className="text-xl font-semibold">
            <p className="text-2xl">Robert Lane</p>
            <p>Developer</p>
          </div>
        </div>


        <div className="flex  flex-col items-start w-1/3  h-full gap-8 p-2 rounded-xl bg-white">
          <img
            src="images/boycard.png"
            alt="Boy"
            className="rounded-full w-20 h-20  object-cover"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            ab!lorem5 Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </p>
          <div className="text-xl font-semibold">
            <p className="text-2xl">David Owns</p>
            <p>Designer</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Testimonials;
