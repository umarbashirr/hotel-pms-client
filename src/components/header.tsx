import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import axios from "axios";
import { APP_URL } from "@/constants/url-config";
import LoadingButton from "./LoadingButton";
import { useState } from "react";
import { propertyIdStorageKey } from "@/constants/property";

const Header = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isConfigured = location.pathname.includes("configure");

  const logoutHandler = async () => {
    const url = APP_URL.main + APP_URL.api + APP_URL.path.logout;
    setIsLoading(true);
    try {
      const response = await axios.post(
        url,
        {},
        {
          withCredentials: true,
        }
      );

      const result = await response.data;

      if (!result?.success) {
        throw new Error(result?.message);
      }

      localStorage.clear();

      navigate("/login");

      toast.success(result?.message);
    } catch (error: any) {
      console.error(error?.message);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const switchMode = () => {
    const propertyId = JSON.parse(
      localStorage.getItem(propertyIdStorageKey) || "{}"
    );

    console.log(Object.keys(propertyId), Object.keys(propertyId)?.length);

    if (Object.keys(propertyId)?.length === 0) {
      navigate("/properties");
      return;
    }

    if (!isConfigured) {
      navigate(`/properties/${propertyId}/configure/users`);
    } else {
      navigate(`/properties/${propertyId}/overview`);
    }
  };

  return (
    <header className="flex items-center justify-between gap-4 h-16 border-b px-6">
      <p>Search bar will come here</p>
      <div className="flex items-center justify-end gap-4">
        {!isConfigured ? (
          <Button variant="outline" onClick={switchMode}>
            Configure
          </Button>
        ) : (
          <Button variant="outline" onClick={switchMode}>
            Frontend
          </Button>
        )}
        <LoadingButton
          disabled={isLoading}
          isLoading={isLoading}
          loadingText="Please wait..."
          type="button"
          variant="destructive"
          onClick={logoutHandler}
        >
          Logout
        </LoadingButton>
      </div>
    </header>
  );
};

export default Header;
