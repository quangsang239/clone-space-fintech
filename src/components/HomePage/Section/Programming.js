import React from "react";
import ProgrammingImg from "../../../assets/images/len.png";

const Programming = () => {
  return (
    <div className="relative w-11/12 md:w-5/6 mx-auto lg:w-9/12 pb-10 md:mt-12 mt-8 ">
      <h2 className="text-center font-bold tracking-wider">
        Programming Languages
      </h2>
      <div className="md:flex mt-10">
        <div className="md:mr-5 md:w-2/5">
          <p className="text-justify">
            Once, only a few people were considered computer programmers with
            cutting-edge coding skills. Now, many IT jobs require a solid grasp
            of the top programming languages — yes, more than one.
          </p>
          <p className="mt-2 text-justify">
            If you’re trying to advance in your career or change careers
            completely and need to master a programming language, you might
            wonder which one to learn. After all, it will take time and money to
            learn the language, so you want to make the right choice.
          </p>
          <p className="mt-2 text-justify">
            Several considerations come into play when making your decision,
            like the difficulty level you’re willing to learn, the knowledge you
            already possess that align with your existing coding skills, or your
            reasons for learning a top programming language.
          </p>
          <p className="mt-2 text-justify">
            Whether you want to develop a mobile application, get certification
            for programming knowledge, or learn new skills, you need to learn
            the right programming language.
          </p>
        </div>
        <img
          src={ProgrammingImg}
          alt="ProgrammingImg"
          className="md:w-3/5 max-h-program mx-auto"
        />
      </div>
    </div>
  );
};

export default Programming;
