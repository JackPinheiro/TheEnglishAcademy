import React from "react";

import logo from "../data/img/prep_centre_logo_RGB_PNG.png";
import { Link } from "react-router-dom";

const Cambridge = () => {
  return (
    <div className="flex justify-center p-10">
      <Link to="/services/cambridge">
        <img
          alt="Logo for cambridge english qualifications"
          src={logo}
          className="h-40"
        />
      </Link>
    </div>
  );
};

export default Cambridge;
