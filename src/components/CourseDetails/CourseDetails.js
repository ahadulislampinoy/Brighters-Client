import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import React, { useRef } from "react";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { RiFileDownloadLine } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  const { _id, course_title, price, image_url, details, learn } = course;

  // Pdf downloader functionality start
  const printRef = useRef();
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Course.pdf");
  };
  // Pdf downloader functionality end

  return (
    <div className="bg-[#f3f4f9]">
      <div
        ref={printRef}
        className="relative max-w-screen-xl mx-auto p-8 sm:p-16 md:px-6 lg:px-8"
      >
        <div className="pricing-box mx-auto rounded-lg shadow-md overflow-hidden lg:max-w-none lg:flex">
          <div className="relative bg-white px-6 py-12 md:px-8 lg:flex-shrink-1 lg:p-12">
            <span
              onClick={handleDownloadPdf}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 cursor-pointer text-3xl text-gray-900 hover:text-sky-600"
            >
              <RiFileDownloadLine />
            </span>
            <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">
              {course_title}
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-500">{details}</p>
            <div className="mt-8">
              <div className="flex items-center">
                <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-sky-600">
                  What's included
                </h4>
                <div className="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5 space-y-3 ">
                {learn.map((topic, index) => (
                  <li
                    key={index}
                    className="flex items-start lg:col-span-1 mr-2"
                  >
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        stroke="currentColor"
                        fill="#1A84C7"
                        viewBox="0 0 1792 1792"
                      >
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-5 text-gray-600">
                      {topic.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${image_url})` }}
            className="bg-cover bg-center bg-no-repeat"
          >
            <div className="text-center relative lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:py-12 lg:px-16 px-6 py-10 backdrop-blur-sm  backdrop-brightness-75 h-full">
              <div className="flex items-center justify-center text-5xl leading-none font-bold text-gray-50">
                <span>£{price}</span>
              </div>
              <p className="mt-4 text-lg leading-6 text-gray-50">
                <span className="block font-medium">Card payments:</span>
                <span className=" inline-block font-medium ">
                  2.9% + 10p per transaction
                </span>
              </p>
              <div className="mt-6">
                <Link
                  className="inline-block px-4 py-3 font-semibold rounded bg-gradient-to-r from-indigo-600 via-sky-500 to-gray-700 text-white active:text-opacity-75"
                  to={`/checkout/${_id}`}
                >
                  Get Premium Access
                  <HiArrowTrendingUp className="inline-block ml-1 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
