import React, { Fragment } from "react";
import { useParams, ScrollRestoration, Link } from "react-router-dom";
import { services } from "../data/data-info/services-card-data";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((serv) => serv.slug === slug);
  const img = service.image;

  return (
    <Fragment>
      <ScrollRestoration />
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="absolute inset-0 bg-transparent bg-gradient-to-l from-white/95 to-white/25"></div>
        <div className="relative mx-auto h-screen max-w-screen-xl ">
          <div className="mx-auto text-center lg:max-w-3xl ">
            <h1 className="p-8 font-bold lg:text-5xl">{service.title}</h1>

            <div className="mx-auto rounded border-2 bg-white bg-opacity-80 p-8 lg:max-w-2xl ">
              <p className="whitespace-pre-line lg:text-xl   ">
                {service.description}
              </p>

              <button className="mt-8 rounded-md bg-[#012169] px-6 py-2.5 font-medium text-white shadow  transition duration-300 hover:bg-[#023BC0] focus:outline-none focus:ring focus:ring-yellow-400">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ServiceDetail;
