import Image from "next/image";
import Link from "next/link";

const deals = [
  {
    id: 1,
    title: "Fashion Sale",
    discount: "Up to 80% OFF",
    image: "/images/deals/deal1.jpg",
  },
  {
    id: 2,
    title: "Footwear Collection",
    discount: "Min. 60% OFF",
    image: "/images/deals/deal2.jpg",
  },
  {
    id: 3,
    title: "Beauty Products",
    discount: "Flat 50% OFF",
    image: "/images/deals/deal3.jpg",
  },
  {
    id: 4,
    title: "Accessories",
    discount: "Buy 1 Get 1",
    image: "/images/deals/deal4.jpg",
  },
];

export default function DealsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold">
          Deals of the Day
        </h2>

        <p className="mt-2 text-gray-500">
          Don't miss today's best offers
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {deals.map((deal) => (
          <Link
            key={deal.id}
            href="/products"
            className="group overflow-hidden rounded-2xl bg-white shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src={deal.image}
                alt={deal.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-0 p-5 text-white">
                <h3 className="text-xl font-bold">
                  {deal.title}
                </h3>

                <p className="mt-1 text-sm">
                  {deal.discount}
                </p>

                <button className="mt-4 rounded-lg bg-pink-600 px-5 py-2 text-sm font-semibold transition hover:bg-pink-700">
                  Shop Now
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}