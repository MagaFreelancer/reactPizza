import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
        state.items.push(action.payload)
    }
  },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
