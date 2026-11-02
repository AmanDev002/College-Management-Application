import React from "react";

const Courses = () => {
  return (
    <div className="mt-10 h-120 flex justify-around items-center bg-gray-50">
      <div className="rounded-md  bg-white h-110 w-1/5 text-center space-y-2">
        <img
          src="images/remotebusiness.png"
          alt="Remote"
          style={{ width: "100%", height: "50%", objectFit: "cover" }}
          className="rounded-t-xl"
        />

        <div className="p-1">
          <p className="bg-teal-400 w-1/2 m-auto text-white rounded-lg cursor-pointer">
            Beginner
          </p>
          <p className="text-lg mt-3 ">
            Starting SEO as your Home Based Business
          </p>
          <p className=" text-xl font-bold mt-2" style={{ color: "red" }}>
            $30
          </p>

          <div className=" flex justify-around items-center mt-6">
            <div className="flex items-center border-r p-1">
              <i class="fa-solid fa-person-chalkboard text-2xl text-gray-600"></i>
              <p className="text-lg">11 Lessons</p>
            </div>
            <div className="flex items-center">
              <i class="fa-solid fa-person text-2xl text-gray-600"></i>
              <p className="text-lg">222 Students</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-md bg-white h-110 w-1/5 text-center space-y-2">
        <img
          src="images/projectdiscussion.png"
          alt="Remote"
          style={{ width: "100%", height: "50%", objectFit: "cover" }}
          className="rounded-t-xl"
        />

        <div className="p-1">
          <p className="bg-teal-400 w-1/2 m-auto text-white rounded-lg cursor-pointer">
            Expert
          </p>
          <p className="text-lg mt-3 ">
            Grow Personal Financial Security &....
          </p>
          <p className=" text-xl font-bold mt-2" style={{ color: "red" }}>
            $30
          </p>

          <div className=" flex justify-around items-center mt-6">
            <div className="flex items-center border-r p-1">
              <i class="fa-solid fa-person-chalkboard text-2xl text-gray-600"></i>
              <p className="text-lg">8 Lessons</p>
            </div>
            <div className="flex items-center">
              <i class="fa-solid fa-person text-2xl text-gray-600"></i>
              <p className="text-lg">72 Students</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-md bg-white h-110 w-1/5 text-center space-y-2">
        <img
          src="images/dataprocessing.png"
          alt="Remote"
          style={{ width: "100%", height: "50%", objectFit: "cover" }}
          className="rounded-t-xl"
        />

        <div className="p-1">
          <p className="bg-teal-400 w-1/2 m-auto text-white rounded-lg cursor-pointer">
            All Levels
          </p>
          <p className="text-lg mt-3 ">
            The Complete Guide to Build RESTful API...
          </p>
          <p className=" text-xl font-bold mt-2" style={{ color: "red" }}>
            Free
          </p>

          <div className=" flex justify-around items-center mt-6">
            <div className="flex items-center border-r p-1">
              <i class="fa-solid fa-person-chalkboard text-2xl text-gray-600"></i>
              <p className="text-lg">9 Lessons</p>
            </div>
            <div className="flex items-center">
              <i class="fa-solid fa-person text-2xl text-gray-600"></i>
              <p className="text-lg">21 Students</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-md bg-white h-110 w-1/5 text-center space-y-2">
        <img
          src="images/systemdesign.png"
          alt="Remote"
          style={{ width: "100%", height: "50%", objectFit: "cover" }}
          className="rounded-t-xl"
        />

        <div className="p-1">
          <p className="bg-teal-400 w-1/2 m-auto text-white rounded-lg cursor-pointer">
            All Levels
          </p>
          <p className="text-lg mt-3 ">
            Competitive Strategy Law for Management...
          </p>
          <p className=" text-xl font-bold mt-2" style={{ color: "red" }}>
            $75
          </p>

          <div className=" flex justify-around items-center mt-6">
            <div className="flex items-center border-r p-1">
              <i class="fa-solid fa-person-chalkboard text-2xl text-gray-600"></i>
              <p className="text-lg">7 Lessons</p>
            </div>
            <div className="flex items-center">
              <i class="fa-solid fa-person text-2xl text-gray-600"></i>
              <p className="text-lg">352 Students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
