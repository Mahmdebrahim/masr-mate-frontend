import { assets } from "../../../assets/assets";

export default function TrustedCompanies() {
  const companyLogos = [
    assets.company1,
    assets.company2,
    assets.company3,
    assets.company4,
    assets.company5,
    assets.company6,
    assets.company7,
  ];

  // Repeat the array multiple times to ensure the marquee takes up enough width for seamless scrolling
  const duplicatedLogos = [...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos];

  return (
    <section className="py-6 bg-white border-b border-t border-gray-50">
      <style>{`
        .marquee-inner {
            animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
            0% {
                transform: translateX(0%);
            }
            100% {
                transform: translateX(-50%);
            }
        }
      `}</style>
      
      <p className="text-center text-sm font-semibold text-[#003366]/60 uppercase tracking-widest mb-8">
        Trusted In Partnership With
      </p>

      <div className="overflow-hidden w-full relative max-w-7xl mx-auto select-none">
        {/* Left Gradient Overlay */}
        <div className="absolute left-0 top-0 h-full w-24 md:w-32 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" />
        
        <div
          className="marquee-inner flex will-change-transform w-fit"
          style={{ animationDuration: "35s" }}
        >
          <div className="flex items-center">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="w-40 md:w-48 flex items-center justify-center shrink-0 mx-4"
              >
                <img
                  src={logo}
                  alt={`Company Partner ${index}`}
                  className="max-h-12 w-auto object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Gradient Overlay */}
        <div className="absolute right-0 top-0 h-full w-24 md:w-32 z-10 pointer-events-none bg-linear-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
