import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CoursesContext } from "../Courses/Courses";

const LeftSideNav = () => {
  const courses = useContext(CoursesContext);
  return (
    <div>
      {courses.map((course) => (
        <Link
          key={course._id}
          className="hover:bg-gray-100 flex items-center p-2 my-6 transition-colors duration-200 text-gray-800 rounded-lg border-2"
          to={`/courses/${course._id}`}
        >
          <span className="mx-4 text-lg font-normal">
            {course.category_title}
          </span>
          <span className="flex-grow text-right"></span>
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
