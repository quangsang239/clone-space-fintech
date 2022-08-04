import React from "react";
import MarketingImg from "../../../assets/images/business.jpg";

const MarketingBusiness = () => {
  return (
    <div className="relative lg:flex w-11/12 md:w-5/6 mx-auto lg:w-9/12 pb-10 md:mt-20 mt-8 ">
      <div className="lg:w-1/2 lg:mr-10 relative min-h-page max-h-page overflow-hidden mx-auto">
        <div className="hidden sm:block absolute w-11/12 h-4/6 bg-circle overflow-hidden"></div>
        <img
          src={MarketingImg}
          alt="images"
          className=" absolute sm:top-5 sm:left-5"
        />
      </div>
      <div className="mt-0 md:mt-5 lg:mt-0 lg:w-1/2">
        <h2 className="text-3xl lg:text-4xl">
          We are{" "}
          <h2 className="inline text-3xl lg:text-4xl text-green3">
            making business{" "}
          </h2>{" "}
          better for everyone
        </h2>
        <p className=" text-justify">
          Fintech or Financial technology translates the potential of data to be
          monetized. We provide comprehensive consulting services, financial
          services software engineering together with the key technology
          acceleration solutions to gear up for fintech software development
          consumer-oriented services in different industry sectors.
        </p>
        <p className=" text-justify">
          From ideation to POC, to deployment, to all-inclusive support, our
          professionals harness innovation and deliver an end-to-end experience
          that includes strategy, architecture, customer experience, service
          management - all within a new fintech ecosystem. Actualize innovations
          with the right tech partner.
        </p>
        <button className="relative btn border-2 border-solid border-black mt-4 md:left-0 left-1/2 -translate-x-1/2 md:translate-x-0">
          learn more
        </button>
      </div>
    </div>
  );
};

export default MarketingBusiness;
