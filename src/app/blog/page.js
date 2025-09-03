"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function BlogPage() {
  const blogPosts = [
    { title: "Discover Ganvié", img: "/images/blog-ganvie.jpg", excerpt: "Explore the unique charm of Ganvié.", slug: "discover-ganvie" },
    { title: "Ouidah: History & Culture", img: "/images/blog-ouidah.jpg", excerpt: "Learn about Ouidah’s rich history.", slug: "ouidah-history-culture" },
    { title: "Abomey Palaces", img: "/images/blog-abomey.jpg", excerpt: "Step back in time at the Abomey palaces.", slug: "abomey-palaces" },
    { title: "Pendjari National Park", img: "/images/blog-pendjari.jpg", excerpt: "Experience wildlife up close.", slug: "pendjari-safari" },
    { title: "Cotonou Markets", img: "/images/blog-cotonou.jpg", excerpt: "Discover lively markets and crafts.", slug: "cotonou-markets" },
    { title: "Natitingou", img: "/images/blog-natitingou.jpg", excerpt: "Explore northern Benin landscapes.", slug: "natitingou-atakora" },
    { title: "Benin Cuisine", img: "/images/blog-food.jpg", excerpt: "A culinary journey through Benin.", slug: "benin-cuisine" },
    { title: "Festivals in Benin", img: "/images/blog-festival.jpg", excerpt: "Celebrate colorful festivals.", slug: "benin-festivals" },
  ];

  return (
    <>
      <Navbar />

      <main className="pt-12">

        {/* Hero Section */}
        <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">

          {/* Mobile Image */}
          <div className="block md:hidden relative w-full h-full">
            <Image
              src="/images/blog-benin.jpg"
              alt="Bio Guerra Monument Mobile"
              fill
              className="object-cover object-[80%_20%]"
              priority
            />
          </div>

          {/* Desktop Image */}
          <div className="hidden md:block relative w-full h-full">
            <Image
              src="/images/blog-benin.jpg"
              alt="Bio Guerra Monument Desktop"
              fill
              className="object-cover object-[50%_20%]"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <p className="text-sm md:text-lg max-w-2xl">
              Stories, tips, and guides to help you explore Benin like a local.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col"
              >
                <div className="relative w-full h-44 sm:h-48 md:h-52">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h2 className="text-xl font-semibold text-[color:var(--color-primary)] mb-2 text-center md:text-left">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 text-center md:text-left">{post.excerpt}</p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="mt-auto text-yellow-500 font-semibold hover:underline text-center md:text-left"
                  >
                    Read More
                  </a>
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
