import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { Outlet } from "react-router-dom";

const SinglePropertyLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className="pl-72">
        <Header />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SinglePropertyLayout;
