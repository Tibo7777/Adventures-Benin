"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-2 px-6 text-center bg-gray-100 text-white mt">
      <h2 className="text-4xl font-bold mb-6">Ready to Explore Benin?</h2>
      <p className="text-lg mb-8 max-w-xl mx-auto text-gray-600">
        Start planning your adventure with us today. Unique experiences, local expertise, and unforgettable memories await!
      </p>
      <Link href="/destinations">
        <button className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition">
          Plan My Trip
        </button>
      </Link>
    </section>
  );
}
