import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setAddItemToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { setAddItemToCart } = CartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;

export default CartSlice.reducer;
