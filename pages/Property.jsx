import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
const Property = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] max-auto p-2 grid md:grid-cols-5 gap-6 pt-20 px-4">
        <div className="col-span-4 text-xl">
          <h2 className=" text-gray-700 ">Project</h2>
          <br />
          <p className="text-[#fd7e14] text-2xl">Overview</p>

          <br />
          
          <p>
            Iphoundit is a startup real estate website that helps individuals with property listings such as 
            House for rent, House for sale, Shops to let and Lands for sale.
           
            </p>
            <br />

            <p>
            I built it with Next Js, Tailwind Css, Authentication for the Admin with Next Auth(Credential Provider),
             Restful API, MongoDb database
            and Cloudinary for storing uploaded images of respective properties.
          </p>
          <br />
          <p>
           Hey Hey sorry!! the buttons below(Demo and Code) is not functional as Iphoundit is under production
            <br />
          Keep visiting as it's on track.
          </p>
          <br />
          <button className="px-8 py-2 mt-4 mr-8 ">Demo</button>
          <button className="px-8 py-2 mt-4 mr-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-700 rounded-xl p-4 text-md">
          <div className="p-2">
            <p className="text-center font-bold pb-2 mb-8 text-md text-gray-700 ">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-700 py-2 flex items-center mb-10">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-700 py-2 flex items-center mb-10">
                <RiRadioButtonFill className="pr-1" /> Next Js
              </p>
              <p className="text-gray-700 py-2 flex items-center mb-10">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-700 py-2 flex items-center mb-10">
                <RiRadioButtonFill className="pr-1" /> MongoDb
              </p>
              <p className="text-gray-700 py-2 flex items-center mb-10">
                <RiRadioButtonFill className="pr-1" />
                Cloudinary
              </p>
            </div>
          </div>
        </div>
        <Link href="/#project">
          <p className="underline cursor-pointer text-2xl">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Property;
