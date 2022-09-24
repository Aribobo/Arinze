import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
const Main = () => {
  return (
    <div id="home" className="w-full lg:h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700 mt-20">
            Hi, I'm <span className="text-[#fd7e14]">Arinze</span> Stanley
          </h1>
          <h1 className="py-4 text-gray-700"> A Fullstack Developer </h1>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something cute together
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiOutlineMail />
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsFillPersonFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
