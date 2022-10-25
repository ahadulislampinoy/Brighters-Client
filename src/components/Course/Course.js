import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CoursesContext } from "../Courses/Courses";

const Course = () => {
  const courses = useContext(CoursesContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {courses.map((course) => (
        <div class="block rounded-lg p-4 bg-white shadow-sm shadow-indigo-100">
          <img
            alt="Home"
            src={course.image_url}
            class="h-56 rounded-md object-cover"
          />

          <div class="mt-3">
            <div>
              <p class="text-xl mb-1 text-gray-500">${course.price}</p>
              <p class="font-medium">{course.course_title}</p>
              <p>{course.details.slice(0, 100) + "..."}</p>
            </div>
            <Link to={`/course/${course._id}`}>
              <button
                type="button"
                className="w-full px-8 py-3 mt-4 font-semibold rounded bg-gray-800 text-white"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Course;
