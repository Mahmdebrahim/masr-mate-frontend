import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/Navbar.jsx";
import Footer from "../shared/components/Footer.jsx";

const MainLayout = () => {
  return (
    <div className="root-layout">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
