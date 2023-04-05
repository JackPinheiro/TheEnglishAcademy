import React from "react";

import logo from "../data/img/Logotext.png";
import logo2 from "../data/img/LogoImg.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer aria-label="Site Footer">
      <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="flex justify-center text-teal-600">
          <img src={logo} className="h-10" />
          <img src={logo2} className="h-10" />
        </div>
        <div className="mt-6 flex items-center justify-center gap-2">
          <ion-icon name="home-outline"></ion-icon>
          <Link
            to="https://www.google.com/maps/place/The+English+Academy/@40.8926816,-8.4868233,17z/data=!3m2!4b1!5s0xd2381fe0441c9cf:0x2d188fdff5c788e4!4m6!3m5!1s0xd2381fe1b1c6a21:0x516453be8ba82978!8m2!3d40.8926776!4d-8.4846346!16s%2Fg%2F11dxjwzycj?hl=en"
            class="leading-relaxed text-gray-500"
          >
            Avenida Adelino Amaro da Costa 346 R/C 3700-023 São João da Madeira
          </Link>
        </div>
        <p class="mx-auto max-w-md text-center leading-relaxed text-gray-500"></p>
        <div className="mt-6 flex items-center justify-center gap-2">
          <ion-icon name="call-outline"></ion-icon>
          <a href="tel:917036261" className="leading-relaxed text-gray-500">
            917036261
          </a>
        </div>
        <div className="flex items-center justify-center gap-2">
          <ion-icon name="call-outline"></ion-icon>
          <a href="tel:256858338" className="leading-relaxed text-gray-500">
            256858338
          </a>
        </div>
        <div className="flex items-center justify-center gap-2">
          <ion-icon name="mail-outline"></ion-icon>
          <Link
            to="#"
            onClick={() =>
              (window.location = "mailto:theenglishacademysjm@gmail.com")
            }
            class="max-w-md text-center leading-relaxed text-gray-500"
          >
            theenglishacademysjm@gmail.com
          </Link>
        </div>

        <nav aria-label="Footer Nav" class="mt-12">
          <ul class="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <Link
                class="text-gray-700 transition hover:text-gray-700/75"
                to="/"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                class="text-gray-700 transition hover:text-gray-700/75"
                to="/services"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                class="text-gray-700 transition hover:text-gray-700/75"
                to="/testimonials"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </nav>

        <ul class="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <Link
              to="https://www.facebook.com/theenglishacademySJM/"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Facebook</span>
              <ion-icon size="large" name="logo-facebook"></ion-icon>
            </Link>
          </li>

          <li>
            <Link
              to="https://www.instagram.com/theenglishacademysjm/"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Instagram</span>
              <ion-icon size="large" name="logo-instagram"></ion-icon>
            </Link>
          </li>

          <li>
            <Link
              to="https://twitter.com/TEA_SJM"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Twitter</span>
              <ion-icon size="large" name="logo-twitter"></ion-icon>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
