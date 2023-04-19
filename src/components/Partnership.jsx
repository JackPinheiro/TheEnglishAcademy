import React from "react";
import { partnerships } from "../data/data-info/partnerships";

const Partnership = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h3 className="font-main text-2xl text-center font-bold tracking-tight">Our Partnerships</h3>
      <ul className="mt-10 flex gap-10">
        {partnerships.map((p) => (
          <li>
            <img src={p} className="h-24 w-auto" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Partnership;
