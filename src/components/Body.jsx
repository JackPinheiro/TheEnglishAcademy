import React, { Fragment } from "react";
import About from "./About";
import Testimonials from "./Testimonials";
import Cambridge from "./Cambridge";
import Partnership from "./Partnership";

const Body = () => {
  return (
    <Fragment>
      <About />
      <Testimonials />
      <Partnership />
      <Cambridge />
    </Fragment>
  );
};

export default Body;
