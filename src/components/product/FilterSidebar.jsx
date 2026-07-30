"use client";

import {
  clearFilters,
  setBrand,
  setCategory,
  setMaxPrice,
  setRating,
} from "@/redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

const categories = [
  "Men",
  "Women",
  "Kids",
  "Footwear",
];

const brands = [
  "Roadster",
  "Puma",
  "Tokyo Talkies",
  "Lavie",
];

export default function FilterSidebar() {
  const dispatch = useDispatch();

  const {
    category,
    brands: selectedBrands,
    rating,
    maxPrice,
  } = useSelector((state) => state.products);

  const toggleCategory = (value) => {
    if (category.includes(value)) {
      dispatch(
        setCategory(
          category.filter((item) => item !== value)
        )
      );
    } else {
      dispatch(
        setCategory([...category, value])
      );
    }
  };

  const toggleBrand = (value) => {
    if (selectedBrands.includes(value)) {
      dispatch(
        setBrand(
          selectedBrands.filter(
            (item) => item !== value
          )
        )
      );
    } else {
      dispatch(
        setBrand([...selectedBrands, value])
      );
    }
  };

  return (
    <aside className="sticky top-24 h-fit rounded-2xl border bg-white p-6 shadow-md">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-bold">
          Filters
        </h2>

        <button
          onClick={() => dispatch(clearFilters())}
          className="text-sm font-semibold text-pink-600"
        >
          Clear
        </button>

      </div>

      {/* Category */}

      <div className="border-b pb-5">

        <h3 className="mb-3 font-semibold">
          Category
        </h3>

        <div className="space-y-2">

          {categories.map((item) => (
            <label
              key={item}
              className="flex items-center gap-2"
            >
              <input
                type="checkbox"
                checked={category.includes(item)}
                onChange={() =>
                  toggleCategory(item)
                }
              />

              {item}

            </label>
          ))}

        </div>

      </div>

      {/* Brand */}

      <div className="border-b py-5">

        <h3 className="mb-3 font-semibold">
          Brand
        </h3>

        <div className="space-y-2">

          {brands.map((item) => (
            <label
              key={item}
              className="flex items-center gap-2"
            >
              <input
                type="checkbox"
                checked={selectedBrands.includes(item)}
                onChange={() =>
                  toggleBrand(item)
                }
              />

              {item}

            </label>
          ))}

        </div>

      </div>

      {/* Price */}

      <div className="border-b py-5">

        <h3 className="mb-3 font-semibold">
          Max Price
        </h3>

        <input
          type="range"
          min="500"
          max="5000"
          step="100"
          value={maxPrice}
          onChange={(e) =>
            dispatch(
              setMaxPrice(Number(e.target.value))
            )
          }
          className="w-full"
        />

        <p className="mt-2 font-semibold">
          ₹{maxPrice}
        </p>

      </div>

      {/* Rating */}

      <div className="py-5">

        <h3 className="mb-3 font-semibold">
          Rating
        </h3>

        <div className="space-y-2">

          {[4, 3, 2, 1].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2"
            >
              <input
                type="radio"
                name="rating"
                checked={rating === item}
                onChange={() =>
                  dispatch(setRating(item))
                }
              />

              {item} ★ & Above

            </label>
          ))}

        </div>

      </div>

    </aside>
  );
}