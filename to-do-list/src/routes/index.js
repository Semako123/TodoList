import React from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginRoute from "./login.routes";
import Signup from "./sinup.routes";

const router = createBrowserRouter([...LoginRoute, ...Signup]);

const ReactRouterProvider = () => {
  return <RouterProvider router={router} />;
};
export default ReactRouterProvider;
