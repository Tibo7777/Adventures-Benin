"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function AboutSection() {
  const features = [
    {
      title: "Local Expertise",
      description:
        "Our guides know every corner of Benin for a safe, authentic experience.",
    },
    {
      title: "Custom Itineraries",
      description:
        "Tailored experiences that match your preferences and budget.",
    },
    {
      title: "Unforgettable Memories",
      description:
        "From safaris to cultural tours, we make every trip unique.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-6">About Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          At <span className="text-primary font-semibold">Benin Adventures</span>, we help travelers discover the beauty, culture, and hidden treasures of Benin. Whether you’re here for history, adventure, or relaxation, we make your trip unforgettable.
        </p>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl shadow-md"
            >
              <h3 className="text-yellow-500 text-xl font-semibold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mt-10">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 bg-gray-50 rounded-2xl shadow-md">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
