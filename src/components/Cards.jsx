import React from "react";
import singleUser from "../assets/singleUser.jpg";
import doubleUser from "../assets/doubleUser.png";
import multiUser from "../assets/multi.jpg";
const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 ">
          <img className="w-20 mx-auto bg-white" src={singleUser} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 ">1 Granted User</p>
            <p className="py-2 border-b mx-8 ">send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 ">
          <img
            className="w-20 mx-auto bg-transparent"
            src={doubleUser}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center font-bold text-4xl">$194</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 ">2 Granted User</p>
            <p className="py-2 border-b mx-8 ">send up to 4 GB</p>
          </div>
          <button className="text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4md:my-0 my-8 rounded-lg hover:scale-105 duration-300 ">
          <img className="w-20 mx-auto bg-white" src={multiUser} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Multi User</h2>
          <p className="text-center font-bold text-4xl">$549</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1000 GB Storage</p>
            <p className="py-2 border-b mx-8 ">8 Granted User</p>
            <p className="py-2 border-b mx-8 ">send up to 8 GB</p>
          </div>
          <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cards;
