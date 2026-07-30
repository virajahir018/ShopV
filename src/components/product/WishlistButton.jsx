"use client"

import { toggleWishlist } from '@/redux/slices/wishlistSlice';
import { Heart, } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function WishlistButton({ product }) {
    const dispatch = useDispatch();
    const wishlistItem = useSelector((state) => state.wishlist.items);

    const isWishlist = wishlistItem.some(
        (item) => item.id === product.id);
    return (

        <button
            onClick={(e) => {
                e.preventDefault();
                dispatch(toggleWishlist(product));
            }}
            className="absolute right-2 top-2 rounded-full bg-white p-1.5 shadow-md sm:right-3 sm:top-3 sm:p-2"
        >
            {isWishlist ? (
                <Heart
                    fill="red"
                    color="red"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                />
            ) : (
                <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
        </button>
    )
}

export default WishlistButton