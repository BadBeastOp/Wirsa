import React, { useState, useEffect, useRef } from "react";
import AddToCartBtn from "../components/common/AddToCartBtn";
import { FiShoppingCart, FiChevronRight, FiChevronDown, FiStar, FiSearch, FiX } from "react-icons/fi";

/* ─── PRODUCT DATA ─────────────────────────────────────────────── */
const products = [
  { id:1,  brand:"Cadbury",   name:"Dairy Milk Silk",          weight:"150g",  price:199, mrp:240,  img:"https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&q=80&fit=crop", badge:"Best Seller", filter:"Milk Chocolate",  rating:4.8, reviews:2341 },
  { id:2,  brand:"Amul",      name:"Dark Chocolate 70%",        weight:"150g",  price:149, mrp:180,  img:"https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=300&q=80&fit=crop", badge:"Trending",    filter:"Dark Chocolate",  rating:4.6, reviews:987  },
  { id:3,  brand:"Nestlé",    name:"KitKat 4 Finger",           weight:"41.5g", price:40,  mrp:50,   img:"https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=300&q=80&fit=crop", badge:"20% OFF",     filter:"Milk Chocolate",  rating:4.7, reviews:5421 },
  { id:4,  brand:"Mars",      name:"Bounty Coconut Bar",         weight:"57g",   price:85,  mrp:100,  img:"https://images.unsplash.com/photo-1548907040-4baa42d10919?w=300&q=80&fit=crop", badge:"Imported",    filter:"Imported",        rating:4.5, reviews:432  },
  { id:5,  brand:"Cadbury",   name:"Celebrations Gift Box",      weight:"186g",  price:349, mrp:450,  img:"https://images.unsplash.com/photo-1511381939415-e44f66e770f4?w=300&q=80&fit=crop", badge:"Gift Pack",   filter:"Gift Packs",      rating:4.9, reviews:1209 },
  { id:6,  brand:"Lindt",     name:"Excellence 70% Dark",        weight:"100g",  price:450, mrp:550,  img:"https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=300&q=80&fit=crop", badge:"Premium",     filter:"Dark Chocolate",  rating:4.8, reviews:765  },
  { id:7,  brand:"Nestlé",    name:"Munch Crispiest Bar",        weight:"26g",   price:20,  mrp:25,   img:"https://images.unsplash.com/photo-1559181567-c3190ca9be23?w=300&q=80&fit=crop", badge:"",            filter:"Milk Chocolate",  rating:4.4, reviews:3201 },
  { id:8,  brand:"Ferrero",   name:"Rocher 16pc Box",            weight:"200g",  price:699, mrp:850,  img:"https://images.unsplash.com/photo-1548907040-4baa42d10919?w=300&q=80&fit=crop", badge:"Gift Pack",   filter:"Gift Packs",      rating:4.9, reviews:2100 },
  { id:9,  brand:"Diabexy",   name:"Sugar-Free Almond Bar",      weight:"40g",   price:120, mrp:150,  img:"https://images.unsplash.com/photo-1499195333224-3ce974eecb47?w=300&q=80&fit=crop", badge:"Sugar-Free",  filter:"Sugar-Free",      rating:4.3, reviews:310  },
  { id:10, brand:"Cadbury",   name:"5 Star Fruit & Nut",         weight:"94g",   price:95,  mrp:115,  img:"https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&q=80&fit=crop", badge:"17% OFF",     filter:"Milk Chocolate",  rating:4.6, reviews:1876 },
  { id:11, brand:"Toblerone", name:"Honey & Almond",             weight:"100g",  price:380, mrp:450,  img:"https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=300&q=80&fit=crop", badge:"Imported",    filter:"Imported",        rating:4.7, reviews:654  },
  { id:12, brand:"Amul",      name:"Fruit & Nut Bar",            weight:"150g",  price:130, mrp:160,  img:"https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=300&q=80&fit=crop", badge:"",            filter:"Milk Chocolate",  rating:4.5, reviews:890  },
  { id:13, brand:"Hershey's", name:"Kisses Milk Chocolate",      weight:"100g",  price:299, mrp:350,  img:"https://images.unsplash.com/photo-1548907040-4baa42d10919?w=300&q=80&fit=crop", badge:"Imported",    filter:"Imported",        rating:4.6, reviews:543  },
  { id:14, brand:"Bournville", name:"Rich Cocoa 70%",            weight:"80g",   price:129, mrp:150,  img:"https://images.unsplash.com/photo-1499195333224-3ce974eecb47?w=300&q=80&fit=crop", badge:"Dark",        filter:"Dark Chocolate",  rating:4.5, reviews:721  },
  { id:15, brand:"Snickers",  name:"Peanut Caramel Bar",         weight:"50g",   price:60,  mrp:70,   img:"https://images.unsplash.com/photo-1559181567-c3190ca9be23?w=300&q=80&fit=crop", badge:"",            filter:"Milk Chocolate",  rating:4.6, reviews:2876 },
  { id:16, brand:"Nestlé",    name:"Milkybar Creamy White",      weight:"30g",   price:25,  mrp:30,   img:"https://images.unsplash.com/photo-1511381939415-e44f66e770f4?w=300&q=80&fit=crop", badge:"",            filter:"Milk Chocolate",  rating:4.3, reviews:1100 },
  { id:17, brand:"Sugarless", name:"Zero Sugar Dark 85%",        weight:"60g",   price:180, mrp:220,  img:"https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=300&q=80&fit=crop", badge:"Sugar-Free",  filter:"Sugar-Free",      rating:4.2, reviews:198  },
  { id:18, brand:"Cadbury",   name:"Roses Gift Tin",             weight:"240g",  price:599, mrp:750,  img:"https://images.unsplash.com/photo-1548907040-4baa42d10919?w=300&q=80&fit=crop", badge:"Gift Pack",   filter:"Gift Packs",      rating:4.8, reviews:980  },
  { id:19, brand:"Lindt",     name:"Lindor Assorted Truffles",   weight:"200g",  price:799, mrp:950,  img:"https://images.unsplash.com/photo-1499195333224-3ce974eecb47?w=300&q=80&fit=crop", badge:"Premium",     filter:"Imported",        rating:4.9, reviews:1450 },
  { id:20, brand:"Amul",      name:"Bindaaz Bitter Chocolate",   weight:"150g",  price:110, mrp:135,  img:"https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&q=80&fit=crop", badge:"",            filter:"Dark Chocolate",  rating:4.4, reviews:432  },
  { id:21, brand:"Nestlé",    name:"Éclairs Toffee Jar",         weight:"250g",  price:99,  mrp:130,  img:"https://images.unsplash.com/photo-1559181567-c3190ca9be23?w=300&q=80&fit=crop", badge:"24% OFF",     filter:"Milk Chocolate",  rating:4.5, reviews:3410 },
  { id:22, brand:"Mars",      name:"Twix Caramel Cookie",        weight:"50g",   price:75,  mrp:90,   img:"https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=300&q=80&fit=crop", badge:"Imported",    filter:"Imported",        rating:4.6, reviews:765  },
  { id:23, brand:"Cadbury",   name:"Perk Wafer Chocolate",       weight:"64g",   price:45,  mrp:55,   img:"https://images.unsplash.com/photo-1511381939415-e44f66e770f4?w=300&q=80&fit=crop", badge:"",            filter:"Milk Chocolate",  rating:4.4, reviews:1209 },
  { id:24, brand:"Ferrero",   name:"Rondnoir Dark Pralines",     weight:"138g",  price:890, mrp:1100, img:"https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=300&q=80&fit=crop", badge:"Gift Pack",   filter:"Gift Packs",      rating:4.9, reviews:567  },
];

const FILTERS = ["All", "Milk Chocolate", "Dark Chocolate", "Imported", "Sugar-Free", "Gift Packs"];
const SORTS   = ["Popularity", "Price: Low to High", "Price: High to Low", "Discount"];

/* ─── SKELETON CARD ────────────────────────────────────────────── */
const SkeletonCard = () => (
  <div className="rounded-2xl overflow-hidden animate-pulse" style={{ background: "#fff", border: "1px solid #F0F0F0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
    <div style={{ height: "160px", background: "#F3F4F6" }} />
    <div className="p-3 space-y-2">
      <div style={{ height: "10px", background: "#F3F4F6", borderRadius: "4px", width: "40%" }} />
      <div style={{ height: "13px", background: "#F3F4F6", borderRadius: "4px", width: "80%" }} />
      <div style={{ height: "10px", background: "#F3F4F6", borderRadius: "4px", width: "30%" }} />
      <div style={{ height: "36px", background: "#F3F4F6", borderRadius: "8px", marginTop: "8px" }} />
    </div>
  </div>
);

/* ─── PRODUCT CARD ─────────────────────────────────────────────── */
const ProductCard = ({ product, onCartChange }) => {
  const [qty, setQty]       = useState(0);
  const [adding, setAdding] = useState(false);

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const handleAdd = () => {
    setAdding(true);
    setTimeout(() => { setQty(1); setAdding(false); onCartChange(1); }, 320);
  };
  const increment = () => { setQty(q => q + 1); onCartChange(1); };
  const decrement = () => {
    if (qty === 1) { setQty(0); onCartChange(-1); }
    else { setQty(q => q - 1); onCartChange(-1); }
  };

  return (
    <div
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white"
      style={{
        border: "1px solid #F0F0F0",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        transition: "all 0.28s cubic-bezier(0.4,0,0.2,1)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 16px 32px rgba(0,0,0,0.11)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
      }}
    >
      {/* Discount badge */}
      {discount > 0 && (
        <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-md text-white font-bold"
          style={{ background: "#E11C2A", fontSize: "10px", fontFamily: "'Montserrat', sans-serif" }}>
          {discount}% OFF
        </div>
      )}

      {/* Badge (Best Seller / Trending etc.) */}
      {product.badge && product.badge !== `${discount}% OFF` && (
        <div className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded-md font-bold"
          style={{
            fontSize: "9px",
            fontFamily: "'Montserrat', sans-serif",
            background: product.badge === "Best Seller" ? "#FEF3C7" : product.badge === "Trending" ? "#EDE9FE" : product.badge === "Gift Pack" ? "#FCE7F3" : product.badge === "Imported" ? "#DBEAFE" : product.badge === "Sugar-Free" ? "#DCFCE7" : "#F3F4F6",
            color: product.badge === "Best Seller" ? "#92400E" : product.badge === "Trending" ? "#5B21B6" : product.badge === "Gift Pack" ? "#9D174D" : product.badge === "Imported" ? "#1E40AF" : product.badge === "Sugar-Free" ? "#14532D" : "#374151",
          }}>
          {product.badge}
        </div>
      )}

      {/* Delivery time */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full text-white"
        style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)", fontSize: "9px", fontFamily: "'Poppins', sans-serif", whiteSpace: "nowrap" }}>
        ⚡ 10 min
      </div>

      {/* Image */}
      <div className="relative overflow-hidden flex items-center justify-center"
        style={{ height: "160px", background: "linear-gradient(145deg, #FFF8F0, #FFF3E8)" }}>
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={e => { e.currentTarget.style.display = "none"; }}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-3">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-1">
          <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded" style={{ background: "#F0FDF4" }}>
            <FiStar className="text-green-600" style={{ fontSize: "9px", fill: "#16A34A" }} />
            <span style={{ fontSize: "10px", fontWeight: 700, color: "#15803D", fontFamily: "'Montserrat', sans-serif" }}>{product.rating}</span>
          </div>
          <span style={{ fontSize: "9px", color: "#9CA3AF", fontFamily: "'Poppins', sans-serif" }}>({product.reviews.toLocaleString()})</span>
        </div>

        <p style={{ fontSize: "10px", fontWeight: 600, color: "#6B7280", fontFamily: "'Montserrat', sans-serif", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          {product.brand}
        </p>
        <p style={{ fontSize: "13px", fontWeight: 600, color: "#111827", fontFamily: "'Poppins', sans-serif", lineHeight: 1.35, marginTop: "2px", marginBottom: "2px" }}>
          {product.name}
        </p>
        <p style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "'Poppins', sans-serif", marginBottom: "8px" }}>
          {product.weight}
        </p>

        {/* Price row + ADD button */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span style={{ fontSize: "15px", fontWeight: 700, color: "#111827", fontFamily: "'Montserrat', sans-serif" }}>
              ₹{product.price}
            </span>
            <span style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "'Poppins', sans-serif", textDecoration: "line-through", marginLeft: "5px" }}>
              ₹{product.mrp}
            </span>
          </div>

          {/* ADD / Qty control */}
              <AddToCartBtn product={{ id: product.id, name: product.name, price: product.price, image: product.img, weight: product.weight }} size="md" stopProp={true} />
        </div>
      </div>
    </div>
  );
};

/* ─── SIDEBAR ──────────────────────────────────────────────────── */
const Sidebar = ({ priceRange, setPriceRange, selectedBrands, setSelectedBrands, minDiscount, setMinDiscount, minRating, setMinRating }) => {
  const brands = [...new Set(products.map(p => p.brand))];
  const toggleBrand = (b) => setSelectedBrands(prev => prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]);

  return (
    <aside style={{ width: "220px", flexShrink: 0, position: "sticky", top: "80px", height: "fit-content" }}>
      <div className="rounded-2xl p-4 bg-white" style={{ border: "1px solid #F0F0F0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>

        <p style={{ fontSize: "14px", fontWeight: 700, color: "#111827", fontFamily: "'Montserrat', sans-serif", marginBottom: "16px" }}>Filters</p>

        {/* Brand */}
        <div style={{ marginBottom: "20px" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.8px", fontFamily: "'Montserrat', sans-serif", marginBottom: "10px" }}>Brand</p>
          {brands.map(b => (
            <label key={b} className="flex items-center gap-2 cursor-pointer mb-2" style={{ fontSize: "13px", fontFamily: "'Poppins', sans-serif", color: "#374151" }}>
              <input type="checkbox" checked={selectedBrands.includes(b)} onChange={() => toggleBrand(b)}
                style={{ accentColor: "#E11C2A", width: "14px", height: "14px" }} />
              {b}
            </label>
          ))}
        </div>

        {/* Price range */}
        <div style={{ marginBottom: "20px" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.8px", fontFamily: "'Montserrat', sans-serif", marginBottom: "10px" }}>
            Price: ₹0 – ₹{priceRange}
          </p>
          <input type="range" min={20} max={1100} value={priceRange}
            onChange={e => setPriceRange(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#E11C2A" }} />
        </div>

        {/* Discount */}
        <div style={{ marginBottom: "20px" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.8px", fontFamily: "'Montserrat', sans-serif", marginBottom: "10px" }}>
            Min. Discount: {minDiscount}%+
          </p>
          <input type="range" min={0} max={50} step={5} value={minDiscount}
            onChange={e => setMinDiscount(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#E11C2A" }} />
        </div>

        {/* Rating */}
        <div>
          <p style={{ fontSize: "12px", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.8px", fontFamily: "'Montserrat', sans-serif", marginBottom: "10px" }}>
            Min. Rating: {minRating}★+
          </p>
          {[4.5, 4.0, 3.5, 0].map(r => (
            <label key={r} className="flex items-center gap-2 cursor-pointer mb-1.5" style={{ fontSize: "13px", fontFamily: "'Poppins', sans-serif", color: "#374151" }}>
              <input type="radio" name="rating" checked={minRating === r} onChange={() => setMinRating(r)}
                style={{ accentColor: "#E11C2A", width: "14px", height: "14px" }} />
              {r === 0 ? "All" : `${r}★ & above`}
            </label>
          ))}
        </div>

      </div>
    </aside>
  );
};

/* ─── MAIN PAGE ────────────────────────────────────────────────── */
const ChocolatesPage = () => {
  const [loading,        setLoading]        = useState(true);
  const [activeFilter,   setActiveFilter]   = useState("All");
  const [sortBy,         setSortBy]         = useState("Popularity");
  const [sortOpen,       setSortOpen]       = useState(false);
  const [cartCount,      setCartCount]      = useState(0);
  const [cartBump,       setCartBump]       = useState(false);
  const [priceRange,     setPriceRange]     = useState(1100);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minDiscount,    setMinDiscount]    = useState(0);
  const [minRating,      setMinRating]      = useState(0);
  const [search,         setSearch]         = useState("");

  const filterRef = useRef();

  // Simulate skeleton loading
  useEffect(() => { const t = setTimeout(() => setLoading(false), 1200); return () => clearTimeout(t); }, []);

  const handleCartChange = (delta) => {
    setCartCount(c => Math.max(0, c + delta));
    setCartBump(true);
    setTimeout(() => setCartBump(false), 400);
  };

  const getDiscount = p => Math.round(((p.mrp - p.price) / p.mrp) * 100);

  const filtered = products
    .filter(p => activeFilter === "All" || p.filter === activeFilter)
    .filter(p => p.price <= priceRange)
    .filter(p => selectedBrands.length === 0 || selectedBrands.includes(p.brand))
    .filter(p => getDiscount(p) >= minDiscount)
    .filter(p => p.rating >= minRating)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "Price: Low to High")  return a.price - b.price;
      if (sortBy === "Price: High to Low")  return b.price - a.price;
      if (sortBy === "Discount")            return getDiscount(b) - getDiscount(a);
      return b.reviews - a.reviews; // Popularity
    });

  return (
    <div style={{ minHeight: "100vh", background: "#F9FAFB", fontFamily: "'Poppins', sans-serif" }}>

      <style>{`
        @keyframes popIn { from { transform: scale(0.85); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes bump  { 0%,100% { transform: scale(1); } 40% { transform: scale(1.35); } }
        .cart-bump { animation: bump 0.4s cubic-bezier(0.4,0,0.2,1); }
        .filter-btn { border: none; background: none; cursor: pointer; transition: all 0.22s ease; white-space: nowrap; }
        .filter-btn:hover { background: #FEE2E2 !important; color: #E11C2A !important; }
        .filter-active { background: #E11C2A !important; color: #fff !important; }
        @media (max-width: 768px) { .sidebar-desktop { display: none !important; } .product-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>

      {/* ── STICKY TOP BAR ─────────────────────────────────────────── */}
      <div className="sticky top-0 z-50 bg-white" style={{ borderBottom: "1px solid #F0F0F0", boxShadow: "0 1px 12px rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div className="flex items-center justify-between gap-4" style={{ height: "60px" }}>

            {/* Logo */}
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "20px", color: "#E11C2A", flexShrink: 0 }}>
              WIRSA
            </div>

            {/* Search */}
            <div className="flex items-center gap-2 flex-1" style={{ maxWidth: "500px", background: "#F3F4F6", borderRadius: "12px", padding: "8px 14px" }}>
              <FiSearch style={{ color: "#9CA3AF", flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search chocolates..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ border: "none", background: "transparent", outline: "none", width: "100%", fontSize: "14px", color: "#374151", fontFamily: "'Poppins', sans-serif" }}
              />
              {search && (
                <button onClick={() => setSearch("")} style={{ border: "none", background: "none", cursor: "pointer", color: "#9CA3AF" }}>
                  <FiX />
                </button>
              )}
            </div>

            {/* Cart */}
            <button
              className={cartBump ? "cart-bump" : ""}
              style={{ position: "relative", background: "#E11C2A", border: "none", borderRadius: "12px", padding: "8px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", color: "#fff", fontWeight: 600, fontSize: "14px", fontFamily: "'Montserrat', sans-serif" }}>
              <FiShoppingCart style={{ fontSize: "16px" }} />
              <span>Cart</span>
              {cartCount > 0 && (
                <div style={{ position: "absolute", top: "-6px", right: "-6px", width: "20px", height: "20px", background: "#fff", color: "#E11C2A", borderRadius: "50%", fontSize: "10px", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid #E11C2A" }}>
                  {cartCount}
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── PAGE CONTENT ───────────────────────────────────────────── */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "24px" }}>

        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 mb-4" style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "'Poppins', sans-serif" }}>
          <a href="/" style={{ color: "#9CA3AF", textDecoration: "none" }}>Home</a>
          <FiChevronRight style={{ fontSize: "12px" }} />
          <a href="/snacks" style={{ color: "#9CA3AF", textDecoration: "none" }}>Snacks</a>
          <FiChevronRight style={{ fontSize: "12px" }} />
          <span style={{ color: "#374151", fontWeight: 500 }}>Chocolates</span>
        </div>

        {/* Page title */}
        <div className="flex items-end justify-between mb-5">
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#111827", margin: 0 }}>
              🍫 Chocolates
            </h1>
            <p style={{ fontSize: "13px", color: "#9CA3AF", marginTop: "4px" }}>Buy chocolates online — {filtered.length} products found</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-white" style={{ background: "#16A34A", fontSize: "12px", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
            ⚡ 10 min delivery
          </div>
        </div>

        {/* ── Filter + Sort bar ─── */}
        <div className="flex items-center gap-3 mb-6" style={{ overflowX: "auto", paddingBottom: "4px", scrollbarWidth: "none" }}>
          {/* Filters */}
          <div className="flex items-center gap-2 flex-1" style={{ overflowX: "auto", scrollbarWidth: "none" }}>
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`filter-btn ${activeFilter === f ? "filter-active" : ""}`}
                style={{
                  padding: "7px 16px",
                  borderRadius: "20px",
                  fontSize: "12.5px",
                  fontWeight: 600,
                  fontFamily: "'Montserrat', sans-serif",
                  border: activeFilter === f ? "none" : "1.5px solid #E5E7EB",
                  color: activeFilter === f ? "#fff" : "#374151",
                  background: activeFilter === f ? "#E11C2A" : "#fff",
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div style={{ position: "relative", flexShrink: 0 }} ref={filterRef}>
            <button
              onClick={() => setSortOpen(o => !o)}
              className="flex items-center gap-2"
              style={{ padding: "7px 14px", borderRadius: "20px", fontSize: "12.5px", fontWeight: 600, fontFamily: "'Montserrat', sans-serif", border: "1.5px solid #E5E7EB", background: "#fff", color: "#374151", cursor: "pointer", whiteSpace: "nowrap" }}
            >
              Sort: {sortBy} <FiChevronDown style={{ fontSize: "12px" }} />
            </button>
            {sortOpen && (
              <div style={{ position: "absolute", right: 0, top: "calc(100% + 6px)", background: "#fff", border: "1px solid #F0F0F0", borderRadius: "14px", boxShadow: "0 8px 24px rgba(0,0,0,0.1)", zIndex: 50, minWidth: "200px", overflow: "hidden" }}>
                {SORTS.map(s => (
                  <button key={s} onClick={() => { setSortBy(s); setSortOpen(false); }}
                    style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 16px", fontSize: "13px", fontFamily: "'Poppins', sans-serif", background: sortBy === s ? "#FEF2F2" : "#fff", color: sortBy === s ? "#E11C2A" : "#374151", border: "none", cursor: "pointer", fontWeight: sortBy === s ? 600 : 400 }}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Main layout: Sidebar + Grid ─── */}
        <div className="flex gap-6 items-start">

          {/* Sidebar — desktop only */}
          <div className="sidebar-desktop">
            <Sidebar
              priceRange={priceRange} setPriceRange={setPriceRange}
              selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands}
              minDiscount={minDiscount} setMinDiscount={setMinDiscount}
              minRating={minRating} setMinRating={setMinRating}
            />
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {loading ? (
              <div className="product-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
                {Array(8).fill(0).map((_, i) => <SkeletonCard key={i} />)}
              </div>
            ) : filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <span style={{ fontSize: "48px" }}>🍫</span>
                <p style={{ fontSize: "18px", fontWeight: 600, color: "#374151", marginTop: "16px", fontFamily: "'Montserrat', sans-serif" }}>No chocolates found</p>
                <p style={{ fontSize: "14px", color: "#9CA3AF", marginTop: "6px" }}>Try adjusting your filters</p>
                <button onClick={() => { setActiveFilter("All"); setPriceRange(1100); setSelectedBrands([]); setMinDiscount(0); setMinRating(0); setSearch(""); }}
                  style={{ marginTop: "16px", padding: "10px 24px", borderRadius: "12px", background: "#E11C2A", color: "#fff", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "14px", fontFamily: "'Montserrat', sans-serif" }}>
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="product-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
                {filtered.map(p => (
                  <ProductCard key={p.id} product={p} onCartChange={handleCartChange} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChocolatesPage;