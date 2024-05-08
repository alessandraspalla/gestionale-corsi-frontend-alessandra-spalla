import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";
import { Layout } from "./components/Layouts/Layout";
import { Home } from "./pages/Home/Home";
import { Courses } from "./pages/Courses/Courses";
import { NotFound } from "./pages/NotFound/NotFound";
import { Login } from "./pages/Login/Login";
import { Registration } from "./pages/Registration/Registration";
import { AuthContextProvider } from "./context/AuthContextProvider";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Users } from "./pages/Users/Users";
import { UserDetail } from "./pages/UserDetail/UserDetail";
import { CourseRegistration } from "./pages/CourseRegistration/CourseRegistration";

const router = createBrowserRouter([
  {
    element: (
      <AuthContextProvider>
        <Layout />
      </AuthContextProvider>
    ),
    children: [
      {
        path: "/",
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Registration />,
          },
          {
            path: "courses/",
            children: [
              {
                path: "",
                element: (
                  <ProtectedRoute>
                    <Courses />
                  </ProtectedRoute>
                ),
              },
              {
                path: "reg",
                element: (
                  <ProtectedRoute>
                    <CourseRegistration />
                  </ProtectedRoute>
                ),
              },
            ],
          },
          {
            path: "users/",
            children: [
              {
                path: "",
                element: (
                  <ProtectedRoute>
                    <Users />
                  </ProtectedRoute>
                ),
              },
              {
                path: ":email",
                element: (
                  <ProtectedRoute>
                    <UserDetail />
                  </ProtectedRoute>
                ),
              },
            ],
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
);
