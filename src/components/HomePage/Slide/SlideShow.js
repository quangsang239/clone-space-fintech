import { useState, useEffect, useRef } from "react";

import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";

function SlideShow() {
  let mouseX;
  const circle = useRef([1, 2, 3, 4, 5]);
  const [slide, setSlide] = useState(1);
  const handleMouseDown = (e) => {
    mouseX = e.clientX;
  };
  const handleMouseUp = (e) => {
    if (e.clientX - mouseX < 0) {
      if (slide < 5) {
        setSlide(slide + 1);
        // currentSlide++;
        // setSlide(currentSlide);
      } else setSlide(1);
    } else {
      if (slide > 1) {
        setSlide(slide - 1);
        // setSlide(currentSlide);
      } else setSlide(5);
    }
  };
  useEffect(() => {
    // setTimeout(() => {
    //   if (slide < 5) {
    //     setSlide(slide + 1);
    //   } else setSlide(1);
    // }, 3000);
  }, [slide]);
  const handleClickSlide = (slide) => {
    setSlide(slide);
  };
  console.log(slide);
  return (
    <div
      className="relative active:cursor-pointer"
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseUp={(e) => handleMouseUp(e)}
    >
      <div className="md:block hidden absolute z-20 top-1/2 -translate-y-1/2 left-5 w-8">
        <ul className="flex relative flex-col justify-center items-center">
          {circle.current.map((item, index) => (
            <li
              className={`circle ${
                slide === item
                  ? "bg-circle w-6 h-6 border-4"
                  : "w-5 h-5 border-2"
              }`}
              onClick={() => handleClickSlide(item)}
              key={index}
            ></li>
          ))}
        </ul>
      </div>
      <div>
        {slide === 1 ? (
          <Slide1 />
        ) : slide === 2 ? (
          <Slide2 />
        ) : slide === 3 ? (
          <Slide3 />
        ) : slide === 4 ? (
          <Slide4 />
        ) : (
          <Slide5 />
        )}
      </div>
    </div>
  );
}

export default SlideShow;
