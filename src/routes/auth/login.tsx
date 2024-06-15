import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "./components/LoginForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("_uAD") || "{}");
    if (user.id) {
      navigate("/properties");
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
    <div className="flex items-center justify-center w-full min-h-screen">
      <Card className="w-full max-w-[450px]">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Login to your account
          </CardTitle>
          <CardDescription>
            Welcome back! We are happy to see you today
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
