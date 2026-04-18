import { Outlet } from "react-router-dom";
import DashboardTopbar from "../shared/components/topbar/DashboardTopbar.jsx";
import AdminSidebar from "../shared/components/sidebar/AdminSidebar.jsx";
import DashboardFooter from "../shared/components/DashboardFooter.jsx";

const AdminLayout = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <DashboardTopbar />

          {/* Page Content */}
          <main className="flex-1 overflow-auto p-6 bg-white">
            <Outlet />
          </main>
          {/* Footer */}
          <DashboardFooter />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
