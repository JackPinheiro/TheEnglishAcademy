import React from "react";
import { ArrowDown, ChevronDown } from "react-feather";
import { Link, ScrollRestoration } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-[url('./data/img/hero-md-tiny.jpg')] bg-cover bg-center bg-no-repeat">
      <ScrollRestoration />
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="relative mx-auto h-screen max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-2xlxl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">
            Welcome to
            <div className="mt-4 block lg:text-6xl">
              <strong className="font-main font-normal text-[#012169]">
                The{" "}
              </strong>
              <strong className="font-main font-normal  text-[#C8102E]">
                English{" "}
              </strong>
              <strong className="font-main font-normal  text-[#012169]">
                Academy.
              </strong>
            </div>
          </h1>

          <p className="mx-auto mt-4 max-w-md sm:mx-0 sm:max-w-lg sm:text-xl sm:leading-relaxed">
            "To learn a language is to have one more window from which to look
            at the world." - Chinese Proverb.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-center sm:justify-start ">
            <Link
              to="/"
              className="rounded bg-[#012169] px-12 py-3 text-sm font-medium text-white shadow-xl transition duration-300  hover:bg-[#023BC0] focus:outline-none focus:ring active:bg-rose-500 "
            >
              Contact Us
            </Link>

            <Link
              to="/"
              className="flex items-center gap-2 rounded bg-white px-8 py-3 text-sm font-medium text-gray-800 shadow-xl transition duration-300 hover:bg-[#AAC3FE] hover:text-gray-800 focus:outline-none focus:ring "
            >
              Learn More
              <ArrowDown size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
