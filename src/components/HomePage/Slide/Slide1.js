import React from "react";

function Slide1() {
  return (
    <div className="bg-slide1 h-screen bg-no-repeat bg-center bg-cover relative">
      <div className=" w-4/5 mx-auto text-white relative top-1/2 -translate-y-1/2">
        <h5 className="uppercase select-none lg:text-left text-center">
          Financial software development services
        </h5>
        <h1 className="uppercase my-6 select-none lg:text-left text-center">
          Business Agency
        </h1>
        <h5 className=" select-none lg:text-left text-center">
          Digital Solution For Financial Services Industry
        </h5>
        <h5 className=" mb-8 select-none lg:text-left text-center">
          Digital transformation in Financial services: technology and solution
          mindset
        </h5>
        <button className="btn relative left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Slide1;
