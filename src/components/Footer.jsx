import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaInstagramSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="text-3xl font-bold text-[#00df9a]">React.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
          deleniti esse architecto aut ad tempore nobis nulla eos voluptatibus
          corrupti, veritatis nam, perferendis doloremque. Iure hic earum
          inventore quo nemo.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>

      <div className=" lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="p-2 text-sm">Analytics</li>
            <li className="p-2 text-sm">Marketing</li>
            <li className="p-2 text-sm">Commerces</li>
            <li className="p-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="p-2 text-sm">Pricing</li>
            <li className="p-2 text-sm">Documention</li>
            <li className="p-2 text-sm">Guides</li>
            <li className="p-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="p-2 text-sm">About</li>
            <li className="p-2 text-sm">Blog</li>
            <li className="p-2 text-sm">Jobs</li>
            <li className="p-2 text-sm">press</li>
            <li className="p-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="p-2 text-sm">Clain</li>
            <li className="p-2 text-sm">Policy</li>
            <li className="p-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
