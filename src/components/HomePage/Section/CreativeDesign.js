import React from "react";
import CreativeDesignImg from "../../../assets/images/techvideo-min.jpg";

const CreativeDesign = () => {
  return (
    <div className="lg:flex justify-center items-center mt-10">
      <div className="lg:w-1/2 bg-circle py-20">
        <div className="w-10/12 mx-auto">
          <h2 className="text-white">A Creative Design Agency</h2>
          <p className="text-white mt-10">
            Building a brand doesn’t happen overnight. It takes a lot of work to
            forge strong relationships with people—and much of that work is done
            through marketing. Unless you have a powerhouse internal team to
            help you tell your story, it’s likely...
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 overflow-hidden">
        <img
          src={CreativeDesignImg}
          alt="CreativeDesignImg"
          className="w-full hover:scale-150 duration-500 hover:ease-in-out cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CreativeDesign;
