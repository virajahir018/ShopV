"use client"

import { addToCart } from '@/redux/slices/cartSlice';
import React from 'react'
import { useDispatch } from 'react-redux'

function AddToCartButton({ product }) {
    const dispatch = useDispatch();

    const handleAddCart = () => {
        dispatch(addToCart(product));
        alert("Product Added Successfully");
    }
    return (
        <button
            onClick={handleAddCart}
            className="mt-10 rounded-lg bg-black px-10 py-4 text-white hover:bg-pink-700"
        >
            Add To Cart
        </button>
    );
}

export default AddToCartButton