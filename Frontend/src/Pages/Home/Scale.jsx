import React from "react";

const Scale = () => {
  return (
    <div className=" h-20 mb-5 mt-5 bg-green-500 flex justify-around items-center">
      <div className="w-70 border-r h-full flex justify-center items-center gap-5 text-white">
        <i class="fa-solid fa-chalkboard-user text-3xl"></i>
        <div className="text-xl">
          <span>3020</span>
          <p>Online Course</p>
        </div>
      </div>

      <div className="w-70 border-r h-full flex justify-center items-center gap-5 text-white">
        <i className="fa-solid fa-stamp text-3xl" ></i>
        <div className="text-xl">
          <span>Top</span>
          <p>Instructor</p>
        </div>
      </div>

      <div className="w-70 border-r h-full flex justify-center items-center gap-5 text-white">
       <i className="fa-solid fa-certificate text-3xl" ></i>
        <div className="text-xl">
          <span>Online</span>
          <p>Certifications</p>
        </div>
      </div>

       <div className='w-70 border-r h-full flex justify-center items-center gap-5 text-white'>
        <i className="fa-solid fa-users-line text-3xl" ></i>
        <div className='text-xl'>
            <span>6000</span>
            <p>Memberships</p>
        </div>
      </div>
    </div>
  );
};

export default Scale;
