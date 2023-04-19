import React from "react";

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
      <div className="flex w-[600px] flex-col">
        <button
          className="place-self-end text-xl text-white"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className=" rounded bg-white p-2 text-center text-gray-800">
          <div className="mx-auto max-w-6xl px-3 lg:px-6">
            <h2 class="mb-12 text-3xl font-bold">Contact us</h2>
            <div className="flex justify-between">
            <h2>Address</h2>
              <p>
                Avenida Adelino Amaro da Costa 346 R/C 3700-023 São João da
                Madeira
              </p>

              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    className="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="inputName"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    className="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="inputEmail"
                    placeholder="Email address"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="inputSubject"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="m-0 block  w-full rounded border border-solid  border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal  text-gray-700 transition ease-in-out  focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="inputMessage"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
