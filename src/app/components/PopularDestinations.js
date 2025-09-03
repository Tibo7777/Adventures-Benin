"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { forwardRef } from "react";

const PopularDestinations = forwardRef((props, ref) => {
  const destinations = [
    { name: "Ganvié Village", img: "/images/ganvie.jpg", description: "Ganvié, called the \"Venice of Africa,\" is a remarkable stilt village in Benin.." },
    { name: "Amazone Place", img: "/images/amazone.jpg", description: "Cotonou's statue honors the powerful and legendary Dahomey Amazons.." },
    { name: "Ouidah Cultural Arena", img: "/images/ouidah.jpg", description: "The Ouidah Arena is designed to host the annual Vodun Festival.." },
    { name: "Abomey's Kingdom", img: "/images/abomey.jpg", description: "A powerful kingdom in modern-day Benin, known for its Amazon warriors.." },
    { name: "International Vodun Museum", img: "/images/porto-novo.jpg", description: "It preserves, educates, and deconstructs stereotypes of our culture" },
  ];

  return (
    <section ref={ref} className="py-16 px-6 md:px-20 text-center bg-gray-50">
      <h2 className="text-4xl font-bold text-primary mb-12">Popular Destinations</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
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
});

export default PopularDestinations;
