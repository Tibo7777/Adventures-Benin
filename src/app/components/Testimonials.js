"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const reviews = [
    { name: "Joni, Belgium", text: "I had the best experience exploring Ouidah with Benin Adventures!" },
    { name: "Marie, France", text: "Ganvié was magical, highly recommend their tours!" },
    { name: "Alan, Morocco", text: "Pendjari safari exceeded all expectations. Excellent guides." },
    { name: "Sophie, Germany", text: "Amazing cultural experience in Abomey — unforgettable!" },
    { name: "Kofi, Ghana", text: "Porto-Novo city tour was very well organized and informative." },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-primary mb-12">What Travelers Say</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-2xl"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md h-full flex flex-col justify-between">
              <p className="text-gray-600 mb-4 flex-grow">"{review.text}"</p>
              <h4 className="text-lg font-semibold text-yellow-500 mt-4">{review.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
