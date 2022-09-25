import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub,FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full lg:h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700 mt-20">
            Hi, I'm <span className="text-[#fd7e14]">Arinze</span> Stanley
          </h1>
          <h1 className="py-4 text-gray-700"> A Fullstack Developer </h1>
          <p className="uppercase text-xl tracking-widest text-gray-700">
          Let's Build And Deploy
          </p>
          <Link href="/#project">
          <button className="px-8 py-2 mt-4 mb-4 mr-4">View Projects</button>
          </Link>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/ArinzeStanley"><div className="rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
             <FaLinkedinIn  size={25} />
            </div>
            </a>
            <a href="https://github.com/Aribobo">
            <div className="rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaGithub  size={25}/>
            </div>
            </a>
            <a href="mailto:stanleyemanuel04@gmail.com">
            <div className="rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiOutlineMail size={25} />
            </div>
            </a>
            <a href="https://twitter.com/StansTech"> 
            <div className="rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaTwitter size={25}/>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
