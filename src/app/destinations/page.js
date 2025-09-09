"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function DestinationsPage() {
  const destinations = [
    { name: "Ganvié Village", slug: "ganvie-village", img: "/images/ganvie.jpg", description: "Ganvié, called the 'Venice of Africa,' is a remarkable stilt village in Benin.." },
    { name: "Amazone Place", slug: "amazone-place", img: "/images/amazone.jpg", description: "Cotonou's statue honors the powerful and legendary Dahomey Amazons.." },
    { name: "Ouidah Cultural Arena", slug: "ouidah-cultural-arena", img: "/images/ouidah.jpg", description: "The Ouidah Arena is designed to host the annual Vodun Festival.." },
    { name: "Abomey's Kingdom", slug: "abomeys-kingdom", img: "/images/abomey.jpg", description: "A powerful kingdom in modern-day Benin, known for its Amazon warriors.." },
    { name: "International Vodun Museum", slug: "vodun-museum", img: "/images/porto-novo.jpg", description: "It preserves, educates, and deconstructs stereotypes of our culture" },
    { name: "Ouidah Door of no return", slug: "ouidah-door-of-no-return", img: "/images/ouidah-2.avif", description: "Experience a journey of historical significance at Ouidah's Door of No Return.." },
    { name: "Cotonou", slug: "cotonou", img: "/images/cotonou.jpg", description: "Vibrant city life and markets." },
    { name: "Natitingou", slug: "natitingou", img: "/images/natitingou.jpg", description: "Gateway to the Atakora mountains." },
  ];

  return (
    <>
      <Navbar />

      <main className="pt-24">

        {/* Hero Section */}
        <section className="relative h-[60vh] w-full">
          <Image
            src="/images/dest-benin.jpg"
            alt="Destinations in Benin"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Destinations</h1>
            <p className="text-sm md:text-lg max-w-2xl">
              Explore the most iconic and hidden gems of Benin.
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16 px-4 md:px-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full aspect-square">
                  <Image
                    src={dest.img}
                    alt={dest.name}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h2 className="text-xl font-semibold text-[color:var(--color-primary)] mb-2 text-center md:text-left">
                    {dest.name}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 md:line-clamp-none">
                    {dest.description}
                  </p>
                  <div className="mt-2 flex justify-center md:justify-start">
                    <button className="px-4 py-2 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-600 transition text-sm md:text-base">
                      Explore
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
