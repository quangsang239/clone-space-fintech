import React from "react";
import Service1 from "../../../assets/images/sv1-min.png";
import Service2 from "../../../assets/images/sv2-min.png";
import Service3 from "../../../assets/images/sv3-min.png";
import Service4 from "../../../assets/images/sv4-min.png";
import Service5 from "../../../assets/images/sv5-min.png";

const OurServices = () => {
  return (
    <div className="bg-services -z-30 relative bg-cover bg-center bg-no-repeat after:opacity-90 after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:bg-black after:-z-10">
      <h2 className="text-center pt-20 text-white ">Our Services</h2>
      <div className="flex pb-32 lg:w-4/6 mx-auto">
        <div className="flex flex-col mx-auto lg:flex-wrap-reverse lg:flex-row justify-center items-center">
          <div className="flex flex-col justify-center items-center lg:w-1/3 mt-14">
            <div>
              <img src={Service3} alt="service" className="max-w-img-service" />
            </div>
            <h3 className="text-white text-center">Blockchain Development</h3>
            <div>
              <p className="text-white text-center">
                If you’re looking for enterprise blockchain
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:w-1/3 mt-14">
            <div>
              <img src={Service4} alt="service" className="max-w-img-service" />
            </div>
            <h3 className="text-white text-center">Security Compliance</h3>
            <div>
              <p className="text-white text-center">
                Did you know that over 60% of companies
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:w-1/3 mt-14">
            <div>
              <img src={Service5} alt="service" className="max-w-img-service" />
            </div>
            <h3 className="text-white text-center">
              Search Engine Optimization
            </h3>
            <div>
              <p className="text-white text-center">
                Too many businesses overlook the value
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:w-1/3 mt-14">
            <div>
              <img src={Service1} alt="service" className="max-w-img-service" />
            </div>
            <h3 className="text-white text-center">Mobile App Development</h3>
            <div>
              <p className="text-white text-center">
                Space Fintech builds powerful
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:w-1/3 mt-14">
            <div>
              <img src={Service2} alt="service" className="max-w-img-service" />
            </div>
            <h3 className="text-white text-center">Custom Product</h3>
            <div>
              <p className="text-white text-center">
                Software is ingrained in our existence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
