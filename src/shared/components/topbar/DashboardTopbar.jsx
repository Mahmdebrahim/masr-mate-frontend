import { useAuthStore } from "../../store/authStore.js";
import { User } from "lucide-react";
import Button from "../ui/Button.jsx";

const DashboardTopbar = () => {
  const { user, logout } = useAuthStore();

  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-end">
      <div className="flex items-center gap-6">
        {/* User Menu */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-800">{user?.name}</p>
            <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
          </div>
          <div className="w-9 h-9 bg-gray-200 rounded-full overflow-hidden">
            <img
              src={user?.avatar || "/default-avatar.png"}
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardTopbar;
