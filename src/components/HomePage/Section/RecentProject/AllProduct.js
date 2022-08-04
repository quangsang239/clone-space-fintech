import React from "react";
import Project1 from "../../../../assets/images/work-1-min.jpg";
import Project2 from "../../../../assets/images/work-3-min.jpg";
import Project3 from "../../../../assets/images/work-4-min.jpg";
import Project4 from "../../../../assets/images/work-5-min.jpg";
import Project5 from "../../../../assets/images/work-7-min.jpg";
import Project6 from "../../../../assets/images/work-8-min.jpg";
import Project7 from "../../../../assets/images/work-11-min.jpg";
import Project8 from "../../../../assets/images/work-12-min.jpg";

const AllProduct = () => {
  return (
    <div className="overflow-hidden w-full mt-10">
      <div className="md:flex overflow-hidden w-full">
        <div className="flex overflow-hidden w-full">
          <div className="overflow-hidden w-1/2">
            <img
              src={Project1}
              alt=""
              className="hover:scale-150 duration-500 hover:ease-in-out cursor-pointer w-full"
            />
          </div>
          <div className="overflow-hidden w-1/2">
            <div className="overflow-hidden">
              <img
                src={Project6}
                alt=""
                className="hover:scale-150 duration-500 hover:ease-in-out cursor-pointer w-full"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={Project2}
                alt=""
                className="hover:scale-150 duration-500 hover:ease-in-out cursor-pointer w-full"
              />
            </div>
          </div>
        </div>
        <div className="overflow-hidden w-full">
          <img
            src={Project3}
            alt=""
            className="hover:scale-150 duration-500 hover:ease-in-out cursor-pointer w-full"
          />
        </div>
      </div>
      <div className="flex overflow-hidden">
        <div className="overflow-hidden">
          <img
            src={Project4}
            alt=""
            className="hover:scale-150 duration-500 hover:ease-in-out cursor-pointer"
          />
        </div>
        <div className="overflow-hidden">
          <div className="overflow-hidden">
            <img
              src={Project8}
              alt=""
              className="hover:scale-150 duration-500 hover:ease-in-out cursor-pointer"
            />
          </div>
          <div className="flex overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={Project5}
                alt=""
                className="hover:scale-150 duration-500 hover:ease-in-out cursor-pointer"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={Project7}
                alt=""
                className="hover:scale-150 duration-500 hover:ease-in-out cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
