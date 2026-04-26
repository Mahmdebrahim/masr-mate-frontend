import { ShieldX, Home, LogIn } from "lucide-react";
import Button from "../../shared/components/ui/Button";
import { useNavigate } from "react-router-dom";
export default function Unauthorized() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <ShieldX size={100} className="text-red-500 mx-auto mb-6" />

        <h1 className="text-[120px] font-bold text-red-500 leading-none">
          403
        </h1>

        <div className="h-1 w-20 bg-red-500 mx-auto my-6 rounded-full"></div>

        <p className="text-3xl font-semibold text-red-500 mb-3">
          Access Denied
        </p>

        <p className="text-gray-500 text-lg mb-10">
          You don't have permission to view this page.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="warning"
            icon={Home}
            className="rounded-full"
            onClick={() => navigate("/")}
          >
            Go to Home
          </Button>

          <Button
            variant="outline"
            icon={LogIn}
            className="rounded-full"
            onClick={() => navigate("/auth/login")}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}