"use client";

import Image from "next/image";

export default function HeroSection({ onExploreClick }) {
  return (
    <section className="relative h-screen flex flex-col justify-between">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/benin-hero.jpg"
          alt="Discover Benin"
          fill
          className="object-cover object-[25%_50%] md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative text-center text-white p-6 md:p-8 pt-16 md:pt-24 mx-auto mt-10">
        <h6 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Discover Benin
        </h6>
      </div>

      <div className="relative text-center mb-8 md:mb-12">
        <button
          onClick={onExploreClick}
          className="px-6 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-600 transition"
        >
          Start Exploring
        </button>
      </div>
    </section>
  );
}
