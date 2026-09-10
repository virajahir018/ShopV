"use client"

import { addToCart } from '@/redux/slices/cartSlice';
import React from 'react'
import { useDispatch } from 'react-redux'

function AddToCartButton({ product, quantity = 1 }) {
    const dispatch = useDispatch();

    const handleAddCart = () => {
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