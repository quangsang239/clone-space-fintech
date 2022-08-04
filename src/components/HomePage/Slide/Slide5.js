import React from "react";

function Slide5() {
  return (
    <div className="bg-slide5 h-screen bg-no-repeat bg-cover bg-center relative">
      <div className=" w-4/5 mx-auto text-white relative top-1/2 -translate-y-1/2">
        {/* <h5 className="uppercase select-none">
          Seizing Marketplace opportunities
        </h5> */}
        <h2 className="uppercase mb-6 select-none text-center lg:text-right">
          technology transformation
        </h2>
        {/* <h5 className=" select-none text-right">
          Digital Solution For Financial Services Industry
        </h5> */}
        <p className="mb-6 font-light relative select-none lg:w-3/6 text-center lg:text-right lg:left-full lg:-translate-x-full ">
          Using our market leading studies, data, and expert analyses, we
          pinpoint the forces making an immediate impact on your business—and
          empower you to reinvent the future by examining global macrotrends,
          exploring sector-specific shifts, and discovering the latest
          technological tools to drive change.
        </p>

        <button className="btn relative left-1/2 -translate-x-1/2 lg:left-full lg:-translate-x-full">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Slide5;
