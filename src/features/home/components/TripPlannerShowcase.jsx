import { Sparkles, Route, LockKeyhole, ArrowRight, BrainCircuit } from "lucide-react";
import Button from "../../../shared/components/ui/Button";

export default function TripPlannerShowcase() {
  const features = [
    {
      icon: <BrainCircuit size={24} className="text-[#003366]" />,
      title: "AI-Powered Optimization",
      desc: "Our algorithm calculates the ideal travel times between attractions to maximize your experience."
    },
    {
      icon: <Route size={24} className="text-[#003366]" />,
      title: "Dynamic Routes",
      desc: "Adjusts your itinerary in real-time based on local traffic and weather conditions."
    },
    {
      icon: <LockKeyhole size={24} className="text-[#003366]" />,
      title: "Local Secrets",
      desc: "Access curated hidden gems only locals know, away from the typical tourist crowds."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF9F0] border border-[#FBB03B]/30 mb-6">
            <Sparkles size={16} className="text-[#FBB03B]" />
            <span className="text-sm font-medium tracking-wide text-[#003366]">Smart AI Trip Planner</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-[42px] font-bold leading-tight mb-6 text-[#003366]">
            Plan Your Dream Trip in Seconds
          </h2>
          
          <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
            Forget about spending hours researching. Tell us your destination, dates, and interests, and our smart AI will generate a personalized itinerary just for you.
          </p>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-200 before:to-transparent">
             {/* Timeline Steps */}
             <div className="flex gap-6 relative">
                <div className="size-12 rounded-full bg-[#FBB03B] flex items-center justify-center text-[#003366] font-bold z-10 shrink-0 border-4 border-white shadow-md">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#003366]">Basic Details</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">Select your destination, confirm your travel dates, and set the perfect budget effortlessly.</p>
                </div>
             </div>
             <div className="flex gap-6 relative">
                <div className="size-12 rounded-full bg-[#F3F6F8] flex items-center justify-center text-[#003366] font-bold z-10 shrink-0 border-4 border-white shadow-md">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#003366]">Discover Interests</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">Tell us what you love—whether it's ancient history, authentic local food, or desert adventures.</p>
                </div>
             </div>
             <div className="flex gap-6 relative">
                <div className="size-12 rounded-full bg-[#F3F6F8] flex items-center justify-center text-[#003366] font-bold z-10 shrink-0 border-4 border-white shadow-md">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#003366]">Smart Itinerary</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">Get a beautifully mapped, day-by-day routing optimized for an unforgettable experience.</p>
                </div>
             </div>
          </div>
          
          <div className="mt-12">
            <Button variant="primary" className="rounded-full px-8 py-4 font-semibold text-[16px]" icon={ArrowRight}>
              Generate Trip Plan
            </Button>
          </div>
        </div>

        {/* Right Side: Visual / Floating Cards */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-10 lg:mt-0">
           {/* Mockup card representing "Why it's smart" */}
           <div className="w-full max-w-md bg-[#F3F6F8] border border-gray-100 rounded-3xl p-8 shadow-xl relative z-10">
             <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-6">
                <div className="size-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#003366]">
                  <BrainCircuit size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#003366]">Why it's Smart</h3>
             </div>

             <div className="flex flex-col gap-8">
               {features.map((feature, i) => (
                 <div key={i} className="flex gap-5">
                   <div className="shrink-0 mt-1 size-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                     {feature.icon}
                   </div>
                   <div>
                     <h4 className="text-[#003366] font-bold text-lg mb-2">{feature.title}</h4>
                     <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
           
           <div className="absolute -right-2 lg:-right-8 top-8 w-24 bg-white rounded-2xl p-3 shadow-lg border border-gray-100 z-20 animate-bounce" style={{animationDuration: "3s"}}>
              <div className="flex justify-center mb-1">
                <Sparkles className="text-[#FBB03B]" size={20} />
              </div>
              <p className="text-[#003366] text-xs font-bold text-center">AI Ready</p>
           </div>
        </div>

      </div>
    </section>
  );
}
