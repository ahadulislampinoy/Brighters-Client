import React from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const course = useLoaderData();
  const { course_title, image_url } = course;
  const orderToast = () =>
    toast.success("Your order has been placed, thank you!");
  return (
    <div className="bg-[#f3f4f9] flex justify-center items-center p-6 sm:p-16 md:px-6 lg:px-8">
      <div
        className="block w-screen max-w-sm border border-black bg-white p-6 sm:p-10 sm:px-12"
        aria-modal="true"
        aria-label="Item added to your cart"
        role="dialog"
        tabIndex="-1"
      >
        <div className="flex items-start justify-between">
          <h2 className="flex items-center text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>

            <span className="ml-2 text-base"> Course added to your cart </span>
          </h2>
        </div>

        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row items-start pt-8 pb-12">
          <img
            alt="Course thumbnail"
            src={image_url}
            className="h-32 w-32 rounded-lg object-cover"
          />

          <div className="ml-0 sm:ml-4">
            <h3 className="text-base">{course_title}</h3>

            <dl className="mt-1 space-y-1 text-sm text-gray-500">
              <div>
                <dt className="inline">Access: </dt>
                <dd className="inline">Lifetime</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="space-y-4 text-center">
          <button
            onClick={orderToast}
            className="block w-full rounded-lg bg-gray-900 p-3 text-sm text-stone-100 transition-colors duration-300 hover:bg-gray-600"
          >
            Checkout
          </button>

          <Link
            to="/courses"
            className="inline-block text-sm tracking-wide text-gray-900 underline underline-offset-4"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
