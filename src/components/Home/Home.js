import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/banner.png";

const Home = () => {
  return (
    <div>
      <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src={banner}
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
            alt=""
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
                Learn without limits
              </h2>
              <p className="font-medium text-gray-700 text-lg">
                Start, switch, or advance your career with our courses
              </p>
            </div>
            <Link to="/courses">
              <button
                type="button"
                className="px-8 py-3 font-semibold rounded bg-gray-900 text-gray-100"
              >
                Join today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
