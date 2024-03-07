import React from "react";
import { FaStar } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

const Card = () => {
  return (
    <div className="max-w-md mx-auto border border-black bg-blue-100 rounded-xl overflow-hidden shadow-lg relative">
      <div className="flex flex-col sm:flex-row p-2">
        {/* Left side with image */}
        <div className="sm:w-1/3 pt-4 sm:pt-0 relative ">
          {/* Icon on the top right of the image */}
          <div className="absolute rounded-full shadow top-8 sm:top-4 right-4 p-2 transition transform hover:scale-110">
            <FaStar color="gold" />
          </div>
          <img
            src="img2.png"
            alt="Card Img"
            className="object-cover p-2 rounded-3xl object-center w-full h-full max-w-xs mx-auto"
          />
        </div>

        {/* Right side with subheading, heading, and div with name and time */}
        <div className="w-full sm:w-2/3 p-4 pr-6">
          {/* Subheading */}
          <p
            style={{ textShadow: "1.5px 1.5px 1px rgba(0, 0, 0, 0.9)" }}
            className="text-orange-500 text-center w-fit px-2 rounded bg-white text-base font-semibold mb-1"
          >
            After Effects
          </p>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-blue-700 mb-2">
            Animation in UI Design (Part 2)
          </h2>

          {/* Div with name and time in one line */}
          <div className="flex items-center my-3 p-2 pl-0">
            <FaRegUserCircle className="text-blue-500 mr-2" />
            <span className="text-blue-500 font-medium text-sm">
              Vishal Pulikottil
            </span>
            <FaRegClock className="text-blue-500 ml-4 mr-1" />
            <span className="text-blue-500 font-medium text-sm">
              15 minutes
            </span>
          </div>
        </div>
      </div>

      {/* Icon on the top right of the card */}
      <div className="absolute top-0 right-1 p-2 transition transform hover:scale-110">
        <SlOptions />
      </div>
    </div>
  );
};

export default Card;
