import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Button from "../../shared/components/ui/Button";

export default function Error500() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <AlertTriangle size={100} className="text-amber-500 mx-auto mb-6" />

        <h1 className="text-[120px] font-bold text-amber-500 leading-none">
          500
        </h1>

        <div className="h-1 w-20 bg-amber-500 mx-auto my-6 rounded-full"></div>

        <p className="text-3xl font-semibold text-gray-800 mb-3">
          Something Went Wrong
        </p>

        <p className="text-gray-500 text-lg mb-10">
          We encountered an internal server error. Please try again later.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            icon={RefreshCw}
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>

          <Button
            variant="outline"
            icon={Home}
            onClick={() => (window.location.href = "/")}
          >
            Go to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
