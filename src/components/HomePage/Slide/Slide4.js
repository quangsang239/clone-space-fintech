import React from "react";

function Slide4() {
  return (
    <div className="bg-slide4 h-screen bg-no-repeat bg-cover bg-center relative">
      <div className=" w-4/5 mx-auto text-white relative top-1/2 -translate-y-1/2">
        {/* <h5 className="uppercase select-none">
          Seizing Marketplace opportunities
        </h5> */}
        <h2 className="uppercase mb-6 select-none text-center lg:text-left">
          technology transformation
        </h2>

        <p className=" mb-8 select-none text-center lg:text-left lg:w-3/6">
          We think the winning companies will be those that not only embrace
          fintech-driven business models but figure out how to navigate wider
          and more crowded lanes with approaches that make the most of FS and
          TMT’s combined strengths. This report will explore the current fintech
          landscape, the factors that will determine the likely winners and
          losers in coming years, and the steps that organisations can take to
          put themselves in the best position to lead.
        </p>
        <button className="btn relative left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Slide4;
