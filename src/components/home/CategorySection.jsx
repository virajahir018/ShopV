import React from "react";
import Image from "next/image";

function CategorySection() {
  const categories = [
    {
      id: 1,
      name: "Men",
      image: "/images/categories/men.jpg",
    },
    {
      id: 2,
      name: "Women",
      image: "/images/categories/women.jpg",
    },
    {
      id: 3,
      name: "Kids",
      image: "/images/categories/kids.jpg",
    },
    {
      id: 4,
      name: "Footwear",
      image: "/images/categories/footwear.jpg",
    },
    {
      id: 5,
      name: "Beauty",
      image: "/images/categories/beauty.jpg",
    },
    {
      id: 6,
      name: "Watches",
      image: "/images/categories/watches.jpg",
    },
    {
      id: 7,
      name: "Bags",
      image: "/images/categories/bags.jpg",
    },
    {
      id: 8,
      name: "Sports",
      image: "/images/categories/sports.jpg",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <h2 className="mb-8 text-3xl font-bold text-center">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition hover:scale-105 hover:shadow-xl"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={300}
              height={300}
              className="h-52 w-full object-cover"
            />

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;