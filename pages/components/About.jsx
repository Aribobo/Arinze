import React from "react";
import Link from "next/link";
import Image from "next/image";
const About = () => {
  return (
    <div id="about" className="w-full md:h-full p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 text-2xl">
        <div className="col-span-2">
        <p className="text-2xl tracking-widest uppercase text-[#fd7e14]">
          
          About
        </p>
        <h2 className="py-4 text-gray-800">Who I Am</h2>
          <p className="py-2 text-gray-800">
            I am a Fullstack Developer who focuses on deveopment of great
            product for both my startups and organizations across the
            world.
          </p>
          <p className="py-2 text-gray-800">
            After 5 years in Website Development my main focus now is building
            Cutting Edge user experience with modern tools like Serverless
            across all industries.
          </p>
         
        </div>
        <div
          className="w-full h-auto m-auto shadow-xl shadow-gray-700 rounded-xl 
flex-items-center justify-center p-4 hover:scale-105 ease-in duration-300"
        >
          <Image
            className="rounded-xl"
            src="/Authentication.png"
            width={700}
            height={450}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
