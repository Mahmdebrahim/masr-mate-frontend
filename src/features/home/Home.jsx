import Hero from "./components/Hero";
import Steps from "./components/Steps";
import WhyChooseUs from "./components/WhyChooseUs";
import CallToAction from "./components/CallToAction";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Steps />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </div>
  );
}