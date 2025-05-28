import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import {
  ErrorPages,
  Home,
  JobApply,
  JobDetails,
  MyApplications,
  Register,
  Signin,
} from "../pages";
import { Loader } from "../components";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        hydrateFallbackElement: <Loader />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Signin,
      },
    ],
  },
]);
