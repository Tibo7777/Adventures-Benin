"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils/slugify";

// All destinations
const allDestinations = [
  { name: "Ganvié Village", img: "/images/ganvie.jpg", description: "Ganvié, called the \"Venice of Africa,\" is a remarkable stilt village in Benin.." },
  { name: "Amazone Place", img: "/images/amazone.jpg", description: "Cotonou's statue honors the powerful and legendary Dahomey Amazons.." },
  { name: "Ouidah Cultural Arena", img: "/images/ouidah.jpg", description: "The Ouidah Arena is designed to host the annual Vodun Festival.." },
  { name: "Abomey's Kingdom", img: "/images/abomey.jpg", description: "A powerful kingdom in modern-day Benin, known for its Amazon warriors.." },
  { name: "International Vodun Museum", img: "/images/porto-novo.jpg", description: "It preserves, educates, and deconstructs stereotypes of our culture" },
  { name: "Pendjari National Park", img: "/images/pendjari.jpg", description: "Savannah wildlife and safari experiences." },
  // ... add all other destinations
];

export default function DestinationDetail({ params }) {
  const { slug } = params;

  const destination = allDestinations.find(
    (dest) => slugify(dest.name) === slug
  );

  if (!destination) {
    return <p className="p-8 text-center">Destination not found.</p>;
  }

  // Related destinations (all except current)
  const related = allDestinations.filter(d => d.name !== destination.name).slice(0, 4);

  return (
    <>
      <Navbar />

      <main className="pt-24">

        {/* Hero */}
        <section className="relative h-[60vh] w-full">
          <Image
            src={destination.img}
            alt={destination.name}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{destination.name}</h1>
            <p className="text-sm md:text-lg max-w-2xl">{destination.description}</p>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 px-6 md:px-20 text-gray-700 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About {destination.name}</h2>
          <p className="text-lg leading-relaxed">
            {destination.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus felis nec dui cursus, vel dapibus nisl iaculis.
          </p>
        </section>

        {/* Related Destinations */}
        <section className="py-16 px-6 md:px-20">
          <h2 className="text-3xl font-bold mb-8">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {related.map((dest) => (
              <Link key={dest.name} href={`/destinations/${slugify(dest.name)}`} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
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
              </Link>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 px-6 md:px-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Location</h2>
          <div className="w-full h-96 rounded-2xl overflow-hidden">
            <iframe
              title="Map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(destination.name)}, Benin&output=embed`}
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition"
          >
            Plan My Visit
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
