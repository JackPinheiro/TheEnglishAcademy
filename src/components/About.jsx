import React from "react";
import { about_EN } from "../data/data-info/about-data";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-cus font-bold tracking-tight sm:text-5xl">
            The best school for you
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-2xl sm:h-80 lg:h-full">
            <img
              alt="The English Academy entrance with kids jumping"
              src={about_EN.image}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p>{about_EN.about}</p>
              <Link
                to="/services"
                className="inline-block rounded bg-[#012169] px-12 py-3 text-sm font-medium text-white shadow-xl transition duration-300  hover:bg-[#023BC0] focus:outline-none focus:ring active:bg-rose-500 "
              >
                Our services
              </Link>
            </article>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16">
          <div className="order-last md:order-first lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p>{about_EN.about_director}</p>
            </article>
          </div>
          <div className="relative h-64 overflow-hidden rounded-2xl sm:h-80 lg:h-full">
            <img
              alt="The English Academy entrance with kids jumping"
              src={about_EN.image_director}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
