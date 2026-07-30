"use client";

import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "@/redux/slices/searchSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);
  const search = useSelector((state) => state.search.value);

  const clearSearch = () => {
    dispatch(setSearch(""));
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Logo */}
        <Link href="/">
          <h1
            onClick={clearSearch}
            className="cursor-pointer text-center text-3xl font-bold text-pink-700 lg:text-left"
          >
            ShopV
          </h1>
        </Link>

        {/* Menu */}
        <ul className="flex flex-wrap justify-center gap-4 text-sm font-semibold uppercase lg:gap-8">
          <li onClick={clearSearch}>
            <Link href="/">Men</Link>
          </li>

          <li onClick={clearSearch}>
            <Link href="/">Women</Link>
          </li>

          <li onClick={clearSearch}>
            <Link href="/">Kids</Link>
          </li>

          <li onClick={clearSearch}>
            <Link href="/">Home</Link>
          </li>

          <li onClick={clearSearch}>
            <Link href="/">Beauty</Link>
          </li>
        </ul>

        {/* Search */}
        <div className="flex w-full items-center gap-2 rounded-md bg-gray-100 px-3 py-2 lg:w-96">
          <Search size={18} />

          <input
            type="text"
            value={search}
            placeholder="Search..."
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>

        {/* Icons */}
        <div className="flex justify-center gap-6 font-semibold">
          <Link href="/add-product">
            <div className="flex cursor-pointer flex-col items-center text-xs">
              <ShoppingBag size={22} />
              <span className="hidden sm:block">Add Product</span>
            </div>
          </Link>

          <Link href="/wishlist">
            <div className="flex cursor-pointer flex-col items-center text-xs">
              <Heart size={22} />
              <span className="hidden sm:block">Wishlist</span>
            </div>
          </Link>

          <Link href="/cart">
            <div className="flex cursor-pointer flex-col items-center text-xs">
              <ShoppingCart size={22} />
              <span className="hidden sm:block">
                Bag ({items.length})
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}