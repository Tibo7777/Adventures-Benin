import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PopularDestinations from "./components/PopularDestinations";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <>
          <Navbar />
      <HeroSection />
      <AboutSection />
      <PopularDestinations />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}
