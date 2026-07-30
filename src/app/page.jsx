"use client";

import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import BrandSection from "@/components/home/BrandSection";
import CategorySection from "@/components/home/CategorySection";
import DealsSection from "@/components/home/DealsSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ProductGrid from "@/components/ProductGrid";
import { useSelector } from "react-redux";

export default function Page() {
  const search = useSelector((state) => state.search.value);

  return (
    <div>
      {!search && (
        <>
          <HeroSlider />
          <CategorySection />
          <BrandSection />
          <DealsSection />
          <FeaturedProducts />
        </>
      )}

      <ProductGrid />

      {!search && <Footer />}
    </div>
  );
}