import { createSlice } from "@reduxjs/toolkit";
import { userRequest } from "../Utils/requestMethods";
import AES from "crypto-js/aes";
import Cookies from "js-cookie";
import encUtf8 from "crypto-js/enc-utf8";
//ON A REAL PROJECT, THIS WOULD BE USED WITH .ENV, IN ORDER TO HAVE SECURITY
//AND NO ONE HAVE ACCES TO THE SECRET PHRASE OF THE CART
const secretCart = "cartwithnousersecretkey";
const cookieOptions = { expires: 7 };
// var secretCart = process.env.CART_SECRET;

const cartRedux = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    userId: null,
  },
  reducers: {
    addItemToCartHandler(state, action) {
      const newItem = action.payload;
      const user = newItem.user;
      // console.log(user);
      const newTotalAmount = state.totalAmount + newItem.price * newItem.amount;
      //   console.log(newTotalAmount);
      const existingItem = state.items.find((item) => item.id === newItem.id);
      //   state.items.amount = 0;
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
      //BEING IMPLEMENTED... IN PROGRESS
      if (user !== null) {
        userRequest.put(`/users/userUpdate/${user}`, {
          cart: state.items,
          cartTotalAmount: state.totalAmount,
        });
        Cookies.get("encryptedData") && Cookies.remove("encryptedData");
      } else {
        const encryptedCart = AES.encrypt(
          JSON.stringify({
            cart: state.items,
            cartTotalAmount: state.totalAmount,
          }),
          secretCart
        ).toString();
        Cookies.set("encryptedData", encryptedCart, cookieOptions);
      }
    },
    updateCartHandler(state, action) {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
      // console.log(action.payload.userId);
      if (action.payload.userId !== null) {
        userRequest.put(`/users/userUpdate/${action.payload.userId}`, {
          cart: state.items,
          cartTotalAmount: state.totalAmount,
        });
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload.id;
      const user = action.payload.user;
      const existingItem = state.items.find((item) => item.id === id);
      //   console.log(existingItem.price);
      if (existingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalAmount = state.totalAmount - existingItem.price;
      } else {
        existingItem.amount--;
        state.totalAmount = state.totalAmount - existingItem.price;
      }
      if (user !== null) {
        userRequest.put(`/users/userUpdate/${user}`, {
          cart: state.items,
          cartTotalAmount: state.totalAmount,
        });
        Cookies.get("encryptedData") && Cookies.remove("encryptedData");
      } else {
        const encryptedCart = AES.encrypt(
          JSON.stringify({
            cart: state.items,
            cartTotalAmount: state.totalAmount,
          }),
          secretCart
        ).toString();
        Cookies.set("encryptedData", encryptedCart, cookieOptions);
        const encryptedData = Cookies.get("encryptedData");
        const { cart } = JSON.parse(
          AES.decrypt(encryptedData, "cartwithnousersecretkey").toString(
            encUtf8
          )
        );
        cart.length === 0 && Cookies.remove("encryptedData");
        console.log(cart.length);
      }
    },
    removeFromDB(state, action) {
      const user = action.payload;
      if (user !== null) {
        userRequest.put(`/users/userUpdate/${user}`, {
          cart: [],
          cartTotalAmount: 0,
        });
      }
      state.items = [];
      state.totalAmount = 0;
      Cookies.get("encryptedData") && Cookies.remove("encryptedData");
    },
    clearCartHandler(state, action) {
      const item = action.payload;
      Cookies.remove("encryptedData");
      return (state = item);
    },
  },
});

export const cartActions = cartRedux.actions;

export default cartRedux;
