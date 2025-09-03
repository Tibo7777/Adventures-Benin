"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function DestinationsPage() {
  const destinations = [
    { name: "Ganvié Village", img: "/images/ganvie.jpg", description: "Ganvié, called the \"Venice of Africa,\" is a remarkable stilt village in Benin.." },
    { name: "Amazone Place", img: "/images/amazone.jpg", description: "Cotonou's statue honors the powerful and legendary Dahomey Amazons.." },
    { name: "Ouidah Cultural Arena", img: "/images/ouidah.jpg", description: "The Ouidah  Arena is designed to host the annual Vodun Festival.." },
    { name: "Abomey's Kingdom", img: "/images/abomey.jpg", description: "A powerful kingdom in modern-day Benin, known for its Amazon warriors.." },
    { name: "International Vodun Museum", img: "/images/porto-novo.jpg", description: "It preserves, educates, and deconstructs stereotypes of our culture" },
    { name: "Pendjari National Park", img: "/images/pendjari.jpg", description: "Savannah wildlife and safari experiences." },
    { name: "Cotonou", img: "/images/cotonou.jpg", description: "Vibrant city life and markets." },
    { name: "Natitingou", img: "/images/natitingou.jpg", description: "Gateway to the Atakora mountains." },
    { name: "Parakou", img: "/images/parakou.jpg", description: "Cultural city and northern trade center." },
    { name: "Dassa-Zoumé", img: "/images/dassa.jpg", description: "Spiritual center with natural wonders." },
    { name: "Bohicon", img: "/images/bohicon.jpg", description: "Traditional markets and crafts." },
    { name: "Kandi", img: "/images/kandi.jpg", description: "Agricultural hub in northern Benin." },
    { name: "Lokossa", img: "/images/lokossa.jpg", description: "Beautiful landscapes and rich traditions." },
    { name: "Savé", img: "/images/save.jpg", description: "Peaceful town surrounded by nature." },
    { name: "Oro", img: "/images/oro.jpg", description: "Small town with historical significance." },
    { name: "Savalou", img: "/images/savalou.jpg", description: "Known for festivals and local culture." },
    { name: "Tanguiéta", img: "/images/tanguieta.jpg", description: "Northern town near Pendjari Park." },
    { name: "Allada", img: "/images/allada.jpg", description: "Historical town with royal heritage." },
    { name: "Abomey-Calavi", img: "/images/abomey-calavi.jpg", description: "Modern city with coastal access." },
    { name: "Zagnanado", img: "/images/zagnanado.jpg", description: "Agricultural and artisan community." },
    { name: "Comé", img: "/images/come.jpg", description: "Fishing village and coastal town." },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((dest) => (
              <div
                key={dest.name}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={dest.img}
                    alt={dest.name}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-4 text-center md:text-left flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-[color:var(--color-primary)] mb-2">
                    {dest.name}
                  </h3>
                  <p className="text-gray-600">{dest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
