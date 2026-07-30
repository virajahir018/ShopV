import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      title: "Men Printed T-Shirt",
      brand: "Roadster",
      category: "Men",
      price: 599,
      originalPrice: 999,
      discount: "40% OFF",
      rating: 4.3,
      image: "/images/product1.jpg",
      quantity: 1
    },
    {
      id: 2,
      title: "Women Casual Dress",
      brand: "Tokyo Talkies",
      category: "Women",
      price: 899,
      originalPrice: 1499,
      discount: "40% OFF",
      rating: 4.5,
      image: "/images/product2.jpg",
    },
    {
      id: 3,
      title: "Sports Shoes",
      brand: "Puma",
      category: "Men",
      price: 1999,
      originalPrice: 2999,
      discount: "33% OFF",
      rating: 4.6,
      image: "/images/product3.jpg",
    },
    {
      id: 4,
      title: "Women's Handbag",
      brand: "Lavie",
      category: "Women",
      price: 1299,
      originalPrice: 1999,
      discount: "35% OFF",
      rating: 4.4,
      image: "/images/product4.jpg",
    },
  ],
  sort: "default",
  category: [],
  brands: [],
  rating: 0,
  maxPrice: 5000,
};

const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },

    deleteProduct: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    updateProduct: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },

    setSort: (state, action) => {
      state.sort = action.payload;
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setBrand: (state, action) => {
      state.brands = action.payload;
    },

    setRating: (state, action) => {
      state.rating = action.payload;
    },

    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },

    clearFilters: (state) => {
      state.category = [];
      state.brands = [];
      state.rating = 0;
      state.maxPrice = 5000;
      state.sort = "default";
    },
  },
});

export const { addProduct,
  deleteProduct,
  updateProduct,
  setSort,
  setCategory,
  setBrand,
  setRating,
  setMaxPrice,
  clearFilters, } = productSlice.actions;
export default productSlice.reducer;