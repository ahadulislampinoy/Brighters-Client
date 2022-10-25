import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  console.log(course);
  return <div>Cddddddddddddd</div>;
};

export default CourseDetails;
