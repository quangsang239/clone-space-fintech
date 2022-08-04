import React, { useState } from "react";
import AllProduct from "./AllProduct";
import Graphic from "./Graphic";

const Index = () => {
  const [currentProduct, setCurrentProduct] = useState("all");
  return (
    <div className="w-5/6 md:w-4/6 mx-auto xl:w-9/12 pb-10">
      <h2 className="mt-36 text-center">Recent Projects</h2>
      <p className="mt-5 mb-10 text-center">
        Project overview, technology products.
      </p>
      <div className="mx-auto text-center text-xl">
        <span
          className={`cursor-pointer ${
            currentProduct === "all" ? "text-green3" : ""
          }`}
          onClick={() => setCurrentProduct("all")}
        >
          All
        </span>{" "}
        /{" "}
        <span
          className={`cursor-pointer ${
            currentProduct === "graphic" ? "text-green3" : ""
          }`}
          onClick={() => setCurrentProduct("graphic")}
        >
          Graphic Design
        </span>{" "}
        /{" "}
        <span
          className={`cursor-pointer ${
            currentProduct === "web" ? "text-green3" : ""
          }`}
          onClick={() => setCurrentProduct("web")}
        >
          Web Design
        </span>{" "}
        /{" "}
        <span
          className={`cursor-pointer ${
            currentProduct === "seo" ? "text-green3" : ""
          }`}
          onClick={() => setCurrentProduct("seo")}
        >
          SEO
        </span>{" "}
        /{" "}
        <span
          className={`cursor-pointer ${
            currentProduct === "marketing" ? "text-green3" : ""
          }`}
          onClick={() => setCurrentProduct("marketing")}
        >
          Marketing
        </span>
      </div>
      <Graphic />
    </div>
  );
};

export default Index;
