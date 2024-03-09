// Packages and Libraries
import React from "react";
import { Toaster } from "sonner";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import App from "./App.tsx";
import MyWork from "./pages/Work.tsx";
import NotFound from "./pages/NotFound.tsx";

// Stylesheets
import "./index.css";
import Contact from "./pages/Contact.tsx";
import Experience from "./pages/Experience.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/work",
    element: <MyWork />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "experience",
    element: <Experience />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster visibleToasts={1} duration={3000} position="bottom-center" />
    <RouterProvider router={router} />
  </React.StrictMode>
);
