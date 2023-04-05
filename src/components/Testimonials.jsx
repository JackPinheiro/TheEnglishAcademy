import React from "react";
import { Link } from "react-router-dom";
import { testimonials_EN } from "../data/data-info/testimonial-data";

const testi_slice = testimonials_EN.slice(0, 3);

const Testimonials = () => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="items-end justify-between sm:flex">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Trusted testimonials from our students
            </h2>
          </div>

          <Link
            to="/testimonials"
            className="mt-8 inline-flex shrink-0 items-center gap-2 rounded-full border border-pink-600 px-5 py-3 font-medium text-pink-600 hover:bg-pink-600 hover:text-white sm:mt-0 lg:mt-8"
          >
            Read all testimonials
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </Link>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testi_slice.map((test) => (
            <blockquote class="flex h-full flex-col justify-between bg-white p-12">
              <div>
                <div class="mt-1">
                  <h3 class="text-xl font-bold text-pink-600 sm:text-2xl">
                    {test.name}
                  </h3>
                  <p>- {test.title}</p>

                  <p class="mt-4 text-gray-600">{test.description}</p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
