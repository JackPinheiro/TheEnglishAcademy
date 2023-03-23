import { Fragment } from "react";
import Body from "../components/Body";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Body />
    </Fragment>
    // <section className="z-50 mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
    //   <div className="lg: grid grid-cols-1 gap-8 lg:grid-cols-2 ">
    //     <div className="lg:py-24">
    //       <h2 className="text-center text-3xl font-bold sm:text-4xl lg:text-left xl:text-left">
    //         Welcome to <span className="text-[#012169]">The </span>{" "}
    //         <span className="text-[#C8102E]">English</span>{" "}
    //         <span className="text-[#012169]">Academy</span>
    //       </h2>

    //       <p class="mx-auto mt-4 max-w-lg text-center text-gray-600 lg:mx-0 lg:text-left xl:text-left">
    //         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
    //         hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
    //         minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
    //       </p>

    //       <div className="flex justify-center md:flex md:justify-center lg:flex lg:justify-start">
    //         <Link
    //           to="/contactus"
    //           class="mt-8  rounded-md bg-blue-700 px-6 py-2.5 text-center font-medium text-white  shadow transition duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-yellow-400"
    //         >
    //           Contact Us
    //         </Link>
    //         <Link
    //           to="/"
    //           class="text-gray mt-8 ml-4 rounded-md border-blue-200 bg-white px-6 py-2.5 text-center font-medium  shadow transition duration-300 hover:bg-blue-200 focus:outline-none focus:ring focus:ring-yellow-400"
    //         >
    //           Read More
    //           <span className="ml-1 align-middle">
    //             <ion-icon name="arrow-down-outline"></ion-icon>
    //           </span>
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
    //       <img
    //         alt="Students in classroom"
    //         src={hero}
    //         className="absolute inset-0  h-full w-full object-cover"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
};

export default HomePage;
