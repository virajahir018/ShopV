"use client";

import { useDispatch, useSelector } from "react-redux";
import { setSort } from "@/redux/slices/productSlice";

export default function SortDropdown() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.products.sort);

  return (
    <div className="flex items-center gap-3">
      <label className="font-semibold">
        Sort By
      </label>

      <select
        value={sort}
        onChange={(e) =>
          dispatch(setSort(e.target.value))
        }
        className="rounded-lg border px-4 py-2 outline-none focus:border-pink-500"
      >
        <option value="default">Default</option>
        <option value="low-high">
          Price : Low to High
        </option>
        <option value="high-low">
          Price : High to Low
        </option>
        <option value="rating">
          Highest Rated
        </option>
      </select>
    </div>
  );
}