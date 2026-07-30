import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,

  reducers: {
    placeOrder: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { placeOrder } = orderSlice.actions;
export default orderSlice.reducer;