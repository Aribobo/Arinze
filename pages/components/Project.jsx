import React from "react";
import Link from "next/link";
import Projectitems from "./Projectitems";
const Project = () => {
  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-2xl tracking items-center uppercase text-[#fd7e14]">
          Projects
        </p>
        <h2 className="py-4"> What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Projectitems
            title="Iphoundit"
            backgroundImg="iphoundit.png"
            projectUrl="Property"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
