import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../data/data-info/services-card-data";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((serv) => serv.slug === slug);

  return (
    <section>
      <div className="flex h-32 items-center justify-center bg-gray-100 ">
        <h2 className="font-custom text-6xl">{service.title}</h2>
      </div>
      <div class="relative mx-auto w-full max-w-7xl items-center px-5 py-24 md:px-12 lg:px-16">
        <div class="mx-auto w-full text-left">
          <div class="relative m-auto flex-col items-center align-middle">
            <div class="items-center gap-12 text-left lg:inline-flex lg:gap-24">
              <div class="order-first mt-12 block aspect-square w-full lg:mt-0">
                <img
                  class="mx-auto w-full rounded-xl  bg-gray-300 object-cover object-center lg:ml-auto"
                  alt="hero"
                  src={service.image}
                />
              </div>
              <div class="flex flex-col">
                <div class="mx-auto  lg:max-w-7xl">
                  <ul
                    role="list"
                    class="grid list-none grid-cols-2 gap-4 lg:grid-cols-1 lg:gap-3"
                  >
                    <li>
                      <div>
                        <p class="mt-5 text-lg font-medium leading-6 text-black">
                          About
                        </p>
                      </div>
                      <div class="mt-2 text-base text-gray-500">
                        {service.description}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
