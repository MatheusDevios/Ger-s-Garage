import { createSlice } from "@reduxjs/toolkit";

const cartRedux = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItemToCartHandler(state, action) {
      const newItem = action.payload;
      // console.log(newItem);
      const newTotalAmount = state.totalAmount + newItem.price * newItem.amount;
      //   console.log(newTotalAmount);
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          amount: newItem.amount || 1,
          price: newItem.price,
          img: newItem.img,
        });
        state.totalAmount = newTotalAmount;
      } else {
        existingItem.amount = existingItem.amount + newItem.amount;
        state.totalAmount = newTotalAmount;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("cartTotalAmount", state.totalAmount);
    },
    updateCartHandler(state, action) {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      //   console.log(existingItem.price);
      if (existingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalAmount = state.totalAmount - existingItem.price;
      } else {
        existingItem.amount--;
        state.totalAmount = state.totalAmount - existingItem.price;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("cartTotalAmount", state.totalAmount);
    },
    clearCartHandler(state, action) {
      const item = action.payload;
      localStorage.removeItem("cartItems");
      localStorage.removeItem("cartTotalAmount");
      return (state = item);
    },
  },
});

export const cartActions = cartRedux.actions;

export default cartRedux;
