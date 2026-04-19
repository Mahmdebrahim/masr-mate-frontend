import { Outlet } from "react-router-dom";
import DashboardTopbar from "../shared/components/topbar/DashboardTopbar";
import CompanionSidebar from "../shared/components/sidebar/CompanionSidebar";
import DashboardFooter from "../shared/components/DashboardFooter";

const CompanionLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <CompanionSidebar />

      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <DashboardTopbar />

        <main className="flex-1 overflow-y-auto ">
          <div className="p-6">
            <Outlet/>
          </div>
          <DashboardFooter />
        </main>

        
      </div>
    </div>
  );
};

export default CompanionLayout;
