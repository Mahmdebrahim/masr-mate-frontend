import { Rocket } from "lucide-react";
import Button from "../../../shared/components/ui/Button";
import { assets } from "../../../assets/assets.js";

export default function Hero() {
  return (
    <section
      className="min-h-[90vh] py-20 pt-32 relative flex flex-col justify-center overflow-hidden  bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.heroBg1})` }}
    >
      {/* <img
        src={assets.heroBg1}
        className="absolute bottom-0 lg:-bottom-20 left-1/2 -translate-x-1/2 w-full max-w-6xl pointer-events-none "
        alt="background"
      /> */}

      <div className="text-center max-w-4xl mx-auto  relative z-10">
        {/* Announcement */}
        <div className="rainbow relative z-0 overflow-hidden p-px flex items-center justify-center rounded-full transition duration-300 active:scale-100">
          <button className="flex items-center justify-center gap-3 pl-4 pr-6 py-3 text-white rounded-full font-medium bg-[#003366]/80 backdrop-blur">
            <div className="relative flex size-3.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#FBB03B] opacity-75 animate-ping duration-300"></span>
              <span className="relative inline-flex size-2 rounded-full bg-[#FBB03B]"></span>
            </div>
            <span className="text-xs">Start Your Journey</span>
          </button>
        </div>

        {/* Title */}
        <h1 className="text-6xl relative md:text-7xl font-medium max-w-[850px] mx-auto leading-tight bg-linear-to-r from-[#003366] to-[#ddb067] text-transparent bg-clip-text mt-7">
          Discover the Magic of Egypt With a Local Friend
          <img
            src={assets.sktech1}
            alt="sketch underline"
            className="md:block absolute -bottom-5 right-30 min-[579px]:right-50 min-[768px]:right-70 min-[834px]:right-0 w-52"
          />
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base mx-auto max-w-2xl text-center text-gray-600 mt-15">
          Connect with verified local companions for an authentic journey
          through ancient wonders and hidden gems.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="relative">
            <Button variant="primary" size="sm" className="rounded-full px-8">
              Get Started
            </Button>
            <img
              src={assets.arrow3}
              alt="sketch underline"
              className="hidden md:block absolute -bottom-10 right-40 w-50 rotate-0"
            />
          </div>
          <Button
            variant="outline"
            icon={Rocket}
            size="sm"
            className="rounded-full px-8"
          >
            Generate Your Plan
          </Button>
        </div>
      </div>
    </section>
  );
}
