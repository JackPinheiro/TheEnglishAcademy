import React, { Fragment, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../data/img/Logotext.png";
import logo2 from "../data/img/LogoImg.jpg";

const isActive = ({ isActive }) =>
  isActive
    ? " font-medium text-blue-900"
    : " font-medium text-blue-600 hover:text-blue-900 duration-300";

const nav = ["About", "Services", "Events", "Contacts"];

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full shadow-md">
      <div className="items-center justify-between bg-white py-4 px-7 md:flex md:px-10">
        <NavLink to="/">
          <div className="flex items-center ">
            <img src={logo} className="h-10" />
            <img src={logo2} className="h-10" />
          </div>
        </NavLink>

        <nav aria-label="Site Navigation Bar">
          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-8 top-6 text-3xl md:hidden"
          >
            <ion-icon name={isOpen ? "close" : "menu"}></ion-icon>
          </button>
          <ul
            className={`absolute left-0 z-[-1] m-auto w-full  gap-8 bg-white pb-12 pl-9 transition-all duration-300 ease-in  md:static md:z-auto md:w-auto md:flex md:items-center md:pb-0 md:pl-0 ${
              isOpen
                ? "top-20 opacity-100"
                : "top-[-490px] opacity-0 md:opacity-100"
            }`}
          >
            {nav.map((link) => (
              <li key={link} className="my-7 text-lg md:my-0 ">
                <NavLink to={`/${link}`} className={isActive}>
                  {link}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/contactus"
                className="rounded-md bg-blue-700 px-6 py-2.5  font-medium text-white shadow duration-300 hover:bg-blue-500"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
