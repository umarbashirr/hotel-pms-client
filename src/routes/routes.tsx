import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./auth/login";
import PropertiesListPage from "./properties/properties";
import SinglePropertyLayout from "@/layouts/single-property-layout";
import OverviewPage from "./frontdesk/overview/overview-page";
import ProtectedLayout from "@/layouts/protected-layout";
import UsersListPage from "./configure/users";
import PropertyPage from "./configure/property-page";
import RoomTypesPage from "./configure/room-types-page";
import RoomsPage from "./configure/rooms-page";

export const routes = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <LoginPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "/",
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
          {
            path: "configure/users",
            element: <UsersListPage />,
          },
          {
            path: "configure/property",
            element: <PropertyPage />,
          },
          {
            path: "configure/room-types",
            element: <RoomTypesPage />,
          },
          {
            path: "configure/rooms",
            element: <RoomsPage />,
          },
        ],
      },
    ],
  },
]);
