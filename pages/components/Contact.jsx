//import React, { useRef } from 'react';
//import emailjs from '@emailjs/browser';
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { FaLinkedinIn, FaGithub,FaTwitter } from "react-icons/fa";
import Link from "next/link";


const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-2xl tracking-widest uppercase text-[#fd7e14]">
          Contact
        </p>

        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {/*left*/}

          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-700 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                {/* <img className='rounded-xl hover:scale-105 ease-in duration-300' src='aribobo.jpg' alt='/'/> */}
              </div>
              <div>
                <h2 className="py-4">
                  Arinze <span className="text-[#fd7e14]">Stanley</span>
                </h2>
                <p className="text-2xl">Full Stack Developer</p>
                <p className="py-2 text-2xl">
                  {" "}
                  I am available for freelance or full time position.
                </p>
                <a href="mailto:stanleyemanuel04@gmail.com">
                  <p className="py-2 text-gray-800 underline cursor-pointer text-2xl">
              Email me
            </p>
            </a>
              </div>
              <div>
                <p className="uppercase pt-8 text-[#fd7e14]  text-bold  text-xl">Connect With Me</p>
              </div>
              <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <a href="https://www.linkedin.com/in/ArinzeStanley">
                <div className="rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                </a>
                <a href="https://github.com/Aribobo"><div className="rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                </a>
                <a href="mailto:stanleyemanuel04@gmail.com">
                <div className="rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                </a>
                <a href="https://twitter.com/StansTech"> 
                <div className="rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaTwitter />
                </div>
                </a>
              </div>
              <div className="flex flex-col justify-center items-center text-center  p-5 bg-[#d7c69d] pb-4">
                <h4 className=" text-gray-800 font-semibold text-xl">
                 
                Made with ❤ by <span className=" font-semibold">  
                    Arinze <span className="text-[#fd7e14]">Stanley</span>
                  </span>
                </h4>
              </div>
              <center>
              <Link href="/#home">
              <HiOutlineChevronDoubleUp size={30} className="rounded-full shadow-lg 
              shadow-gray-700 cursor-pointer hover:scale-105 ease-in duration-300"/>
              </Link>
              
              </center>
            </div>
          </div>
          {/*right*/}
        </div>
      </div>
    </div>
  );
};

export default Contact;
