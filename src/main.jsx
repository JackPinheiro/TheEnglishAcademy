import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Services from "./pages/Services";
import Error from "./pages/Error";
import ServiceDetail from "./pages/ServiceDetail";
import Testimonial from "./pages/Testimonial";
import ContactForm from "./components/ContactForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/services", element: <Services /> },
      { path: "/testimonials", element: <Testimonial /> },
      {
        path: "/services/:slug",
        element: <ServiceDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
