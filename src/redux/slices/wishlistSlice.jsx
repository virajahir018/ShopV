import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
}

const wishlistSlice = createSlice({
    name: "wishlist",

    initialState,

    reducers: {
        toggleWishlist: (state, action) => {
            const existingProduct = state.items.find((item) =>
                item.id === action.payload.id);

            if (existingProduct) {
                state.items = state.items.filter(
                    (item) => item.id !== action.payload.id);
            } else {
                state.items.push(action.payload);
            }
        },
    },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;