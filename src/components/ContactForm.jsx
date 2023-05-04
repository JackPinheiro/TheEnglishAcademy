import React from "react";
import { Link } from "react-router-dom";

const ContactForm = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      id="wrapper"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div className="flex w-4/6 flex-col">
        <button
          className="place-self-end text-xl text-white"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="rounded bg-white p-2 text-center text-gray-800">
          <div className="mx-auto max-w-3xl">
            <h2 class="mb-12 text-3xl font-bold">Contact us</h2>
            <div className="flex justify-between">
              <form>
                <h2 className="mb-4 text-xl">Please enter your details</h2>
                <div className="mb-6">
                  <label type="text"></label>
                  <input
                    type="text"
                    name="text"
                    className="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="inputName"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    className="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="inputEmail"
                    placeholder="Email address"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    name="subject"
                    className="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="inputSubject"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    type="text"
                    name="message"
                    className="m-0 block  w-full rounded border border-solid  border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal  text-gray-700 transition ease-in-out  focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="inputMessage"
                    rows="5"
                    cols="35"
                    placeholder="Message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded bg-blue-600 px-6  py-2.5 text-xs font-medium uppercase leading-tight  text-white shadow-md transition duration-150 ease-in-out  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg"
                >
                  Send
                </button>
              </form>
              <div>
                <h2 className="mb-4 text-xl">We are located here</h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d613.6182985445474!2d-8.484824763161553!3d40.892571968948005!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2spt!4v1683212847975!5m2!1sen!2spt"
                  width="400"
                  height="300"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="mt-2 flex flex-col">
                  <div className="flex items-center">
                    <ion-icon name="home-outline"></ion-icon>
                    <Link
                      to="https://www.google.com/maps/place/The+English+Academy/@40.8926816,-8.4868233,17z/data=!3m2!4b1!5s0xd2381fe0441c9cf:0x2d188fdff5c788e4!4m6!3m5!1s0xd2381fe1b1c6a21:0x516453be8ba82978!8m2!3d40.8926776!4d-8.4846346!16s%2Fg%2F11dxjwzycj?hl=en"
                      className="leading-relaxed text-gray-500"
                    >
                      Avenida Adelino Amaro da Costa 346 R/C 3700-023 SJM
                    </Link>
                  </div>
                  <div>
                    <ion-icon name="call-outline"></ion-icon>
                    <a
                      href="tel:917036261"
                      className="leading-relaxed text-gray-500"
                    >
                      917036261
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <ion-icon name="call-outline"></ion-icon>
                  <a
                    href="tel:256858338"
                    className="leading-relaxed text-gray-500"
                  >
                    256858338
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <ion-icon name="mail-outline"></ion-icon>
                  <Link
                    to="#"
                    onClick={() =>
                      (window.location =
                        "mailto:theenglishacademysjm@gmail.com")
                    }
                    className="max-w-md text-center leading-relaxed text-gray-500"
                  >
                    theenglishacademysjm@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
