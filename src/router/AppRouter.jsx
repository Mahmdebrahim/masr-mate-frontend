import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "../shared/store/authStore";

// Layouts
import MainLayout from "../layouts/MainLayout";
import CompanionLayout from "../layouts/CompanionLayout";
import AdminLayout from "../layouts/AdminLayout";

// Common Pages
import PageNotFound from "../features/common/PageNotFound";
import Unauthorized from "../features/common/Unauthorized";
import Error500 from "../features/common/Error500";

//COMPANION DASHBOARD
import Dashboard from "../features/companionDashboard/Dashboard/Dashboard"
import Profile from "../features/companionDashboard/Profile/Profile"
import Settings from "../features/companionDashboard/Settings/Settings"


// Auth Pages

// Main Pages
import HomePage from "../features/home/Home";

// Protected Route
function ProtectedRoute({ allowedRoles, children }) {
//   const { isAuthenticated, role } = useAuthStore();

//   if (!isAuthenticated()) {
//     return <Navigate to="/auth/login" replace />;
//   }

//   if (allowedRoles && !allowedRoles.includes(role)) {
//     return <Navigate to="/unauthorized" replace />;
//   }

  return children;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ====================== AUTH ====================== */}
        {/* <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} /> */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* ======== MAIN LAYOUT (Home, Companions, etc.)======= */}
        <Route path="/" element={<MainLayout />} errorElement={<Error500 />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* ================ COMPANION DASHBOARD ================= */}
        <Route
          path="/companion"
          element={
            <ProtectedRoute allowedRoles={["companion"]}>
              <CompanionLayout />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={<Navigate to="/companion/dashboard" replace />}
          />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="settings" element={<Settings/>} />

        </Route>

        {/* =================== ADMIN DASHBOARD ===================*/}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<div className="h-screen">Admin Dashboard</div>} />
        </Route>

        {/* ====================== 404 ====================== */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
