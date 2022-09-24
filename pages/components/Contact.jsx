//import React, { useRef } from 'react';
//import emailjs from '@emailjs/browser';
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#fd7e14]">
          Contact
        </p>

        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {/*left*/}

          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                {/* <img className='rounded-xl hover:scale-105 ease-in duration-300' src='aribobo.jpg' alt='/'/> */}
              </div>
              <div>
                <h2 className="py-4">
                  Arinze <span className="text-[#fd7e14]">Stanley</span>
                </h2>
                <p>Full Stack Developer</p>
                <p className="py-2">
                  {" "}
                  I am available for freelancee or full-time position.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-[#fd7e14]">Connect With Me</p>
              </div>
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
              <div className="flex flex-col justify-center items-center text-center  p-5 bg-[#ecf0f3]">
                <h4 className=" text-gray-800 font-semibold">
                  Made with ❤ by{" "}
                  <span className=" font-semibold">
                    Arinze <span className="text-[#fd7e14]">Stanley</span>{" "}
                  </span>
                </h4>
              </div>
            </div>
          </div>
          {/*right*/}
        </div>
      </div>
    </div>
  );
};

export default Contact;
