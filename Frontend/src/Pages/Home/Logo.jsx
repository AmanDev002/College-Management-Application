import React from "react";

const Logo = () => {
  return (
    <div className="h-90   flex mb-5">
      <div className="w-1/2  space-y-8 p-5">
        <p className="text-2xl">Our Partners</p>
        <p className="text-4xl">Learn With Our Partners</p>
        <p className="text-gray-500 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim
          sapiente adipisci eius dolore{" "}
        </p>
      </div>

      <div className=" flex  justify-end flex-wrap  items-center p-3">
        <img
          src="images/brand2.png"
          alt="Brand2"
          className="w-50 hover:bg-amber-100 "
        />
        <img
          src="images/brand6.png"
          alt="Brand2"
          className="w-50 hover:bg-amber-100"
        />
        <img
          src="images/brand4.png"
          alt="Brand2"
          className="w-50 hover:bg-amber-100"
        />
        <img
          src="images/brand5.png"
          alt="Brand2"
          className="w-50 hover:bg-amber-100"
        />
        <img
          src="images/brand6.png"
          alt="Brand2"
          className="w-50 hover:bg-amber-100"
        />
        <img
          src="images/brand7.png"
          alt="Brand2"
          className="w-50 hover:bg-amber-100"
        />
        <img
          src="images/brand8.png"
          alt="Brand2"
          className="w-50 hover:bg-amber-100"
        />
        <img
          src="images/logo1.png"
          alt="Brand2"
          className="w-50 hover:bg-amber-100"
        />
      </div>
    </div>
  );
};

export default Logo;
