"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function AboutPage() {
  const values = [
    { title: "Authenticity", desc: "We provide genuine experiences that reflect the true culture and spirit of Benin." },
    { title: "Flexibility", desc: "Adventures are tailored to your schedule, interests, and travel style." },
    { title: "Sustainability", desc: "We support local communities and promote eco-friendly tourism." },
    { title: "Safety & Comfort", desc: "Your well-being and convenience are our top priorities on every journey." },
  ];

  const missionVision = [
    { title: "Mission", desc: "To make discovering Benin easy, enjoyable, and sustainable. We focus on authentic cultural experiences and connecting travelers with local communities." },
    { title: "Vision", desc: "To become the leading travel experience provider across West Africa, helping tourists explore the richness of Africa with comfort and authenticity." },
  ];

  return (
    <>
      <Navbar />

      <main className="pt-24">

        {/* Hero / Intro Section */}
        <section
          className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/benin-about.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative text-center text-white px-6">
            <button className="px-6 py-3 bg-yellow-500 opacity-70 text-black rounded-full font-semibold hover:bg-yellow-600 transition">
              Explore Our Story
            </button>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-start">
              <img
                src="/images/benin-ab.png"
                alt="Benin culture"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold text-[color:var(--color-primary)] mb-6">
                Our Story
              </h2>
              <p className="text-[color:var(--color-foreground)] mb-4 text-gray-600">
                Founded in 2025 by a passionate traveler and local expert, Benin Adventures began as a small initiative to showcase hidden gems often overlooked by tourists. Our mission: authentic experiences, guided by local knowledge.
              </p>
              <p className="text-[color:var(--color-foreground)] text-gray-600">
                Today, we craft flexible adventures for every traveler, whether it’s your first visit or a return trip, Benin Adventures ensures you experience the country like a local while enjoying comfort, safety, and unforgettable memories.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-0.5 bg-white text-center px-6">
          <h2 className="text-4xl font-bold text-[color:var(--color-primary)] mb-12 ">Mission & Vision</h2>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: ".mv-swiper-button-next",
                prevEl: ".mv-swiper-button-prev"
              }}
              spaceBetween={20}
              slidesPerView={1}
              className="relative"
            >
              {missionVision.map((mv, i) => (
                <SwiperSlide key={i} className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-center items-center text-center">
                  <h3 className="text-2xl font-semibold mb-2 text-[color:var(--color-primary)]">{mv.title}</h3>
                  <p className="text-[color:var(--color-foreground)] text-gray-600">{mv.desc}</p>
                </SwiperSlide>
              ))}

              {/* Arrows */}
              <div className="mv-swiper-button-prev text-[color:var(--color-primary)] !absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-3xl font-bold">⟵</div>
              <div className="mv-swiper-button-next text-[color:var(--color-primary)] !absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-3xl font-bold">⟶</div>
            </Swiper>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-gray-600">
            {missionVision.map((mv, i) => (
              <div key={i} className="text-left">
                <h3 className="text-2xl font-semibold mb-4 text-[color:var(--color-primary)]">{mv.title}</h3>
                <p className="text-[color:var(--color-foreground)] text-gray-600">{mv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-100 text-center px-6">
          <h2 className="text-4xl font-bold text-[color:var(--color-primary)] mb-12">Our Values</h2>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: ".val-swiper-button-next",
                prevEl: ".val-swiper-button-prev"
              }}
              spaceBetween={20}
              slidesPerView={1}
              className="relative"
            >
              {values.map((val, i) => (
                <SwiperSlide key={i} className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-center items-center text-center">
                  <h3 className="text-2xl font-semibold mb-2 text-[color:var(--color-primary)]">{val.title}</h3>
                  <p className="text-[color:var(--color-foreground)] text-gray-600">{val.desc}</p>
                </SwiperSlide>
              ))}

              {/* Arrows */}
              <div className="val-swiper-button-prev text-[color:var(--color-primary)] !absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-3xl font-bold">⟵</div>
              <div className="val-swiper-button-next text-[color:var(--color-primary)] !absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-3xl font-bold">⟶</div>
            </Swiper>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-10 max-w-6xl mx-auto text-gray-600">
            {values.map((val, i) => (
              <div key={i} className="text-left">
                <h3 className="text-2xl font-semibold mb-2 text-[color:var(--color-primary)]">{val.title}</h3>
                <p className="text-[color:var(--color-foreground)] text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-2 bg-gray-100 text-center text-gray-600 px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Benin Adventure?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Explore our tours or get in touch to craft your custom experience.
          </p>
          <button className="px-6 py-3 bg-yellow-500 rounded-full font-semibold hover:opacity-90 transition">
            Explore Tours
          </button>
        </section>

      </main>

      <Footer />
    </>
  );
}
