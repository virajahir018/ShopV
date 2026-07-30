"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Next
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  // Previous
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + banners.length) % banners.length
    );
  };

  return (
    <section className="relative mx-auto mt-5 w-full max-w-7xl px-4">
      <div className="relative h-[180px] overflow-hidden rounded-2xl sm:h-[250px] md:h-[350px] lg:h-[450px]">

        {/* Images */}
        {banners.map((banner, index) => (
          <Image
            key={index}
            src={banner}
            alt={`Banner ${index + 1}`}
            fill
            priority={index === 0}
            className={`absolute object-cover transition-all duration-700
              ${
                index === currentSlide
                  ? "opacity-100"
                  : "opacity-0"
              }`}
          />
        ))}

        {/* Previous */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg hover:bg-white"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg hover:bg-white"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-pink-600 w-8"
                  : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}