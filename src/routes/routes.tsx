import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./auth/login";
import PropertiesListPage from "./properties/properties";
import SinglePropertyLayout from "@/layouts/single-property-layout";
import OverviewPage from "./frontdesk/overview/overview-page";
import ProtectedLayout from "@/layouts/protected-layout";

export const routes = createBrowserRouter([
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "",
    element: <ProtectedLayout />,
    children: [
      {
        path: "properties",
        element: <PropertiesListPage />,
      },
      {
        path: "properties/:id",
        element: <SinglePropertyLayout />,
        children: [
          {
            path: "overview",
            element: <OverviewPage />,
          },
        ],
      },
    ],
  },
]);
