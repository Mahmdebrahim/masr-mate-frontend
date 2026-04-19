export default function DashboardFooter() {
  return (
    <>
      <footer className="flex flex-col md:flex-row gap-3 items-center justify-around w-full py-4 text-sm text-[#003366]">
        <p>Copyright © 2026 Masr Mate. All rights reservered.</p>
        <div className="flex items-center bg-red gap-4">
          <div className="h-8 w-px bg-white/20"></div>
          <a href="#" className="hover:text-[#003366] transition-all">
            Privacy Policy
          </a>
          <div className="h-8 w-px bg-white/20"></div>
          <a href="#" className="hover:text-[#003366] transition-all">
            Trademark Policy
          </a>
        </div>
      </footer>
    </>
  );
}
