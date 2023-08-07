import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

const Body = () => {
  return (
    <section id="hero" className="lg-p-4 bg-background-blue">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        {/* Left Item */}
        <div className="flex flex-col space-y-12 pl-14 mb-35 md:w-2/3">
          <h1 className="max-w-2xl text-4xl font-bold text-center md:text-5xl md:text-left">
            Seamless Property Management, Anywhere in the World
          </h1>
          <h7 className="max-w-md text-2xl font-bold text-center md:text-2xl md:text-left">
            Your Property, Our Priority
          </h7>
          <p className="max-w-md text-center text-darkGrayishBlue md:text-left">
            Welcome to the Property Management Web Application, your ultimate
            solution for stress-free property management. Whether you're
            traveling abroad or simply unable to personally oversee your
            properties, we're here to ensure your assets are well taken care of,
            no matter where you are.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="#"
              className="p-3 px-6 pt-2 text-white rounded-full bg-secondary-gray hover:bg-secondary-gray-light"
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className="md:w-1/3">
          <ImageSlider />
        </div>
      </div>
    </section>
  );
};

export default Body;
