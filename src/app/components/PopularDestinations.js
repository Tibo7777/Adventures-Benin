"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PopularDestinations() {
  const destinations = [
    { name: "Ganvié", img: "/images/ganvie.jpg", description: "The famous floating village in Benin." },
    { name: "Ouidah", img: "/images/ouidah.jpg", description: "Rich history and cultural heritage." },
    { name: "Abomey", img: "/images/abomey.jpg", description: "Powerful legacy Dahomey's Kingdom." },
    { name: "Porto-Novo", img: "/images/porto-novo.jpg", description: "Traditional culture and city tours." },
  ];

  return (
    <section className="py-16 px-6 md:px-20 text-center bg-gray-50">
      <h2 className="text-4xl font-bold text-primary mb-12">Popular Destinations</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation // arrows
        pagination={{ clickable: true, dynamicBullets: true }} // dots
        autoplay={{ delay: 6000, disableOnInteraction: false }} // slower autoplay
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-2xl"
      >
        {destinations.map((dest) => (
          <SwiperSlide key={dest.name}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img src={dest.img} alt={dest.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl text-yellow-500 font-semibold text-primary mb-2">{dest.name}</h3>
                <p className="text-gray-600">{dest.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
