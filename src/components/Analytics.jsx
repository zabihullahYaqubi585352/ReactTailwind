import React from "react";
import Laptop from "../assets/laptop1.jpg";

const analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px grid md:grid-cols-2">
        <img src={Laptop} className="w-[500px ]" alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a]">Data Analytics DashBorad</p>
          <h1 className="md: text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            ipsa unde amet deserunt impedit eaque esse quibusdam provident
            earum, tenetur sint minima enim corrupti animi error a repellendus?
            Deserunt, quis!
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-2">
            Get Started{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default analytics;
