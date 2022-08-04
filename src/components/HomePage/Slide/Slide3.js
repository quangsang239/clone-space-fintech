import React from "react";

function Slide3() {
  return (
    <div className="bg-slide3 h-screen bg-no-repeat bg-cover bg-center relative">
      <div className=" w-4/5 mx-auto text-white relative top-1/2 -translate-y-1/2">
        <h5 className="uppercase select-none text-center lg:text-right">
          Seizing Marketplace opportunities
        </h5>
        <h1 className="uppercase my-6 select-none text-center lg:text-right">
          Business Agency
        </h1>
        {/* <h5 className=" select-none text-right">
          Digital Solution For Financial Services Industry
        </h5> */}
        <h5 className="mb-8 select-none text-center lg:text-right">
          Firms that already have embedded fintech and are beginning to fuse TMT
          and FS strengths are set to seize most of <br /> the opportunities in
          the marketplace for differentiation and growth.
        </h5>
        <button className="btn relative left-1/2 -translate-x-1/2 lg:left-full lg:-translate-x-full">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Slide3;
