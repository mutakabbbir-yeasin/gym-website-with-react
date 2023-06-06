import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Plans from "./components/Plans/Plans";
import Trainers from "./components/Trainers/Trainers";
import Contact from "./components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/plans",
        element: <Plans></Plans>,
      },
      {
        path: "/trainers",
        element: <Trainers></Trainers>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <App></App>,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
