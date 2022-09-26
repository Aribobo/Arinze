import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub,FaTwitter } from "react-icons/fa";

import { useRouter } from "next/router";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [NavBg, setNavBg] = useState("#d7c69d");
  const [LinkColor, setLinkColor] = useState("#1e1e20");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/Propert" || router.asPath === "/Twitch") {
      setNavBg("#d7c69d");
      setLinkColor("#1e1e20");
    } else {
      setNavBg("#d7c69d");
      setLinkColor("#1e1e20");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${NavBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <p className="text-gray-800 font-bold text-4xl pb-6 cursor-pointer hover:scale-105 ease-in duration-300">
            Ari<span className="text-[#fd7e14]">nze</span>
          </p>
        </Link>
        <div>
          <ul style={{ color: `${LinkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-md  uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10  text-md uppercase hover:border-b">About</li>
            </Link>

            <Link href="/#skills ">
              <li className="ml-10  text-md uppercase hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/#project">
              <li className="ml-10  text-md uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10  text-md uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#d7c69d] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <p className=
                "text-gray-800 font-bold text-4xl cursor-pointer hover:scale-105 ease-in duration-300 pb-6"onClick={() => setNav(false)}>
                  Ari<span className="text-[#fd7e14]">nze</span>
                </p>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-xl">
                
                Let&apos;s Build And Deploy
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#home">
                <li className="py-4  text-md" onClick={() => setNav(false)}>
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li className="py-4  text-md" onClick={() => setNav(false)}>
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li className="py-4  text-md" onClick={() => setNav(false)}>
                  Skills
                </li>
              </Link>
              <Link href="/#project">
                <li className="py-4  text-md" onClick={() => setNav(false)}>
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li className="py-4  text-md" onClick={() => setNav(false)}>
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-20 ">
              <p className="uppercase tracking-widest text-[#fd7e14] text-xl">
                Let&apos;s Connect
              </p>
              <div
                div
                className="flex items-center justify-between my-4 w-full sm:w-[80%]"
              >
               <a href="https://www.linkedin.com/in/ArinzeStanley"><div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn size={22}/>
                </div>
                </a>
                <a href="https://github.com/Aribobo"><div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub size={22}/>
                </div>
                </a>
                <a href="mailto:stanleyemanuel04@gmail.com">
                <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail size={22}/>
                </div>
                </a>

                 <a href="https://twitter.com/StansTech">       
                <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaTwitter size={22} />
                </div>
                </a> 
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
