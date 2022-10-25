import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import "./Courses.css";

export const CoursesContext = createContext();

const Courses = () => {
  const courses = useLoaderData();
  return (
    <CoursesContext.Provider value={courses}>
      <div className="grid gap-3 custom-grid bg-[#f3f4f9] px-4 py-12 mx-auto">
        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:justify-around">
            <div className="bg-white rounded-lg">
              <nav className="mt-10 px-6 ">
                <LeftSideNav />
              </nav>
            </div>
          </div>
        </div>
        <div>
          <Course />
        </div>
      </div>
    </CoursesContext.Provider>
  );
};

export default Courses;
