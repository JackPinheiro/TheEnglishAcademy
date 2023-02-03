import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { services } from "../data";

const Services = () => {
  return (
    <Fragment>
      <div className="container mx-auto my-4 grid grid-cols-5 gap-6">
        {services.map((serv) => (
          <div className="max-w-xs overflow-hidden rounded-lg border border-gray-200 bg-white shadow hover:scale-105">
            <Link to="/services/:id">
              <img
                className="w-full rounded-t-lg"
                src={serv.image}
                alt={serv.alt}
              />
            </Link>
            <div className="p-5">
              <Link to="/services/:id">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {serv.title}
                </h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {serv.text}
              </p>
              <Link
                to="/services/:id"
                className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Read more
                {/* ICON */}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Services;
