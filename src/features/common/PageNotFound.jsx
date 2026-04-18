import { Home, ArrowLeft } from "lucide-react";
import Button from "../../shared/components/ui/Button";
import {OctagonX} from "lucide-react";
export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <OctagonX size={100} className="text-[#003366] mx-auto mb-6" />
        <h1 className="text-[140px] font-bold text-[#003366] leading-none">
          404
        </h1>
        <div className="h-1 w-20 bg-[#003366] mx-auto my-8 rounded-full"></div>
        <p className="text-3xl font-semibold text-gray-800 mb-3">
          Page Not Found
        </p>
        <p className="text-gray-500 text-lg mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            icon={Home}
            onClick={() => (window.location.href = "/")}
          >
            Go to Home
          </Button>

          <Button
            variant="outline"
            icon={ArrowLeft}
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
