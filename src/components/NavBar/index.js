import React, { useEffect, useState } from "react";
import LogoImg from "../../assets/images/logoFintech.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
function Index() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div
      className={`z-30 fixed w-full h-16 ${
        scrollPosition === 0 ? "" : "bg-primary"
      }`}
    >
      <div className=" absolute w-4/5 flex justify-between items-center left-1/2 -translate-x-1/2 ">
        <img className="w-28 h-14 cursor-pointer" src={LogoImg} alt="" />
        <h5 className="hidden lg:block cursor-pointer text-white">Home</h5>
        <h5 className="hidden lg:block cursor-pointer text-white">About</h5>
        <h5 className="hidden lg:block cursor-pointer text-white">Academy</h5>
        <h5 className="hidden lg:block cursor-pointer text-white">
          Technology
        </h5>
        <h5 className="hidden lg:block cursor-pointer text-white">
          Programming
        </h5>
        <h5 className="hidden lg:block cursor-pointer text-white">Service</h5>
        <h5 className="hidden lg:block cursor-pointer text-white">Careers</h5>
        <h5 className="hidden lg:block cursor-pointer text-white">blog</h5>
        <div className=" flex">
          <FaFacebookF className="hidden md:block w-6 h-6 text-white mr-6" />
          <FaTwitter className="hidden md:block w-6 h-6 text-white" />
        </div>
        <BiMenu className=" md:hidden w-8 h-8 text-white cursor-pointer" />
      </div>
    </div>
  );
}

export default Index;
