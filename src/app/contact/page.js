import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 px-6 md:px-20 bg-white">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-600 mb-6">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Have questions or want to plan your next adventure? Fill out the form below or reach out to us directly.
          </p>

          <form className="space-y-6 bg-white shadow-lg rounded-lg p-8 text-gray-600">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          <div className="text-center mt-10 mb-10">
            <p className="text-gray-600">
              Or email us directly at{" "}
              <a href="mailto:info@adventuresbenin.com" className="text-blue-600 font-semibold">
                info@adventuresbenin.bj
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
