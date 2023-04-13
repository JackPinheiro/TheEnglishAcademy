import React, { Fragment, useEffect, useState } from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import { services } from "../data/data-info/services-card-data";
import LoadingSpinner from "../components/LoadingSpinner";

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const onPageLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  const renderServices = (
    <div className="mx-auto grid max-w-xs grid-cols-1 gap-8 sm:max-w-lg sm:grid-cols-2 sm:gap-x-12 md:max-w-2xl  md:grid-cols-3 md:gap-10 lg:max-w-4xl lg:grid-cols-4 lg:gap-14">
      {services.map((service) => (
        <Link to={service.slug} key={service.title}>
          <article className="flex h-80  flex-col gap-1 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md transition-all hover:shadow-xl md:hover:scale-105">
            <img
              alt={service.title}
              src={service.image}
              className="h-40 w-auto object-cover"
            />

            <div className="flex flex-col p-2 ">
              <h3 className=" text-center text-lg font-bold text-gray-900 sm:text-xl">
                {service.title}
              </h3>
              <p className="text-md mt-2 text-center text-gray-900">
                {service.text}
              </p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );

  return (
    <Fragment>
      <ScrollRestoration />
      <section className="bg-gray-100 py-10 px-4">
        <h2 className="mb-4 text-center text-4xl font-bold tracking-tight sm:text-5xl">
          What we have to offer
        </h2>
        {!isLoading ? renderServices : <LoadingSpinner />}
      </section>
    </Fragment>
  );
};

export default Services;
