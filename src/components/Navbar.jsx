import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const NavHandler = () => {
    setNav(!Nav);
  };
  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
      <h1 className="text-3xl font-bold text-[#00df9a]">React.</h1>
      <ul className="hidden md:flex">
        <li className="p-4"> Home</li>
        <li className="p-4">Company</li>
        <li className="p-4"> Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={NavHandler} className="block md:hidden">
        {!Nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !Nav
            ? " block md:hidden fixed top-0 left-0 w-[60%] h-full  border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] "
        }
      >
        <h1 className="text-3xl font-bold m-4 text-[#00df9a]">React.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-b-gray-700"> Home</li>
          <li className="p-4 border-b border-b-gray-700">Company</li>
          <li className="p-4 border-b border-b-gray-700"> Resources</li>
          <li className="p-4 border-b border-b-gray-700">About</li>
          <li className="p-4 border-b border-b-gray-700">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
