import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Error from "./pages/Error";
import ServiceDetail from "./pages/ServiceDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/services/:serviceId", element: <ServiceDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
