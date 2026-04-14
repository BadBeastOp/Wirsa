import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

/* ── Persist cart to localStorage on every change ── */
store.subscribe(() => {
  try {
    const { items } = store.getState().cart;
    localStorage.setItem("wirsa_cart", JSON.stringify(items));
  } catch {}
});

export default store;