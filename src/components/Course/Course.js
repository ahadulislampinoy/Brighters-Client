import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CoursesContext } from "../Courses/Courses";

const Course = () => {
  const courses = useContext(CoursesContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Link key={course._id} to={`/courses/${course._id}`}>
          <div
            key={course._id}
            className="block rounded-lg p-4 bg-white shadow shadow-indigo-100 transition-all duration-500 hover:scale-[1.03]"
          >
            <img
              alt="Home"
              src={course.image_url}
              className="w-full h-56 rounded-md object-cover"
            />

            <div className="mt-3">
              <div>
                <p className="font-medium">{course.course_title}</p>
                <p>{course.details.slice(0, 95) + "..."}</p>
              </div>
              <div className="flex justify-between items-center text-gray-800 font-medium mt-4">
                <p className="text-xl">£{course.price}</p>
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className="text-lg">{course.ratings}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Course;
