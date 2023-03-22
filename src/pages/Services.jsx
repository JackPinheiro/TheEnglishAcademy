import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/data-info/services-card-data";

const Services = () => {
  return (
    <Fragment>
      <section className="container mx-auto flex flex-wrap"></section>
      <div className="container mx-auto my-4 grid grid-cols-5 gap-6">
        {services.map((serv) => (
          <Link to="/services/:id">
            <div className="lg mx-auto max-h-96 w-60  overflow-hidden rounded-lg bg-white shadow-xl transition ease-in-out hover:scale-105">
              <img
                className="h-2/5 w-full object-cover"
                src={serv.image}
                alt={serv.alt}
              />
              <div className="p-5">
                <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900">
                  {serv.title}
                </h5>
                <p class="mb-3 text-center font-normal text-gray-700">
                  {serv.text}
                </p>
                <button className="rounded-lg bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:bg-blue-800">
                  Read more
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default Services;
