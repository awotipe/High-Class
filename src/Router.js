import React from "react";
import { useRoutes } from "react-router";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Courses from "./Pages/Courses/Course";
import Register from "./Pages/Register/Register";


const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/aboutus",
      element: <About />,
    },

    {
      path: "/contactus",
      element: <Contact />,
    },

    {
      path: "/courses",
      element: <Courses />,
    },


    {
      path: "/register",
      element: <Register />,
    },
  ]);
};

export default Router;
