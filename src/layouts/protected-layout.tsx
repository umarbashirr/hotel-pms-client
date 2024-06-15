import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedLayout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("_uAD") || "{}");

    if (!user.id) {
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
