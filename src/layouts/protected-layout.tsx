import { getCookie } from "@/utils/cookie-service";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedLayout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookie("token");
    if (!token) {
      navigate("/login");
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        Loading...
      </div>
    );
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
