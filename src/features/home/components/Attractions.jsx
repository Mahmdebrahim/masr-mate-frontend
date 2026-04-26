import { useState } from "react";
import { assets } from "../../../assets/assets";

export default function Attractions() {
  const [stopScroll, setStopScroll] = useState(false);
  const cardData = [
    {
      title: "Pyramids",
      image: assets.ma3lam1,
    },
    {
      title: " Citadel of Qaitbay",
      image: assets.ma3lam2,
    },
    {
      title: " Karnak Temple ",
      image: assets.ma3lam6,
    },
    {
      title: " Bibliotheca Alexandrina",
      image: assets.ma3lam3,
    },
    {
      title: "Grand Egyptian Museum",
      image: assets.ma3lam5,
    },
    {
      title: "Temple of Medinet Habu",
      image: assets.ma3lam4,
    },
  ];

  return (
    <section className="py-20">
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

      <div className="overflow-hidden w-full relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
            Top Attractions
          </h2>
          <div className="w-18 h-0.5 bg-[#FBB03B] mx-auto rounded-full"></div>
        </div>
        <div className="absolute left-0 top-0 h-full w-10 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" />
        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: cardData.length * 2500 + "ms",
          }}
          onMouseEnter={() => setStopScroll(true)}
          onMouseLeave={() => setStopScroll(false)}
        >
          <div className="flex">
            {[...cardData, ...cardData].map((card, index) => (
              <div
                key={index}
                className="w-56 mx-4 h-80 relative group hover:scale-90 transition-all duration-300"
              >
                <img
                  src={card.image}
                  alt="card"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="flex items-center rounded-2xl justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                  <p className="text-white text-lg font-semibold text-center">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-10 z-10 pointer-events-none bg-linear-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
