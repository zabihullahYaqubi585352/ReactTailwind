import React from "react";
import { ReactTyped, Typed } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className=" mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          Growing with Data analytics
        </p>
        <h1 className="text-4xl md:text-7xl sm:text-5xl font-bold md:py-6">
          {" "}
          Growing with data.
        </h1>
        <div className="flex justify-center items-center ">
          <p className="text-xl md:text-5xl py-4 sm:text-4xl font-bold ">
            Fast,flexible financing for
          </p>

          <ReactTyped
            className="text-xl md:text-5xl sm:text-4xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          ></ReactTyped>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics remove fro BTB,BTC,& SASS platform.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-black">
          Get Started{" "}
        </button>
      </div>
    </div>
  );
};
export default Hero;
