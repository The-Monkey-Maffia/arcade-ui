import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css"

// PAGES
import Catalog from "./routes/catalog"
import ErrorPage from "./routes/404";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Catalog />,
    errorElement: <ErrorPage />
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
