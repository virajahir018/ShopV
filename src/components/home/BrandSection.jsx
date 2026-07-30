import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    id: 1,
    name: "Nike",
    image: "/images/brands/nike2.jpg",
  },
  {
    id: 2,
    name: "Puma",
    image: "/images/brands/puma1.jpg",
  },
  {
    id: 3,
    name: "Adidas",
    image: "/images/brands/adidas.jpg",
  },
  {
    id: 4,
    name: "Roadster",
    image: "/images/brands/roadster.jpg",
  },
  {
    id: 5,
    name: "H&M",
    image: "/images/brands/hm.jpg",
  },
  {
    id: 6,
    name: "Zara",
    image: "/images/brands/zara.jpg",
  },
  {
    id: 7,
    name: "Levi's",
    image: "/images/brands/levis.jpg",
  },
  {
    id: 8,
    name: "U.S. Polo",
    image: "/images/brands/uspa.jpg",
  },
];

export default function BrandSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
  <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
    Top Brands
  </h2>

  <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
    {brands.map((brand) => (
      <Link
        key={brand.id}
        href={`/brand/${brand.name.toLowerCase()}`}
      >
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-2xl">
          
          <div className="flex h-28 items-center justify-center">
            <Image
              src={brand.image}
              alt={brand.name}
              width={120}
              height={120}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <h3 className="mt-5 text-center text-lg font-semibold text-gray-800">
            {brand.name}
          </h3>
        </div>
      </Link>
    ))}
  </div>
</section>
  );
}