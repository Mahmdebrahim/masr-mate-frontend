import Hero from "./components/Hero";
import TrustedCompanies from "./components/TrustedCompanies";
import TripPlannerShowcase from "./components/TripPlannerShowcase";
import Steps from "./components/Steps";
import WhyChooseUs from "./components/WhyChooseUs";
import CallToAction from "./components/CallToAction";
import Testimonials from "./components/Testimonials";
import Attractions from "./components/Attractions";
import ExploreCompanions from "./components/ExploreCompanions";
import About from "./components/About";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedCompanies />
      <Steps />
      <About/>
      <ExploreCompanions />
      <Attractions/>
      <TripPlannerShowcase />
      <Banner/>
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </div>
  );
}