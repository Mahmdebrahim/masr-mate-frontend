import { ShieldCheck, Map, Smile, ArrowRight } from "lucide-react";
import { assets } from "../../../assets/assets";
import Button from "../../../shared/components/ui/Button";

export default function About() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
            About Masr Mate
          </h2>
          <p className="text-sm md:text-base text-gray-500 mb-6 max-w-2xl mx-auto">
            We connect travelers with the authentic heart of Egyptian culture
            through trusted, verified local companions.
          </p>
          <div className="w-18 h-0.5 bg-[#FBB03B] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between  py-6">
          
          <div className="w-full lg:w-1/2  justify-center hidden lg:flex">
            <img
              className="max-w-md w-full rounded-2xl h-auto object-cover shadow-lg border border-gray-100"
              src={assets.abourSec}
              alt="Egypt Pyramids"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-3xl font-bold text-[#003366]">
              Unforgettable Travel Experiences
            </h3>
            <p className="text-[15px] text-gray-500 mt-4 leading-relaxed max-w-lg">
              Experience Egypt like never before. From iconic monuments to
              hidden local gems, our platform ensures your journey is safe,
              personalized, and truly memorable.
            </p>

            <div className="flex flex-col gap-8 mt-10 w-full max-w-md lg:max-w-none">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-5">
                <div className="size-12 flex items-center justify-center shrink-0 bg-[#F3F6F8] rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-[#003366]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#003366]">
                    Safe & Secure Journeys
                  </h4>
                  <p className="text-[15px] text-gray-500 mt-1 leading-relaxed">
                    Your safety is our top priority. We thoroughly vet all our
                    local companions to ensure a worry-free trip.
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-3">
                <div className="size-12 flex items-center justify-center shrink-0 bg-[#FFF9F0] rounded-xl">
                  <Map className="w-6 h-6 text-[#E6B34B]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#003366]">
                    Custom Itineraries
                  </h4>
                  <p className="text-[15px] text-gray-500 mt-1 leading-relaxed">
                    Explore hidden spots and iconic landmarks exactly the way
                    you want, tailored smoothly to your preferences.
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-5">
                <div className="size-12 flex items-center justify-center shrink-0 bg-[#F3F6F8] rounded-xl">
                  <Smile className="w-6 h-6 text-[#003366]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#003366]">
                    Authentic Experiences
                  </h4>
                  <p className="text-[15px] text-gray-500 mt-1 leading-relaxed">
                    Engage with the real culture, try authentic local foods, and
                    create bonds that will last a lifetime.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-8 flex justify-center lg:justify-start">
              <Button
                variant="primary"
                className="rounded-xl px-6 py-3 font-medium flex items-center gap-2"
                icon={ArrowRight}
              >
                Read more
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
