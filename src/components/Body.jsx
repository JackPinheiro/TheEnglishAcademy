import React, { Fragment } from "react";
import About from "./About";
import Testimonials from "./Testimonials";
import Cambridge from "./Cambridge";

const Body = () => {
  return (
    <Fragment>
      <About />
      <Testimonials />
      <Cambridge />
    </Fragment>
  );
};

export default Body;
