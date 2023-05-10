import React from "react";
import { about_EN } from "../data/data-info/about-data";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const About = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-cus text-4xl font-bold tracking-tight sm:text-5xl">
            Unlock Your Language Potential
          </h2>
        </div>

        <div className="mt-16 mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16">
          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p className="text-xl">{about_EN.about}</p>
              <Link
                to="/services"
                className="inline-block rounded bg-[#012169] px-12 py-3 text-sm font-medium text-white shadow-xl transition duration-300  hover:bg-[#023BC0] focus:outline-none focus:ring active:bg-rose-500 "
              >
                Our services
              </Link>
            </article>
          </div>
          <div className="max-w-lg">
            <Carousel>
              {about_EN.images.map((i) => (
                <img src={i} />
              ))}
            </Carousel>
          </div>
        </div>

        <h2 className="font-cus text-4xl font-bold tracking-tight sm:text-5xl">
          From England to Portugal: The Journey of an ESL Teacher and
          Entrepreneur
        </h2>
        <div className="mt-16 mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-2xl sm:h-80 lg:h-full">
            <img
              alt="The English Academy entrance with kids jumping"
              src={about_EN.image_director}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="order-first md:order-last lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p>{about_EN.about_director}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
