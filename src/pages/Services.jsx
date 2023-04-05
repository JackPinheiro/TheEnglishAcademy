import React, { Fragment } from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import { services } from "../data/data-info/services-card-data";

const Services = () => {
  return (
    <Fragment>
      <ScrollRestoration />
      <section className="bg-gray-100 py-10 px-4">
        <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Services we offer you
        </h2>

        <div className="mx-auto grid max-w-lg grid-cols-1 gap-8 lg:max-w-6xl lg:grid-cols-2">
          {services.map((service, key) => (
            <Link to={service.title} key={service.title}>
              <article className="flex gap-1 overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl md:hover:scale-105">
                <img
                  alt="Office"
                  src={service.image}
                  className="h-40 w-40 object-cover"
                />

                <div className="flex flex-col p-2 ">
                  <h3 className=" text-lg font-bold text-gray-900 sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-md mt-2 text-gray-900">{service.text}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
