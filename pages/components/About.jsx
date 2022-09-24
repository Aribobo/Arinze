import React from "react";
import Link from "next/link";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="py-4 text-[#fd7e14]">Who am I?</h2>
          <p className="py-2 text-gray-600">
            I' am a fullstack developer who focuses on deveopment of greate
            product for both my personal startups and organization across the
            world.
          </p>
          <p className="py-2 text-gray-600">
            After 5 Years into website development my main focus now is building
            cutting edge user experience with mordern tools like serverless
            across all industries.
          </p>
          <Link href="/#project">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl 
flex-items-center justify-center p-4 hover:scale-105 ease-in duration-300"
        >
          <img
            className="rounded-xl"
            src="stations2.jpeg"
            width={700}
            height={200}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
