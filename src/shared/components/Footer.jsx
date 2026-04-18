import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

export default function Footer() {
  const linkSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "Companions", path: "/companions" },
        { name: "Trip Planner", path: "/trip-planner" },
        { name: "About Us", path: "/about" },
      ],
    },
    {
      title: "Need Help?",
      links: [
        { name: "Payment Methods", path: "#" },
        { name: "Track your Booking", path: "#" },
        { name: "Contact Support", path: "#" },
        { name: "FAQs", path: "#" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { name: "Instagram", path: "#" },
        { name: "Facebook", path: "#" },
        { name: "Twitter", path: "#" },
        { name: "YouTube", path: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#003366] border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Logo & Description */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-3">
              <div className="">
                <img
                  src={assets.logo1}
                  alt="Masr Mate Logo"
                  className="w-10 h-10"
                />
              </div>
              <span className="text-2xl font-bold text-white">Masr Mate</span>
            </div>

            <p className="mt-6 text-white text-[15px] leading-relaxed max-w-xs">
              Connecting travelers with trusted local companions and tour guides
              across Egypt for authentic and unforgettable experiences.
            </p>
          </div>

          {/* Links Sections */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-10">
            {linkSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-white mb-4 text-base">
                  {section.title}
                </h3>
                <ul className="space-y-2.5 text-sm text-white">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.path}
                        className="hover:text-gray-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-white">
          © 2026 Masr Mate. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
