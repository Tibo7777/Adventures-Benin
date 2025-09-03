"use client";

import { useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PopularDestinations from "./components/PopularDestinations";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";

export default function Home() {
  const popularRef = useRef(null);

  const scrollToPopular = () => {
    popularRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Navbar />
      <HeroSection onExploreClick={scrollToPopular} />
      <AboutSection />
      <PopularDestinations ref={popularRef} />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}
