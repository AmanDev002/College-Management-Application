import React from "react";

const Footer = () => {
  return (
    <div className="h-100  bg-gray-100 flex">

      
      <div className=" w-1/2 space-y-8 p-4">
        <div className="flex justify-start items-center">
          <img src="images/nbc.png" alt="NBC" className="w-20" />
          <p className="text-2xl">National Business College</p>
        </div>
        <p className="text-lg">
          Our college is dedicated to providing quality education, developing
          practical skills, and creating opportunities for students to achieve
          their goals.
        </p>

        <p className="text-xl">
          <span className="font-bold">Add : </span>70-80 upper St Norwich NR2
        </p>
        <p className="text-xl">
          <span className="font-bold">Call:</span>+025879877
        </p>
        <p className="text-xl">
          <span className="font-bold">Email:</span>info@nbc.com
        </p>
      </div>

      <div className=" space-y-8 p-4 w-1/3">
        <p className="text-2xl font-semibold">Online Platform</p>
        <div className="flex flex-col gap-6">
          <a href="/about">About</a>
          <a href="/course">Course</a>
          <a href="/instructor">instructor</a>
          <a href="/events">Events</a>
          <a href="/instructorDetails">Instructor Details</a>
          <a href="/purchaseguide">Purchase Guide</a>
        </div>
      </div>

      <div className=" space-y-8 p-4 w-1/3">
        <p className="text-2xl font-semibold">Links</p>
        <div className="flex flex-col gap-6">
          <a href="/contact">Contact Us</a>
          <a href="/gallery">Gallery</a>
          <a href="News">News & Articles</a>
          <a href="FAQ">FAQ'S</a>
          <a href="/soon">Comming Soon</a>
          <a href="sign/register">Sign/Register</a>
        </div>
      </div>

      <div className=" space-y-8 p-4 w-1/3">
        <p className="text-2xl font-semibold">Contacts</p>

        <div className="space-y-10">
          <p className="text-xl text-gray-700">
            Enter your email address to register our newsletter subscription
          </p>
          <form action="">
            <input
              type="text"
              placeholder="Your Email"
              className="p-3 bg-white text-black rounded"
            />
            <button className=" mt-2 bg-red-500 text-white p-3 rounded-xl w-30">
              Subscribe
            </button>
          </form>
        </div>

        <div className="text-xl space-x-2">
          <i className="fa-brands fa-facebook-f text-blue-700"></i>
          <i class="fa-brands fa-linkedin-in text-blue-700"></i>
          <i class="fa-brands fa-instagram text-pink-600"></i>
          <i class="fa-brands fa-twitter text-blue-700"></i>
          <i class="fa-brands fa-youtube text-red-600"></i>
        </div>
      </div>


    </div>
  );
};

export default Footer;
