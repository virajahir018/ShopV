"use client"

import { addToCart } from '@/redux/slices/cartSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation';

function AddToCartButton({ product, quantity = 1 }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    const handleAddCart = () => {
        if (!isLoggedIn) {
            router.push('/login');
            return;
        }

        const productWithQty = { ...product, quantity };
        dispatch(addToCart(productWithQty));
        alert(`✅ ${quantity} item(s) added to cart!`);
    }
    return (
        <button
            onClick={handleAddCart}
            className="mt-10 w-full rounded-lg bg-black px-10 py-4 text-white hover:bg-pink-700 transition font-semibold text-lg"
        >
            Add To Cart
        </button>
    );
}

export default AddToCartButton