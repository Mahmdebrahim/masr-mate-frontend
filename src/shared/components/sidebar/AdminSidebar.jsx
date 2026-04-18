import { NavLink } from "react-router-dom";
import { LayoutDashboard, Calendar, Users, UserCogIcon } from "lucide-react";
import { assets } from "../../../assets/assets";

const AdminSidebar = () => {
  const sidebarLinks = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard />,
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: <Users />,
    },
    { name: "Companions", path: "/admin/companions", icon: <UserCogIcon /> },
    { name: "Trips", path: "/admin/trips", icon: <Calendar /> },
  ];

  return (
    <aside
      className={`
            bg-white border-r border-gray-200 
            w-16 md:w-64 
            flex flex-col 
            transition-all duration-300
            md:pl-6
          `}
    >
      <div>
        <div className="flex items-center justify-center md:justify-normal gap-2 pt-3 md:pl-3 ">
          <img
            src={assets.logo1}
            alt="Masr Mate Logo"
            className="w-10 h-10 md:w-12 md:h-12 "
          />
          <span className="hidden md:block text-lg font-semibold text-[#003366]">
            Masr Mate
          </span>
        </div>
      </div>

      <nav className="flex-1 pt-3">
        {sidebarLinks.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-gray-700 transition-colors
                   hover:bg-blue-50 hover:text-[#003366]
                   ${
                     isActive
                       ? "bg-blue-50  border-r-4 border-[#003366] text-[#003366] font-medium"
                       : ""
                   }`
            }
            end={item.path === "/companion"}
          >
            <span className="shrink-0">{item.icon}</span>
            <span className="hidden md:block">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
