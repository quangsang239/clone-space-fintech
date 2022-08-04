import React from "react";
import TechnologyImg from "../../../assets/images/sunn.png";

const Technology = () => {
  return (
    <div className="bg-page mt-5">
      <div className="w-11/12 md:w-5/6 mx-auto lg:w-11/12 xl:w-9/12 pb-10 pt-10">
        <h2 className="font-bold text-center tracking-wider">Technology</h2>
        <div className="md:flex mt-5">
          <p className="text-justify md:w-1/2 md:mr-5">
            Technology today is evolving at such a rapid pace, enabling faster
            change and progress, causing an acceleration of the rate of change,
            until eventually, it will become exponential. However, it is not
            only technology trends and top technologies that are evolving, a lot
            more has changed this year due to the outbreak of COVID-19 making IT
            professionals realize that their role will not stay the same in the
            contactless world tomorrow. And an IT professional in 2020-21 will
            constantly be learning, unlearning, and relearning (out of necessity
            if not desire).
          </p>
          <img src={TechnologyImg} alt="TechnologyImg" className="md:w-1/2" />
        </div>
        <p className="text-justify mt-3">
          What does this mean for you? It means staying current with new
          technology trends. And it means keeping your eyes on the future to
          know which skills you’ll need to know to secure a safe job tomorrow
          and even learn how to get there. All bows to the worldwide pandemic,
          most of the global IT population is sitting back, working from home.
        </p>
        <p className="text-justify mt-3">
          How will the latest technologies transform your business? Future Tech
          Trends in Practice will give you the knowledge of today’s most
          important technology trends, and how to take full advantage of them to
          grow your business.
        </p>
        <p className="text-justify mt-3">
          The technology trends along with their potential contributions to
          organisational success. Your business’ll learn how to integrate
          existing advancements and plan for those that are on the way.
        </p>
        <p className="text-justify mt-3">
          your business, too, can prepare your company for the potential and
          power of trending technology by examining these and other areas of
          innovation described in Future Tech Trends in Practice:
        </p>
      </div>
    </div>
  );
};

export default Technology;
