"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, updateProduct } from "@/redux/slices/productSlice";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
    const dispatch = useDispatch();
    const router = useRouter();

    const products = useSelector(
        (state) => state.products.items
    );
    const [formData, setFormData] = useState({
        title: "",
        brand: "",
        price: "",
        originalPrice: "",
        discount: "",
        rating: "",
        image: "",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.title ||
            !formData.brand ||
            !formData.price ||
            !formData.originalPrice ||
            !formData.discount ||
            !formData.rating ||
            !formData.image
        ) {
            alert("⚠️ Please fill all fields.");
            return;
        }

        if (Number(formData.price) <= 0) {
            alert("Price must be greater than 0");
            return;
        }

        if (Number(formData.rating) < 0 || Number(formData.rating) > 5) {
            alert("Rating must be between 0 and 5");
            return;
        }

        if (
            Number(formData.originalPrice) <
            Number(formData.price)
        ) {
            alert("Original Price should be greater than Price");
            return;
        }

        const newProduct = {
            id: products.length + 1,
            title: formData.title,
            brand: formData.brand,
            price: Number(formData.price),
            originalPrice: Number(formData.originalPrice),
            discount: formData.discount,
            rating: Number(formData.rating),
            image: formData.image,

            isUserProduct: true,
        };

        if (isEditing) {
            dispatch(
                updateProduct({
                    ...newProduct,
                    id: editId,
                    isUserProduct: true,
                })
            );

            alert("✅ Product Updated Successfully!");

            setIsEditing(false);
            setEditId(null);

        } else {
            dispatch(
                addProduct({
                    ...newProduct,
                    isUserProduct: true,
                })
            );

            alert("✅ Product Added Successfully!");
        }

        setFormData({
            title: "",
            brand: "",
            price: "",
            originalPrice: "",
            discount: "",
            rating: "",
            image: "",
        });
    };

    return (
        <section className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-4xl">
                Add Product
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

                <input
                    type="text"
                    name="title"
                    placeholder="Product Title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm sm:text-base focus:border-black focus:outline-none"
                />

                <input
                    type="text"
                    name="brand"
                    placeholder="Brand"
                    value={formData.brand}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm sm:text-base focus:border-black focus:outline-none"
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm sm:text-base focus:border-black focus:outline-none"
                />

                <input
                    type="number"
                    name="originalPrice"
                    placeholder="Original Price"
                    value={formData.originalPrice}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm sm:text-base focus:border-black focus:outline-none"
                />

                <input
                    type="text"
                    name="discount"
                    placeholder="Discount"
                    value={formData.discount}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm sm:text-base focus:border-black focus:outline-none"
                />

                <input
                    type="number"
                    step="0.1"
                    name="rating"
                    placeholder="Rating"
                    value={formData.rating}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm sm:text-base focus:border-black focus:outline-none"
                />

                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm sm:text-base focus:border-black focus:outline-none"
                />

                <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                        type="submit"
                        className="rounded bg-black px-8 py-3 text-white"
                    >
                        {isEditing ? "Update Product" : "Add Product"}
                    </button>

                    {isEditing && (
                        <button
                            type="button"
                            onClick={() => {
                                setIsEditing(false);
                                setEditId(null);

                                setFormData({
                                    title: "",
                                    brand: "",
                                    price: "",
                                    originalPrice: "",
                                    discount: "",
                                    rating: "",
                                    image: "",
                                });
                            }}
                            className="ml-3 rounded bg-gray-500 px-8 py-3 text-white"
                        >
                            Cancel
                        </button>
                    )}
                </div>

            </form>

            <h2 className="mt-10 mb-5 text-3xl font-bold">
                Your Added Products
            </h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {products
                    .filter((product) => product.isUserProduct)
                    .map((product) => (
                        <div
                            key={product.id}
                            className="rounded-lg bg-white p-4 shadow-lg"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-48 w-full rounded-lg object-cover sm:h-56"
                            />

                            <h3 className="mt-3 text-xl font-bold">
                                {product.brand}
                            </h3>

                            <p>{product.title}</p>

                            <p className="mt-2 font-bold">
                                ₹{product.price}
                            </p>

                            <div className="mt-4 flex gap-3">

                                <button
                                    onClick={() => {
                                        setFormData({
                                            title: product.title,
                                            brand: product.brand,
                                            price: product.price,
                                            originalPrice: product.originalPrice,
                                            discount: product.discount,
                                            rating: product.rating,
                                            image: product.image,
                                        });

                                        setEditId(product.id);
                                        setIsEditing(true);

                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth",
                                        });
                                    }}
                                    className="rounded bg-black px-4 py-2 text-white"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => {
                                        const confirmDelete = window.confirm(
                                            "Are you sure you want to delete this product?"
                                        );

                                        if (confirmDelete) {
                                            dispatch(deleteProduct(product.id));
                                            alert("🗑️ Product Deleted Successfully!");
                                        }
                                    }}
                                    className="rounded bg-red-700 px-4 py-2 text-white hover:bg-red-600"
                                >
                                    Delete
                                </button>

                            </div>

                        </div>
                    ))}
            </div>
        </section>
    );
}