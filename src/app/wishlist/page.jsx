"use client";

import WishlistButton from '@/components/product/WishlistButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {  useSelector } from 'react-redux'

function page() {
    const wishlistItems = useSelector(
        (item) => item.wishlist.items
    );
    return (
        <section className="mx-auto max-w-6xl p-6">
            <h1 className="mb-8 text-4xl font-bold">
                Wishlist
            </h1>

            {wishlistItems.length === 0 ? (
                <div className="text-center py-12">
                    <h2 className="text-2xl font-semibold text-gray-600 mb-4">
                        Your Wishlist is Empty 💔
                    </h2>
                    <p className="text-gray-500 mb-6">
                        Add some items to your wishlist to keep track of products you love!
                    </p>
                    <Link href="/products">
                        <button className="rounded-lg bg-pink-600 px-6 py-3 text-white font-semibold hover:bg-pink-700 transition">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            ) : (
                <>
                    <p className="text-gray-600 mb-6">
                        {wishlistItems.length} item(s) in your wishlist
                    </p>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {wishlistItems.map((item) => (

                            <Link
                                key={item.id}
                                href={`/product/${item.id}`}
                            >

                                <div className="w-70 overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-xl">
                                    <div className='relative'>

                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={400}
                                            height={300}
                                            className="h-64 w-full object-cover"
                                        />

                                        <WishlistButton product={item} />
                                    </div>

                                    <div className="p-5">

                                        <h2 className="text-xl font-bold">
                                            {item.brand}
                                        </h2>

                                        <p className="mt-1 text-gray-500">
                                            {item.title}
                                        </p>

                                        <div className="mt-3 flex items-center gap-3">

                                            <span className="text-2xl font-bold text-pink-600">
                                                ₹{item.price}
                                            </span>

                                            <span className="line-through text-gray-400">
                                                ₹{item.originalPrice}
                                            </span>

                                            <span className="font-semibold text-green-600">
                                                {item.discount}
                                            </span>

                                        </div>

                                        <p className="mt-2">
                                            ⭐ {item.rating}
                                        </p>

                                    </div>

                                </div>

                            </Link>

                        ))}

                    </div>
                </>
            )}
        </section>
    )
}

export default page