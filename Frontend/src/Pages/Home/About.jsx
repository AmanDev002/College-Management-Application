import React from "react";

const About = () => {
  return (
    <div className=" h-120 flex ">
      <div className="h-full w-1/2  p-5">
        <img src="images/rightBoy.png" alt="Boy" style={{ width: "80%" }} />
      </div>


      <div className="w-1/2 flex flex-col flex-wrap gap-9 items-start p-5">
        <h2 className="text-2xl text-gray-500">About Us</h2>
        <div>
          <p className="text-5xl ">Learn & Grow Your Skills</p>
          <p className="text-4xl text-red-600 font-semibold">From Anywhere</p>
        </div>

        <p className="text-gray-500 text-md">
          College is an important part of student life where students gain
          knowledge, develop new skills, and prepare themselves for their future
          careers. It provides opportunities to learn through classes, projects,
          practical activities, and teamwork
        </p>

        <ul className="text-2xl space-y-3">
            <li>Expert Trainers</li>
            <li>Online Remote Learning</li>
            <li>Lifetime Access</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
