import { ShieldCheck, Award, Shield, Star, ArrowRight } from "lucide-react";
import Button from "../../../shared/components/ui/Button";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <ShieldCheck size={26} className="text-[#003366]" />,
      title: "Verified Companions",
      desc: "Every companion undergoes a rigorous background check.",
      bgColor: "bg-[#F3F6F8]",
    },
    {
      id: 2,
      icon: <Award size={26} className="text-[#E6B34B]" />,
      title: "Licensed Guides",
      desc: "Professional experts with deep historical knowledge.",
      bgColor: "bg-[#FFF9F0]",
    },
    {
      id: 3,
      icon: <Shield size={26} className="text-[#003366]" />,
      title: "Safe Booking",
      desc: "Secure payments and 24/7 emergency support.",
      bgColor: "bg-[#F3F6F8]",
    },
    {
      id: 4,
      icon: <Star size={26} className="text-[#E6B34B]" />,
      title: "Authentic Experience",
      desc: "Go beyond the tourist trails with local insights.",
      bgColor: "bg-[#FFF9F0]",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
          
          {/* Left Side: Cards Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className={`p-6 rounded-2xl ${feature.bgColor} flex flex-col items-start`}
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-[17px] font-bold text-[#003366] mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Side: Text & CTA */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-[#003366] leading-tight mb-6">
              Why Choose Masr Mate for Your Next Adventure?
            </h2>
            <p className="text-gray-500 text-[17px] mb-8 leading-relaxed">
              We bridge the gap between travelers and the authentic heart of
              Egypt. Our platform ensures that every moment of your journey is
              filled with stories, safety, and local connection.
            </p>
            <Button 
              variant="primary" 
              className="rounded-xl mx-auto lg:mx-0 w-max"
              icon={ArrowRight}
            >
              Learn more about our platform
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
