import React from "react";
import Link from "next/link";
import Image from "next/image"
const Projectitems = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div
      className="relative flex items-center justify-center h-auto w-full shadow-xl 
      shadow-gray-700 rounded-xl p-4 group hover:bg-gradient-to-r from-[#fd7e14] to-[#1e1e20] opacity-1"
    >
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={`/${backgroundImg}`}
        height={400}
        width={900}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-[#d7c69d] tracking-wider text-center">
          {title}
        </h3>
       <br/>
        {/* <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-[#d7c69d] text-gray-700 font-bold">
            More Info
          </p>
        </Link> */}
      </div>
    </div>
  );
};

export default Projectitems;
