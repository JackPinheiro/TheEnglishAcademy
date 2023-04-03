import React from "react";
import { testimonials_EN } from "../data/data-info/testimonial-data";

const Testimonial = () => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials_EN.map((test) => (
            <blockquote
              key={test.name}
              className="flex h-full flex-col justify-between bg-white p-12"
            >
              <div>
                <div className="mt-1">
                  <h3 className="text-xl font-bold text-pink-600 sm:text-2xl">
                    {test.name}
                  </h3>
                  <p>- {test.title}</p>

                  <p className="mt-4 text-gray-600">{test.description}</p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
