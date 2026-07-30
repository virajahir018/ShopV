import FeaturedProducts from "@/components/home/FeaturedProducts";
import ProductGrid from "@/components/layout/ProductGrid";
import FilterSidebar from "@/components/product/FilterSidebar";
import SortDropdown from "@/components/product/SortDropdown";

export default function ProductsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10">

      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          All Products
        </h1>

        <SortDropdown />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

        {/* Left Sidebar */}
        <div className="lg:col-span-1">
          <FilterSidebar />
        </div>

        {/* Products */}
        <div className="lg:col-span-3">
            <ProductGrid/>
        </div>

      </div>

    </section>
  );
}