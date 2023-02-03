import React, { Fragment } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../img/Logo.png";

const MainNavigation = () => {
  return (
    <Fragment>
      <div className="flex h-24 justify-between bg-white">
        <NavLink to="/">
          <img src={logo} className="ml-4 h-24" />
        </NavLink>
        <ul className="box-border flex items-center justify-between ">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "mr-4 p-4 font-medium text-blue-900"
                : "mr-4 p-4 font-medium text-blue-700 hover:text-blue-900"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "mr-4 p-4 font-medium text-blue-900"
                : "mr-4 p-4 font-medium text-blue-700 hover:text-blue-900"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              isActive
                ? "mr-4 p-4 font-medium text-blue-900"
                : "mr-4 p-4 font-medium text-blue-700 hover:text-blue-900"
            }
          >
            Contact Us
          </NavLink>
        </ul>
      </div>
    </Fragment>
  );
};

export default MainNavigation;
