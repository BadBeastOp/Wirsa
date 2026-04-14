/**
 * AddToCartBtn — reusable, Redux-connected ADD / [- qty +] control.
 *
 * Props:
 *   product: { id, name, price, image, weight }
 *   size:    "sm" | "md" | "lg"   (default "md")
 *   stopProp: bool  — call e.stopPropagation() (use inside clickable cards)
 */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseQty, decreaseQty } from "../redux/cartSlice";

export default function AddToCartBtn({ product, size = "md", stopProp = false }) {
  const dispatch = useDispatch();
  const item     = useSelector(state =>
    state.cart.items.find(i => i.id === product.id)
  );
  const qty = item?.qty || 0;

  const sizes = {
    sm: { h: "28px", w: "28px", fs: "11px", btnFs: "10px", px: "12px" },
    md: { h: "34px", w: "34px", fs: "14px", btnFs: "12px", px: "16px" },
    lg: { h: "48px", w: "48px", fs: "20px", btnFs: "15px", px: "22px" },
  };
  const s = sizes[size] || sizes.md;

  const stop = (e) => { if (stopProp) e.stopPropagation(); };

  const handleAdd = (e) => {
    stop(e);
    dispatch(addToCart({
      id:     product.id,
      name:   product.name,
      price:  product.price,
      image:  product.image || product.img || "",
      weight: product.weight || product.size || "",
    }));
  };
  const handleInc = (e) => { stop(e); dispatch(increaseQty(product.id)); };
  const handleDec = (e) => { stop(e); dispatch(decreaseQty(product.id)); };

  if (qty === 0) {
    return (
      <button
        onClick={handleAdd}
        style={{
          border: "1.5px solid #E11C2A", borderRadius: "10px",
          background: "#fff", color: "#E11C2A",
          padding: `0 ${s.px}`, height: s.h,
          fontSize: s.btnFs, fontWeight: 700,
          fontFamily: "'Montserrat',sans-serif",
          cursor: "pointer", transition: "all 0.2s ease",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "#E11C2A"; e.currentTarget.style.color = "#fff"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "#fff";    e.currentTarget.style.color = "#E11C2A"; }}
      >
        ADD
      </button>
    );
  }

  return (
    <div
      onClick={stop}
      style={{
        display: "flex", alignItems: "center",
        border: "1.5px solid #E11C2A", borderRadius: "10px",
        overflow: "hidden", background: "#E11C2A",
        height: s.h,
      }}
    >
      <button onClick={handleDec} style={{ width: s.w, height: s.h, background: "transparent", border: "none", color: "#fff", fontSize: s.fs, fontWeight: 700, cursor: "pointer", fontFamily: "'Montserrat',sans-serif", display:"flex", alignItems:"center", justifyContent:"center" }}>−</button>
      <span style={{ minWidth: "28px", textAlign: "center", fontSize: s.btnFs, fontWeight: 700, color: "#fff", fontFamily: "'Montserrat',sans-serif" }}>{qty}</span>
      <button onClick={handleInc} style={{ width: s.w, height: s.h, background: "transparent", border: "none", color: "#fff", fontSize: s.fs, fontWeight: 700, cursor: "pointer", fontFamily: "'Montserrat',sans-serif", display:"flex", alignItems:"center", justifyContent:"center" }}>+</button>
    </div>
  );
}