import { createSlice } from "@reduxjs/toolkit";

/* ── Load from localStorage ── */
const loadCart = () => {
  try {
    const saved = localStorage.getItem("wirsa_cart");
    return saved ? JSON.parse(saved) : [];
  } catch { return []; }
};

const initialState = {
  items:    loadCart(),   // [{ id, name, price, image, weight, qty }]
  delivery: 25,
  handling: 2,
  smallCart: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /* ── Add or increment ── */
    addToCart: (state, action) => {
      const { id, name, price, image, weight } = action.payload;
      const existing = state.items.find(i => i.id === id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ id, name, price, image: image || "", weight: weight || "", qty: 1 });
      }
      state.smallCart = state.items.reduce((s, i) => s + i.price * i.qty, 0) < 100 ? 20 : 0;
    },

    /* ── Increase qty ── */
    increaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.qty += 1;
      state.smallCart = state.items.reduce((s, i) => s + i.price * i.qty, 0) < 100 ? 20 : 0;
    },

    /* ── Decrease qty (remove if hits 0) ── */
    decreaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.qty -= 1;
        if (item.qty <= 0) {
          state.items = state.items.filter(i => i.id !== action.payload);
        }
      }
      state.smallCart = state.items.reduce((s, i) => s + i.price * i.qty, 0) < 100 ? 20 : 0;
    },

    /* ── Remove completely ── */
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
      state.smallCart = state.items.reduce((s, i) => s + i.price * i.qty, 0) < 100 ? 20 : 0;
    },

    /* ── Clear cart ── */
    clearCart: (state) => {
      state.items = [];
      state.smallCart = 0;
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;