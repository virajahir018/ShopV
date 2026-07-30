
import Link from "next/link";
import WishlistButton from "../product/WishlistButton";

export default function ProductCard({ product }) {


  return (
  <div className="overflow-hidden rounded-lg bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
  <Link href={`/product/${product.id}`}>
    <div className="relative">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full rounded-t-lg object-cover sm:h-72"
      />

      <WishlistButton product={product} />
    </div>

    <div className="p-2 sm:p-4">

      <h3 className="truncate text-sm font-bold sm:text-lg">
        {product.brand}
      </h3>

      <p className="mt-1 line-clamp-2 text-xs text-gray-600 sm:text-sm">
        {product.title}
      </p>

      <div className="mt-2 flex flex-wrap items-center gap-1 sm:gap-2">

        <span className="text-sm font-bold sm:text-base">
          ₹{product.price}
        </span>

        <span className="text-xs text-gray-400 line-through sm:text-sm">
          ₹{product.originalPrice}
        </span>

        <span className="text-xs font-medium text-green-600">
          {product.discount}
        </span>

      </div>

      <p className="mt-2 text-xs sm:text-sm">
        ⭐ {product.rating}
      </p>

    </div>
  </Link>
</div>
  );
}