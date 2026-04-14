import React, { useState, useEffect } from "react";
import AddToCartBtn from "../common/AddToCartBtn";
import {
  FiStar, FiTruck, FiTag, FiShoppingCart, FiHeart,
  FiShare2, FiChevronRight, FiShield, FiPackage,
  FiZap, FiCheck, FiChevronDown, FiChevronUp
} from "react-icons/fi";

/* ─── PRODUCT DATABASE ─────────────────────────────────────────── */
const PRODUCTS = {
  "amul-gold-full-cream-milk": {
    id: "amul-gold-full-cream-milk",
    name: "Amul Gold Full Cream Milk",
    brand: "Amul", category: "Dairy", subcategory: "Milk",
    rating: 4.6, reviews: 2834, deliveryTime: "15 MINS", inStock: true,
    badges: ["Best Seller"],
    images: [
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=600&q=85&fit=crop",
    ],
    sizes: [
      { label: "200 ml", price: 25, mrp: 28 },
      { label: "500 ml", price: 35, mrp: 40 },
      { label: "1 L",    price: 65, mrp: 72 },
    ],
    description: "Amul Gold Full Cream Milk is homogenised, toned & pasteurised milk. Rich and creamy, an excellent source of Vitamins A & D. Perfect for your daily nutritional needs.",
    features: ["100% Pure & Natural", "Rich in Calcium & Vitamins", "Pasteurised & Homogenised", "No Added Preservatives"],
    nutrition: [
      { label: "Energy",        value: "86.4 kcal" },
      { label: "Protein",       value: "3.1 g"     },
      { label: "Carbohydrates", value: "5.0 g"     },
      { label: "Total Fat",     value: "6.0 g"     },
      { label: "Calcium",       value: "0.108 g"   },
    ],
    manufacturer: "Gujarat Cooperative Milk Marketing Federation Ltd, Anand – 388001",
    seller: "WIRSA Fresh Pvt. Ltd", fssai: "10020064002537",
  },
  "cadbury-dairy-milk": {
    id: "cadbury-dairy-milk",
    name: "Cadbury Dairy Milk Silk",
    brand: "Cadbury", category: "Snacks", subcategory: "Chocolates",
    rating: 4.8, reviews: 5421, deliveryTime: "10 MINS", inStock: true,
    badges: ["Best Seller", "Trending"],
    images: [
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&q=85&fit=crop",
    ],
    sizes: [
      { label: "50 g",  price: 60,  mrp: 75  },
      { label: "150 g", price: 160, mrp: 200 },
      { label: "250 g", price: 260, mrp: 325 },
    ],
    description: "Cadbury Dairy Milk Silk is a luxuriously smooth milk chocolate. With its silky texture and rich flavour, it's the perfect indulgence for any occasion.",
    features: ["Premium cocoa blend", "Silky smooth texture", "No artificial colours", "Perfect gifting option"],
    nutrition: [
      { label: "Energy",        value: "547 kcal" },
      { label: "Protein",       value: "7.4 g"    },
      { label: "Carbohydrates", value: "57.4 g"   },
      { label: "Total Fat",     value: "31.4 g"   },
      { label: "Sugar",         value: "54.8 g"   },
    ],
    manufacturer: "Mondelez India Foods Private Limited, Mumbai",
    seller: "WIRSA Essentials Pvt. Ltd", fssai: "10013051002809",
  },
};

// Fallback: find by fuzzy slug match
const findProduct = (id) => {
  if (!id) return Object.values(PRODUCTS)[0];
  if (PRODUCTS[id]) return PRODUCTS[id];
  const found = Object.values(PRODUCTS).find(p =>
    p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === id
  );
  return found || Object.values(PRODUCTS)[0];
};

/* ─── SUB-COMPONENTS ───────────────────────────────────────────── */
const Stars = ({ rating }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
    {[1,2,3,4,5].map(s => (
      <svg key={s} width="14" height="14" viewBox="0 0 14 14"
        fill={s <= Math.floor(rating) ? "#FBBF24" : "#E5E7EB"}>
        <path d="M7 1l1.545 3.13 3.455.502-2.5 2.437.59 3.441L7 8.885l-3.09 1.625.59-3.441L2 4.632l3.455-.502L7 1z"/>
      </svg>
    ))}
  </div>
);

const TrustBadge = ({ icon: Icon, title, desc, color }) => (
  <div style={{
    display: "flex", alignItems: "flex-start", gap: "12px",
    flex: 1, padding: "14px", borderRadius: "14px",
    background: "#FAFAFA", border: "1px solid #F0F0F0",
    minWidth: "140px",
  }}>
    <div style={{
      width: "40px", height: "40px", borderRadius: "12px",
      display: "flex", alignItems: "center", justifyContent: "center",
      background: color + "18", flexShrink: 0,
    }}>
      <Icon style={{ color, fontSize: "18px" }} />
    </div>
    <div>
      <p style={{ fontSize: "13px", fontWeight: 700, color: "#111827", fontFamily: "'Montserrat',sans-serif", margin: "0 0 3px" }}>{title}</p>
      <p style={{ fontSize: "11.5px", color: "#9CA3AF", fontFamily: "'Poppins',sans-serif", margin: 0, lineHeight: 1.4 }}>{desc}</p>
    </div>
  </div>
);

/* ─── MAIN COMPONENT ───────────────────────────────────────────── */
export default function ProductPage({ productId }) {
  const product = findProduct(productId);

  const [activeImg,     setActiveImg]     = useState(0);
  const [selectedSize,  setSelectedSize]  = useState(product.sizes[1]?.label || product.sizes[0].label);
  const [qty,           setQty]           = useState(0);
  const [wishlisted,    setWishlisted]    = useState(false);
  const [showNutrition, setShowNutrition] = useState(false);
  const [showDesc,      setShowDesc]      = useState(true);

  // Reset state when product changes
  useEffect(() => {
    setActiveImg(0);
    setSelectedSize(product.sizes[1]?.label || product.sizes[0].label);
    setQty(0);
  }, [productId]);

  const sizeObj  = product.sizes.find(s => s.label === selectedSize) || product.sizes[0];
  const discount = sizeObj.mrp > sizeObj.price
    ? Math.round(((sizeObj.mrp - sizeObj.price) / sizeObj.mrp) * 100)
    : 0;

  const inc = () => setQty(q => q + 1);
  const dec = () => setQty(q => (q <= 1 ? 0 : q - 1));

  /* shared button styles */
  const addBtn = {
    display: "flex", alignItems: "center", justifyContent: "center",
    gap: "8px", height: "52px", borderRadius: "16px",
    background: "linear-gradient(135deg,#E11C2A,#C91825)",
    color: "#fff", border: "none", cursor: "pointer",
    fontSize: "15px", fontWeight: 700,
    fontFamily: "'Montserrat',sans-serif",
    boxShadow: "0 6px 20px rgba(225,28,42,0.28)",
    transition: "transform 0.2s ease",
    flex: 1,
  };

  const qtyControl = (
    <div style={{
      display: "flex", alignItems: "center", flex: 1, height: "52px",
      borderRadius: "16px", overflow: "hidden",
      border: "2px solid #E11C2A", background: "#E11C2A",
    }}>
      <button onClick={dec} style={{ width: "52px", height: "100%", background: "transparent", border: "none", color: "#fff", fontSize: "24px", fontWeight: 700, cursor: "pointer", fontFamily: "'Montserrat',sans-serif" }}>−</button>
      <span style={{ flex: 1, textAlign: "center", fontSize: "16px", fontWeight: 700, color: "#fff", fontFamily: "'Montserrat',sans-serif" }}>{qty}</span>
      <button onClick={inc} style={{ width: "52px", height: "100%", background: "transparent", border: "none", color: "#fff", fontSize: "24px", fontWeight: 700, cursor: "pointer", fontFamily: "'Montserrat',sans-serif" }}>+</button>
    </div>
  );

  return (
    <div style={{ background: "#F9FAFB", minHeight: "100vh", paddingBottom: "80px" }}>

      {/* ── Breadcrumb ── */}
      <div style={{ background: "#fff", borderBottom: "1px solid #F0F0F0", padding: "12px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#9CA3AF", fontFamily: "'Poppins',sans-serif", flexWrap: "wrap" }}>
          {["Home", product.category, product.subcategory, product.name].map((c, i, arr) => (
            <React.Fragment key={i}>
              <a href={i === 0 ? "/" : "#"} style={{ color: i === arr.length - 1 ? "#374151" : "#9CA3AF", textDecoration: "none", fontWeight: i === arr.length - 1 ? 600 : 400 }}>{c}</a>
              {i < arr.length - 1 && <FiChevronRight style={{ fontSize: "11px" }} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── Main 2-col layout ── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px" }}>
        <div style={{ display: "flex", gap: "48px", alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* ════ LEFT: Images ════ */}
          <div style={{ flex: "0 0 420px", maxWidth: "420px", minWidth: "280px" }}>

            {/* Main image */}
            <div style={{
              borderRadius: "20px", overflow: "hidden",
              background: "linear-gradient(145deg,#FFF8F0,#FFF3E8)",
              border: "1px solid #F0F0F0",
              aspectRatio: "1/1", position: "relative",
              marginBottom: "16px",
            }}>
              <img
                src={product.images[activeImg]}
                alt={product.name}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "opacity 0.3s ease" }}
              />
              {/* Delivery badge */}
              <div style={{
                position: "absolute", top: "12px", left: "12px",
                background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)",
                color: "#fff", borderRadius: "20px",
                padding: "5px 12px", fontSize: "11px",
                fontFamily: "'Montserrat',sans-serif", fontWeight: 700,
                display: "flex", alignItems: "center", gap: "5px",
              }}>
                <FiZap style={{ fontSize: "10px" }} /> {product.deliveryTime}
              </div>
              {/* Counter */}
              <div style={{
                position: "absolute", bottom: "12px", right: "12px",
                background: "rgba(0,0,0,0.4)", backdropFilter: "blur(6px)",
                color: "#fff", borderRadius: "12px", padding: "3px 10px",
                fontSize: "11px", fontFamily: "'Montserrat',sans-serif", fontWeight: 600,
              }}>
                {activeImg + 1}/{product.images.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div style={{ display: "flex", gap: "10px" }}>
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  style={{
                    width: "72px", height: "72px", borderRadius: "12px",
                    overflow: "hidden", padding: 0, cursor: "pointer",
                    border: activeImg === i ? "2.5px solid #E11C2A" : "2px solid #E5E7EB",
                    transform: activeImg === i ? "scale(1.06)" : "scale(1)",
                    transition: "all 0.2s ease", background: "#FFF8F0", flexShrink: 0,
                  }}
                >
                  <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </button>
              ))}
            </div>
          </div>

          {/* ════ RIGHT: Info ════ */}
          <div style={{ flex: 1, minWidth: "280px" }}>

            {/* Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "14px" }}>
              {product.badges.map(b => (
                <span key={b} style={{
                  padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: 700,
                  fontFamily: "'Montserrat',sans-serif",
                  background: b === "Best Seller" ? "#FEF3C7" : "#EDE9FE",
                  color: b === "Best Seller" ? "#92400E" : "#5B21B6",
                }}>{b}</span>
              ))}
              <span style={{
                display: "flex", alignItems: "center", gap: "4px",
                padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: 700,
                fontFamily: "'Montserrat',sans-serif", background: "#DCFCE7", color: "#15803D",
              }}>
                <FiZap style={{ fontSize: "10px" }} /> {product.deliveryTime} Delivery
              </span>
            </div>

            {/* Brand */}
            <p style={{ fontSize: "12px", fontWeight: 700, color: "#9CA3AF", fontFamily: "'Montserrat',sans-serif", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 4px" }}>
              {product.brand}
            </p>

            {/* Name */}
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(20px,2.8vw,28px)", fontWeight: 700, color: "#111827", lineHeight: 1.25, margin: "0 0 12px" }}>
              {product.name}
            </h1>

            {/* Rating */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <Stars rating={product.rating} />
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#111827", fontFamily: "'Montserrat',sans-serif" }}>{product.rating}</span>
              <span style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "'Poppins',sans-serif" }}>({product.reviews.toLocaleString()} reviews)</span>
            </div>

            {/* Size selector */}
            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#6B7280", fontFamily: "'Montserrat',sans-serif", textTransform: "uppercase", letterSpacing: "0.8px", margin: "0 0 10px" }}>
                Select Size
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {product.sizes.map(s => (
                  <button
                    key={s.label}
                    onClick={() => { setSelectedSize(s.label); setQty(0); }}
                    style={{
                      padding: "10px 18px", borderRadius: "12px", cursor: "pointer",
                      border: selectedSize === s.label ? "2px solid #E11C2A" : "1.5px solid #E5E7EB",
                      background: selectedSize === s.label ? "#FEF2F2" : "#fff",
                      color: selectedSize === s.label ? "#E11C2A" : "#374151",
                      fontSize: "13px", fontWeight: 600, fontFamily: "'Montserrat',sans-serif",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {s.label}
                    <span style={{ display: "block", fontSize: "11px", fontWeight: 500, color: selectedSize === s.label ? "#E11C2A" : "#9CA3AF", marginTop: "2px" }}>
                      ₹{s.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "4px" }}>
              <span style={{ fontSize: "32px", fontWeight: 800, color: "#111827", fontFamily: "'Montserrat',sans-serif" }}>₹{sizeObj.price}</span>
              {sizeObj.mrp > sizeObj.price && (
                <span style={{ fontSize: "16px", color: "#9CA3AF", textDecoration: "line-through", fontFamily: "'Poppins',sans-serif" }}>₹{sizeObj.mrp}</span>
              )}
              {discount > 0 && (
                <span style={{ padding: "4px 10px", borderRadius: "8px", background: "#E11C2A", color: "#fff", fontSize: "13px", fontWeight: 700, fontFamily: "'Montserrat',sans-serif" }}>
                  {discount}% OFF
                </span>
              )}
            </div>
            <p style={{ fontSize: "11.5px", color: "#9CA3AF", fontFamily: "'Poppins',sans-serif", marginBottom: "24px" }}>
              Inclusive of all taxes
            </p>

            {/* CTA */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "24px", alignItems: "center" }}>
              {qty === 0
                ? <button style={addBtn} onClick={() => setQty(1)} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}>
                    <FiShoppingCart style={{ fontSize: "18px" }} /> Add to Cart
                  </button>
                : qtyControl
              }

              <button onClick={() => setWishlisted(w => !w)} style={{
                width: "52px", height: "52px", borderRadius: "16px", border: wishlisted ? "2px solid #E11C2A" : "1.5px solid #E5E7EB",
                background: wishlisted ? "#FEF2F2" : "#fff", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.2s ease",
              }}>
                <FiHeart style={{ fontSize: "20px", color: wishlisted ? "#E11C2A" : "#9CA3AF", fill: wishlisted ? "#E11C2A" : "none" }} />
              </button>

              <button style={{
                width: "52px", height: "52px", borderRadius: "16px", border: "1.5px solid #E5E7EB",
                background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <FiShare2 style={{ fontSize: "18px", color: "#9CA3AF" }} />
              </button>
            </div>

            {/* Trust badges */}
            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'Montserrat',sans-serif", marginBottom: "10px" }}>
                Why shop with WIRSA
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <TrustBadge icon={FiZap}     title="Fast Delivery"        desc="In 10–30 mins"          color="#F59E0B" />
                <TrustBadge icon={FiTag}     title="Best Prices"          desc="Lowest prices daily"    color="#E11C2A" />
                <TrustBadge icon={FiPackage} title="Wide Assortment"      desc="5000+ products"        color="#8B5CF6" />
              </div>
            </div>

            {/* Delivery strip */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px", borderRadius: "16px", background: "#F0FDF4", border: "1px solid #BBF7D0", marginBottom: "20px" }}>
              <FiTruck style={{ fontSize: "20px", color: "#16A34A", flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#15803D", fontFamily: "'Montserrat',sans-serif", margin: 0 }}>⚡ Delivery in {product.deliveryTime}</p>
                <p style={{ fontSize: "11px", color: "#16A34A", fontFamily: "'Poppins',sans-serif", margin: 0 }}>Order now for fastest delivery</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <FiShield style={{ fontSize: "14px", color: "#16A34A" }} />
                <span style={{ fontSize: "11px", fontWeight: 600, color: "#16A34A", fontFamily: "'Montserrat',sans-serif" }}>Freshness Guaranteed</span>
              </div>
            </div>

            {/* Seller info */}
            <div style={{ display: "flex", gap: "20px", paddingTop: "16px", borderTop: "1px solid #F0F0F0" }}>
              <div>
                <p style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "'Poppins',sans-serif", margin: "0 0 2px" }}>Sold by</p>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#374151", fontFamily: "'Poppins',sans-serif", margin: 0 }}>{product.seller}</p>
              </div>
              <div style={{ width: "1px", background: "#F0F0F0" }} />
              <div>
                <p style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "'Poppins',sans-serif", margin: "0 0 2px" }}>FSSAI</p>
                <p style={{ fontSize: "11px", fontWeight: 500, color: "#374151", fontFamily: "'Poppins',sans-serif", margin: 0 }}>{product.fssai}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Accordion: About ── */}
        <div style={{ marginTop: "40px", background: "#fff", borderRadius: "20px", border: "1px solid #F0F0F0", overflow: "hidden" }}>
          <button
            onClick={() => setShowDesc(v => !v)}
            style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", background: "none", border: "none", cursor: "pointer" }}
          >
            <span style={{ fontSize: "15px", fontWeight: 700, color: "#111827", fontFamily: "'Montserrat',sans-serif" }}>About this product</span>
            {showDesc ? <FiChevronUp style={{ color: "#9CA3AF" }} /> : <FiChevronDown style={{ color: "#9CA3AF" }} />}
          </button>
          {showDesc && (
            <div style={{ padding: "0 24px 24px" }}>
              <p style={{ fontSize: "14px", color: "#6B7280", fontFamily: "'Poppins',sans-serif", lineHeight: 1.75, marginBottom: "16px" }}>{product.description}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {product.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#374151", fontFamily: "'Poppins',sans-serif" }}>
                    <FiCheck style={{ color: "#16A34A", flexShrink: 0, fontSize: "14px" }} /> {f}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Accordion: Nutrition ── */}
        <div style={{ marginTop: "12px", background: "#fff", borderRadius: "20px", border: "1px solid #F0F0F0", overflow: "hidden" }}>
          <button
            onClick={() => setShowNutrition(v => !v)}
            style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", background: "none", border: "none", cursor: "pointer" }}
          >
            <span style={{ fontSize: "15px", fontWeight: 700, color: "#111827", fontFamily: "'Montserrat',sans-serif" }}>Nutritional Information</span>
            {showNutrition ? <FiChevronUp style={{ color: "#9CA3AF" }} /> : <FiChevronDown style={{ color: "#9CA3AF" }} />}
          </button>
          {showNutrition && (
            <div style={{ padding: "0 24px 24px" }}>
              <p style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "'Poppins',sans-serif", marginBottom: "12px" }}>Per 100g / 100ml serving</p>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {product.nutrition.map((n, i) => (
                    <tr key={n.label} style={{ background: i % 2 === 0 ? "#FAFAFA" : "#fff" }}>
                      <td style={{ padding: "10px 12px", fontSize: "13px", color: "#6B7280", fontFamily: "'Poppins',sans-serif" }}>{n.label}</td>
                      <td style={{ padding: "10px 12px", fontSize: "13px", fontWeight: 600, color: "#111827", fontFamily: "'Montserrat',sans-serif", textAlign: "right" }}>{n.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ fontSize: "11px", color: "#9CA3AF", marginTop: "12px", fontFamily: "'Poppins',sans-serif" }}>Manufactured by: {product.manufacturer}</p>
            </div>
          )}
        </div>
      </div>

      {/* ── Sticky bottom bar (mobile) ── */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50,
        background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)",
        borderTop: "1px solid #F0F0F0", padding: "12px 20px",
        display: "none", alignItems: "center", gap: "12px",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
      }} className="mobile-sticky-bar">
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: "13px", fontWeight: 700, color: "#111827", fontFamily: "'Montserrat',sans-serif", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{product.name}</p>
          <p style={{ fontSize: "16px", fontWeight: 800, color: "#E11C2A", fontFamily: "'Montserrat',sans-serif", margin: 0 }}>₹{sizeObj.price}</p>
        </div>
        <AddToCartBtn
          product={{
            id:     product.id,
            name:   product.name,
            price:  sizeObj.price,
            image:  product.images[0],
            weight: selectedSize,
          }}
          size="md"
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-sticky-bar { display: flex !important; }
        }
      `}</style>
    </div>
  );
}