import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LogInIcon, Menu, X } from "lucide-react";
import Button from "../components/ui/Button.jsx";
import { assets } from "../../assets/assets.js";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Companions", path: "/companions" },
    { name: "Trip Planner", path: "/trip-planner" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4  py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="">
            <img
              src={assets.logo1}
              alt="Masr Mate Logo"
              className="w-12 h-12"
            />
          </div>
          <span className="text-xl lg:text-2xl font-bold tracking-tight hidden md:block whitespace-nowrap text-[#003366]">
            Masr Mate
          </span>
        </div>

        {/* Desktop Navigation - Pill Shape */}
        <div className="hidden lg:flex items-center border border-[#003366] bg-gray-0 rounded-full px-2 py-1.5 gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 xl:px-6 py-2.5 text-sm font-medium rounded-full transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-white border border-[#003366] font-medium hover:text-[#003366] text-[#003366]"
                    : "text-gray-600 hover:text-[#003366]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            className="rounded-full px-4 xl:px-8 whitespace-nowrap"
            icon={LogInIcon}
          >
            Login
          </Button>
          <Button variant="primary" size="sm" className="rounded-full px-4 xl:px-8 whitespace-nowrap">
            Register
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-gray-700"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full shadow-lg border-t bg-white px-6 py-6 border-b">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="py-3 text-lg font-medium text-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}

            <div className="pt-4 border-t flex flex-col gap-3">
              <Button variant="outline" fullWidth>
                Login
              </Button>
              <Button variant="primary" fullWidth>
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
