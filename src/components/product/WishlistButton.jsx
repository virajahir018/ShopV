"use client"

import { toggleWishlist } from '@/redux/slices/wishlistSlice';
import { Heart, } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

function WishlistButton({ product }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const { items: wishlistItem, isLoggedIn } = useSelector((state) => ({
        items: state.wishlist.items,
        isLoggedIn: state.user.isLoggedIn,
    }));

    const isWishlist = wishlistItem.some(
        (item) => item.id === product.id);

    const handleWishlist = (e) => {
        e.preventDefault();

        if (!isLoggedIn) {
            router.push('/login');
            return;
        }

        dispatch(toggleWishlist(product));
    };

    return (

        <button
            onClick={handleWishlist}
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