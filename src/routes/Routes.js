import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CheckOut from "../components/CheckOut/CheckOut";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import Root from "../layout/Root";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      {
        path: "courses",
        element: <Courses />,
        loader: () => fetch("https://brighters-server.vercel.app/courses"),
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`https://brighters-server.vercel.app/courses/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brighters-server.vercel.app/courses/${params.id}`),
      },
      { path: "faq", element: <Faq /> },
      { path: "blog", element: <Blog /> },
      { path: "login", element: <Login /> },
      { path: "registration", element: <Registration /> },
    ],
  },
]);
