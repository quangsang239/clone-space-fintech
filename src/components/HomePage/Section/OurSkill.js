import React from "react";
import OurSkillImg from "../../../assets/images/skill1-min.png";

const OurSkill = () => {
  return (
    <div className="w-11/12 md:w-5/6 mx-auto lg:w-11/12 xl:w-9/12 pb-20">
      <h2 className="text-center mt-16 font-bold">Our Skills And Qualities</h2>
      <div className="md:flex justify-center items-center mt-10">
        <img src={OurSkillImg} alt="OurSkillImg" className="md:w-2/5 mx-auto" />
        <div className="md:w-3/5 md:ml-16 mx-auto">
          <div className="mt-10 md:mt-0">
            <h5>Design</h5>
            <div className="h-4 w-full bg-slate-300 mt-1 rounded-md overflow-hidden">
              <p className="h-4 w-7/12 bg-green3"></p>
            </div>
          </div>
          <div className="mt-10">
            <h5>Marketing</h5>
            <div className="h-4 w-full bg-slate-300 mt-1 rounded-md overflow-hidden">
              <p className="h-4 w-8/12 bg-circle"></p>
            </div>
          </div>
          <div className="mt-10">
            <h5>Developer</h5>
            <div className="h-4 w-full bg-slate-300 mt-1 rounded-md overflow-hidden">
              <p className="h-4 w-10/12 bg-green3"></p>
            </div>
          </div>
          <div className="mt-10">
            <h5>Blockchain</h5>
            <div className="h-4 w-full bg-slate-300 mt-1 rounded-md overflow-hidden">
              <p className="h-4 w-11/12 bg-circle"></p>
            </div>
          </div>
          <div className="mt-10">
            <h5>SEO</h5>
            <div className="h-4 w-full bg-slate-300 mt-1 rounded-md overflow-hidden">
              <p className="h-4 w-full bg-green3"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSkill;
