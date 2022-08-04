import React from "react";
import InsightsImg from "../../../assets/images/icon-03.png";
import ReportImg from "../../../assets/images/icon-01.png";
import InspirationImg from "../../../assets/images/icon-02.png";

const Industry = () => {
  return (
    <div className="bg-page mt-20">
      <div className="w-11/12 md:w-5/6 mx-auto lg:w-11/12 xl:w-9/12 lg:flex pb-10">
        <div className="lg:w-2/5 lg:mr-8">
          <h2 className=" mt-16 font-">Industry Solutions</h2>
          <div className=" w-24 h-1 border-b-2 my-6 border-green3"></div>
          <p className="mb-3 text-justify">
            Bring your ideas for mobile applications, web services or more
            complex solutions to life with us. Work with a team...
          </p>
          <p className="text-justify">
            Find out how SpaceFintech’s products and solutions are helping
            enterprises benefit from blockchain technology ...
          </p>
        </div>
        <div className="md:flex md:justify-around lg:w-3/5 mt-8">
          <div className="flex flex-col items-center justify-center">
            <img
              src={InsightsImg}
              alt="insights"
              className=" w-10 h-14 mb-14"
            />
            <h3 className="font-bold mb-4 tracking-wider">App Insights</h3>
            <p>A comprehensive...</p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <img src={ReportImg} alt="insights" className=" w-10 h-14 mb-14" />
            <h3 className="font-bold mb-4 tracking-wider">Reports</h3>
            <p>A platform where you...</p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <img
              src={InspirationImg}
              alt="insights"
              className=" w-10 h-14 mb-14"
            />
            <h3 className="font-bold mb-4 tracking-wider">Inspiration</h3>
            <p>A digital daily which...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
