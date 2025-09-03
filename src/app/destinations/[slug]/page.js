import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const destinations = [
  {
    name: "Ganvié",
    slug: "ganvie",
    img: "/images/ganvie.jpg",
    description: "The famous floating village in Benin, often called the 'Venice of Africa'.",
  },
  {
    name: "Ouidah",
    slug: "ouidah",
    img: "/images/ouidah.jpg",
    description: "Rich in history and cultural heritage, including the Slave Route and sacred forests.",
  },
  {
    name: "Abomey",
    slug: "abomey",
    img: "/images/abomey.jpg",
    description: "Powerful legacy of the Kingdom of Dahomey with royal palaces and museums.",
  },
  {
    name: "Porto-Novo",
    slug: "porto-novo",
    img: "/images/porto-novo.jpg",
    description: "Traditional culture, colonial architecture, and city tours await here.",
  },
];

export default function DestinationDetail({ params }) {
  const destination = destinations.find(d => d.slug === params.slug);

  if (!destination) {
    return <p>Destination not found</p>;
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 px-6 md:px-20">
        <section className="py-16">
          <h1 className="text-4xl font-bold text-[color:var(--color-primary)] mb-6">{destination.name}</h1>
          <img src={destination.img} alt={destination.name} className="rounded-xl w-full h-80 object-cover mb-6" />
          <p className="text-gray-600">{destination.description}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
