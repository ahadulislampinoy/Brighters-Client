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
      <div className="grid gap-3 bg-[#f3f4f9] custom-grid px-4 py-10 mx-auto lg:py-32 xl:py-48 md:px-8 ">
        <div class="relative">
          <div class="flex flex-col sm:flex-row sm:justify-around">
            <div class="w-72 bg-white rounded-lg">
              <nav class="mt-10 px-6 ">
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
