import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/layout/layout.jsx";
import Home from "./pages/home/home.jsx";
import Project from "./pages/projects/projects.jsx";
import Thinking from "./pages/Thinking/src/Thinking.jsx";
import Partners from "./pages/partners/partners.jsx";
import NotFoundPage from "./pages/notfound/notfoundpage.jsx";
import Markets from "./pages/markets/markets.jsx";
import Services from "./pages/services/actualServices.jsx";
import Contact from "./pages/contact/contact.jsx";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Careers from "./pages/careers/careers.jsx";
import ResetScroll from "./components/resetScroll/resetscroll.jsx";

import process from 'process';
window.process = process;


// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <NotFoundPage />
      </Layout>
    ),
  },
  {
    path: "/home",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/thinking",
    element: (
      <Layout>
        <Thinking />
      </Layout>
    ),
  },
  {
    path: "/projects",
    element: (
      <Layout>
        <Project />
      </Layout>
    ),
  },
  {
    path: "/partners",
    element: (
      <Layout>
        <Partners />
      </Layout>
    ),
  },
  {
    path: "/markets",
    element: (
      <Layout>
        <Markets />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/service",
    element: (
      <Layout>
        <Services />
      </Layout>
    ),
  },
  {
    path: "/careers",
    element: (
      <Layout>
        <Careers />
      </Layout>
    ),
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {/* Place ResetScroll inside RouterProvider */}
      <ResetScroll />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
