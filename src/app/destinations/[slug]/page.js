"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { slugify } from "../../../utils/slugify";

// ✅ All destinations defined here
const destinations = [
  {
    name: "Ganvié Village",
    img: "/images/ganvie.jpg",
    description:
      "Ganvié, called the 'Venice of Africa,' is a remarkable stilt village in Benin.",
    section: {
      img: "/images/ganvie-1.jpg",
      desc: "Boat rides on the lake, local markets, and traditional life.",
      sectionText: `
Ganvié is a unique floating village on Lake Nokoué. Visitors can enjoy boat tours, 
interact with locals, explore floating markets, and learn about Tofinu culture.
      `,
    },
    fullText: `
Ganvié, located on Lake Nokoué, is often referred to as the "Venice of Africa." 
This stilt village was founded in the 16th century by people fleeing the slave trade, 
and today it remains a thriving community on water.
    `,
  },
  {
    name: "Amazone Place",
    img: "/images/amazone-0.jpg",
    description:
      "Cotonou's statue honors the powerful and legendary Dahomey Amazons.",
    section: {
      img: "/images/amazone-1.jpg",
      desc: "Learn about the Amazons’ history and cultural significance.",
      sectionText: `
Beyond its physical presence, the statue serves as a profound symbol of female empowerment and historical reclamation. By immortalizing the Mino, or "Our Mothers," it not only educates visitors about the remarkable history of these warrior women but also celebrates their enduring legacy. The monument's prominence in Cotonou underscores its importance as a cultural and historical touchstone, drawing tourists and locals alike to reflect on the bravery and resilience of Benin's past.
      `,
    },
    fullText: `
The "Monument Amazone" in Cotonou, Benin, is a striking 30-meter-tall bronze statue dedicated to the legendary Dahomey Amazons. This monument stands as a powerful tribute to the all-female military regiment that served the Kingdom of Dahomey, symbolizing their courage, patriotism, and the strength of Beninese women. Located in a central square, it is a significant landmark that honors the nation's pre-colonial heritage and has become a source of national pride.
    `,
  },
  {
    name: "Ouidah Cultural Arena",
    img: "/images/ouidah.jpg",
    description: "The Ouidah Arena hosts the annual Vodun Festival.",
    section: {
      img: "/images/ouidah-1.jpeg",
      desc: "Attend traditional ceremonies and cultural events.",
      sectionText: `
Ouidah Arena is the hub of Vodun culture. Visitors can witness ceremonies, 
visit the Temple of Pythons, and explore the rich history of Benin's spiritual traditions.
      `,
    },
    fullText: `
Ouidah is famous for its Vodun (Voodoo) traditions and cultural heritage.
    `,
  },
];

export default function DestinationPage({ params }) {
  const { slug } = params;

  const destination = destinations.find((d) => slugify(d.name) === slug);

  if (!destination) {
    notFound();
  }

  const related = destinations
    .filter((d) => d.name !== destination.name)
    .slice(0, 4);

  return (
    <>
      <Navbar />

      <main className="pt-24">

        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
          <Image
            src={destination.img}
            alt={destination.name}
            fill
            priority
            className="object-cover [object-position:25%_30%]"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {destination.name}
            </h1>
            <p className="text-sm md:text-lg max-w-2xl">
              {destination.description}
            </p>
          </div>
        </section>

        {/* Main Description */}
        <section className="py-16 px-6 md:px-10 lg:px-32 text-gray-700 max-w-6xl mx-auto">
          <h2 className="text-3xl text-center font-bold mb-6">About {destination.name}</h2>
          <p className="text-lg leading-relaxed whitespace-pre-line text-justify">
            {destination.fullText}
          </p>
        </section>

        {/* Single Image + Custom Section Text */}
        {destination.section && (
          <section className="px-6 md:px-10 lg:px-32">
            <div className="relative w-full h-64 md:h-80 lg:h-[600px]  rounded-2xl overflow-hidden mb-6">
              <Image
                src={destination.section.img}
                alt={destination.name}
                fill
                className="object-cover [object-position:50%_30%] rounded-2xl"
              />
            </div>
            <p className="text-gray-700 text-lg max-w-6xl mx-auto text-justify whitespace-pre-line">
              {destination.section.sectionText}
            </p>
          </section>
        )}

        {/* Related Destinations */}
        <section className="py-16 px-6 md:px-10 lg:px-32">
          <h2 className="text-3xl text-center font-bold mb-8">You might also like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {related.map((dest) => (
              <Link
                key={dest.name}
                href={`/destinations/${slugify(dest.name)}`}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={dest.img}
                    alt={dest.name}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-4 text-center flex-1 flex flex-col justify-between">
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
        <section className="py-16 px-6 md:px-10 lg:px-32 text-center">
          <h2 className="text-3xl font-bold mb-6">Location</h2>
          <div className="w-full h-96 rounded-2xl overflow-hidden">
            <iframe
              title="Map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                destination.name
              )}, Benin&output=embed`}
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 px-6 md:px-10 lg:px-32 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Book Your Visit</h2>
          <form className="flex flex-col gap-4 text-gray-500">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="date"
              placeholder="Preferred Date"
              className="border rounded-lg px-4 py-2"
            />
            <textarea
              placeholder="Additional Notes"
              className="border rounded-lg px-4 py-2"
            />
            <button
              type="submit"
              className="mt-4 px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition"
            >
              Book Now
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}
