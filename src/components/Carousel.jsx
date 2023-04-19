import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ children: imgs }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? imgs.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === imgs.length - 1 ? 0 : curr + 1));

  const goToSlide = (i) => {
    setCurr(i);
  };

  return (
    <div className="relative overflow-hidden rounded-md">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {imgs}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <ChevronRight />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {imgs.map((_, i) => (
            <button
              onClick={() => goToSlide(i)}
              className={`h-3 w-3 rounded-full bg-white transition-all ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
