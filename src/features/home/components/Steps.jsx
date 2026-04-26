import { Map, UserSearch, BadgeCheck } from "lucide-react";

export default function Steps() {
  const stepsData = [
    {
      id: 2,
      icon: <UserSearch size={28} className="text-[#003366]" />,
      title: "Select Companion",
      desc: "Connect with verified locals who match your interests and language.",
    },
    {
      id: 1,
      icon: <Map size={28} className="text-[#003366]" />,
      title: "Choose Destination",
      desc: "Browse through Egypt's iconic cities and find your perfect spot.",
    },
    {
      id: 3,
      icon: <BadgeCheck size={28} className="text-[#003366]" />,
      title: "Enjoy Your Trip",
      desc: "Experience authentic culture safely with your local guide.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:pb-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
            Simple Steps to Your Dream Trip
          </h2>
          <div className="w-18 h-0.5 bg-[#FBB03B] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stepsData.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className="w-15 h-15 bg-[#F3F6F8] rounded-2xl flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 max-w-xs mx-auto text-sm md:text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
