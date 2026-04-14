import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiSearch, FiHeart, FiStar,
  FiChevronDown, FiX, FiSliders, FiCheck
} from "react-icons/fi";
import AddToCartBtn from "../components/common/AddToCartBtn";

/* ─── PRODUCT DATA ─────────────────────────────────────────────── */
const ALL_PRODUCTS = [
  { id:1,  name:"Amul Gold Full Cream Milk",   brand:"Amul",     category:"Dairy",      weight:"1 L",    price:65,  mrp:72,  rating:4.6, img:"https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:"Best Seller" },
  { id:2,  name:"Cadbury Dairy Milk Silk",     brand:"Cadbury",  category:"Snacks",     weight:"150 g",  price:160, mrp:200, rating:4.8, img:"https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80&fit=crop",   slug:"cadbury-dairy-milk",         badge:"Trending"    },
  { id:3,  name:"KitKat 4 Finger",             brand:"Nestlé",   category:"Snacks",     weight:"41.5 g", price:40,  mrp:50,  rating:4.7, img:"https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&q=80&fit=crop",   slug:"cadbury-dairy-milk",         badge:"20% OFF"     },
  { id:4,  name:"Fresh Spinach Bunch",         brand:"Organic",  category:"Vegetables", weight:"250 g",  price:29,  mrp:35,  rating:4.4, img:"https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:""            },
  { id:5,  name:"Aashirvaad Atta",             brand:"ITC",      category:"Staples",    weight:"5 kg",   price:280, mrp:320, rating:4.7, img:"https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:"Best Seller" },
  { id:6,  name:"Tata Tea Premium",            brand:"Tata",     category:"Beverages",  weight:"500 g",  price:230, mrp:270, rating:4.5, img:"https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:""            },
  { id:7,  name:"Lay's Classic Salted",        brand:"Lay's",    category:"Snacks",     weight:"52 g",   price:20,  mrp:20,  rating:4.3, img:"https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:""            },
  { id:8,  name:"Amul Butter",                 brand:"Amul",     category:"Dairy",      weight:"100 g",  price:55,  mrp:60,  rating:4.8, img:"https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:"Best Seller" },
  { id:9,  name:"Red Royal Tomatoes",          brand:"Farm",     category:"Vegetables", weight:"500 g",  price:40,  mrp:55,  rating:4.2, img:"https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:"27% OFF"     },
  { id:10, name:"Basmati Rice Premium",        brand:"India Gate","category":"Staples", weight:"5 kg",   price:450, mrp:520, rating:4.6, img:"https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:""            },
  { id:11, name:"Everest Garam Masala",        brand:"Everest",  category:"Spices",     weight:"100 g",  price:65,  mrp:75,  rating:4.7, img:"https://images.unsplash.com/photo-1599909533730-3e4db1fe7c4b?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:""            },
  { id:12, name:"Kissan Mixed Fruit Jam",      brand:"Kissan",   category:"Breakfast",  weight:"200 g",  price:75,  mrp:90,  rating:4.4, img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:"17% OFF"     },
  { id:13, name:"Parle-G Original",            brand:"Parle",    category:"Snacks",     weight:"800 g",  price:60,  mrp:70,  rating:4.5, img:"https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:""            },
  { id:14, name:"Himalayan Pink Salt",         brand:"Tata",     category:"Spices",     weight:"1 kg",   price:80,  mrp:100, rating:4.6, img:"https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:"20% OFF"     },
  { id:15, name:"Fresh Bananas",               brand:"Farm",     category:"Vegetables", weight:"6 pcs",  price:45,  mrp:60,  rating:4.3, img:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:""            },
  { id:16, name:"Nescafé Classic Coffee",      brand:"Nestlé",   category:"Beverages",  weight:"200 g",  price:320, mrp:380, rating:4.7, img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:""            },
  { id:17, name:"Haldiram's Aloo Bhujia",      brand:"Haldiram", category:"Snacks",     weight:"400 g",  price:130, mrp:150, rating:4.5, img:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:""            },
  { id:18, name:"Dettol Handwash",             brand:"Dettol",   category:"Personal",   weight:"250 ml", price:85,  mrp:110, rating:4.6, img:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:"23% OFF"     },
  { id:19, name:"Organic Moong Dal",           brand:"Organic",  category:"Staples",    weight:"1 kg",   price:120, mrp:140, rating:4.4, img:"https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:""            },
  { id:20, name:"Dabur Honey Pure",            brand:"Dabur",    category:"Breakfast",  weight:"500 g",  price:220, mrp:260, rating:4.7, img:"https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:"Best Seller" },
  { id:21, name:"Whole Wheat Bread",           brand:"Harvest",  category:"Breakfast",  weight:"400 g",  price:45,  mrp:50,  rating:4.3, img:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:""            },
  { id:22, name:"Surf Excel Detergent",        brand:"Surf",     category:"Personal",   weight:"1 kg",   price:210, mrp:250, rating:4.6, img:"https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:""            },
  { id:23, name:"Ferrero Rocher Box",          brand:"Ferrero",  category:"Snacks",     weight:"200 g",  price:699, mrp:850, rating:4.9, img:"https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&q=80&fit=crop",   slug:"cadbury-dairy-milk",         badge:"Gift Pack"   },
  { id:24, name:"Maggi 2-Minute Noodles",      brand:"Nestlé",   category:"Breakfast",  weight:"280 g",  price:65,  mrp:72,  rating:4.5, img:"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80&fit=crop",   slug:"amul-gold-full-cream-milk",  badge:"Best Seller" },
];

const CATEGORIES = ["All", ...new Set(ALL_PRODUCTS.map(p => p.category))];
const SORTS = [
  { label: "Popularity",         fn: (a,b) => b.rating - a.rating              },
  { label: "Price: Low to High", fn: (a,b) => a.price - b.price                },
  { label: "Price: High to Low", fn: (a,b) => b.price - a.price                },
  { label: "Newest",             fn: (a,b) => b.id - a.id                      },
  { label: "Discount",           fn: (a,b) => (b.mrp-b.price)/b.mrp - (a.mrp-a.price)/a.mrp },
];

/* ─── SKELETON ─────────────────────────────────────────────────── */
const Skeleton = () => (
  <div style={{ background:"#fff", borderRadius:"16px", border:"1px solid #F0F0F0", overflow:"hidden" }} className="animate-pulse">
    <div style={{ height:"180px", background:"#F3F4F6" }} />
    <div style={{ padding:"14px", display:"flex", flexDirection:"column", gap:"8px" }}>
      <div style={{ height:"10px", background:"#F3F4F6", borderRadius:"4px", width:"40%" }} />
      <div style={{ height:"13px", background:"#F3F4F6", borderRadius:"4px", width:"75%" }} />
      <div style={{ height:"10px", background:"#F3F4F6", borderRadius:"4px", width:"30%" }} />
      <div style={{ height:"36px", background:"#F3F4F6", borderRadius:"8px", marginTop:"8px" }} />
    </div>
  </div>
);

/* ─── PRODUCT CARD ─────────────────────────────────────────────── */
const ShopCard = ({ product }) => {
  const [wishlisted, setWish]   = useState(false);
  const navigate                = useNavigate();
  const discount = product.mrp > product.price
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100) : 0;

  const go = () => navigate(`/product/${product.slug}`);

  return (
    <div
      onClick={go}
      style={{
        background:"#fff", borderRadius:"16px", border:"1px solid #F0F0F0",
        boxShadow:"0 2px 12px rgba(0,0,0,0.05)", cursor:"pointer",
        transition:"all 0.28s cubic-bezier(0.4,0,0.2,1)",
        display:"flex", flexDirection:"column", overflow:"hidden",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow="0 16px 32px rgba(0,0,0,0.1)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)";    e.currentTarget.style.boxShadow="0 2px 12px rgba(0,0,0,0.05)"; }}
    >
      {/* Image area */}
      <div style={{ position:"relative", height:"180px", background:"linear-gradient(145deg,#FFF8F0,#FFF3E8)", overflow:"hidden" }}>
        <img
          src={product.img} alt={product.name} loading="lazy"
          style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.5s ease" }}
          onMouseEnter={e => { e.currentTarget.style.transform="scale(1.08)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform="scale(1)"; }}
          onError={e => { e.currentTarget.style.opacity="0.3"; }}
        />
        {/* Discount badge */}
        {discount > 0 && (
          <div style={{ position:"absolute", top:"10px", left:"10px", background:"#E11C2A", color:"#fff", borderRadius:"8px", padding:"3px 8px", fontSize:"10px", fontWeight:700, fontFamily:"'Montserrat',sans-serif" }}>
            {discount}% OFF
          </div>
        )}
        {/* Special badge */}
        {product.badge && product.badge !== `${discount}% OFF` && (
          <div style={{
            position:"absolute", top:"10px", right:"10px", borderRadius:"8px", padding:"3px 8px", fontSize:"9px", fontWeight:700, fontFamily:"'Montserrat',sans-serif",
            background: product.badge==="Best Seller"?"#FEF3C7": product.badge==="Trending"?"#EDE9FE":"#DCFCE7",
            color:       product.badge==="Best Seller"?"#92400E": product.badge==="Trending"?"#5B21B6":"#15803D",
          }}>
            {product.badge}
          </div>
        )}
        {/* Wishlist */}
        <button
          onClick={e => { e.stopPropagation(); setWish(w => !w); }}
          style={{
            position:"absolute", bottom:"10px", right:"10px",
            width:"30px", height:"30px", borderRadius:"50%",
            border: wishlisted ? "2px solid #E11C2A" : "1.5px solid #E5E7EB",
            background: wishlisted ? "#FEF2F2" : "rgba(255,255,255,0.95)",
            cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center",
          }}
        >
          <FiHeart style={{ fontSize:"14px", color: wishlisted ? "#E11C2A":"#9CA3AF", fill: wishlisted?"#E11C2A":"none" }} />
        </button>
      </div>

      {/* Info */}
      <div style={{ padding:"14px", flex:1, display:"flex", flexDirection:"column" }}>
        {/* Rating */}
        <div style={{ display:"flex", alignItems:"center", gap:"4px", marginBottom:"4px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"2px", background:"#F0FDF4", borderRadius:"6px", padding:"2px 6px" }}>
            <FiStar style={{ fontSize:"9px", color:"#16A34A", fill:"#16A34A" }} />
            <span style={{ fontSize:"10px", fontWeight:700, color:"#15803D", fontFamily:"'Montserrat',sans-serif" }}>{product.rating}</span>
          </div>
          <span style={{ fontSize:"10px", color:"#D1D5DB", fontFamily:"'Poppins',sans-serif" }}>|</span>
          <span style={{ fontSize:"10px", color:"#9CA3AF", fontFamily:"'Poppins',sans-serif" }}>{product.brand}</span>
        </div>

        <p style={{ fontSize:"13px", fontWeight:600, color:"#111827", fontFamily:"'Poppins',sans-serif", lineHeight:1.35, margin:"0 0 3px", display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical", overflow:"hidden" }}>
          {product.name}
        </p>
        <p style={{ fontSize:"11px", color:"#9CA3AF", fontFamily:"'Poppins',sans-serif", margin:"0 0 10px" }}>
          {product.weight}
        </p>

        {/* Price + ADD */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:"auto" }}>
          <div>
            <span style={{ fontSize:"16px", fontWeight:800, color:"#111827", fontFamily:"'Montserrat',sans-serif" }}>₹{product.price}</span>
            {product.mrp > product.price && (
              <span style={{ fontSize:"11px", color:"#9CA3AF", textDecoration:"line-through", marginLeft:"5px", fontFamily:"'Poppins',sans-serif" }}>₹{product.mrp}</span>
            )}
          </div>

          <AddToCartBtn product={{ id: product.id, name: product.name, price: product.price, image: product.img, weight: product.weight }} size="sm" stopProp={true} />
        </div>
      </div>
    </div>
  );
};

/* ─── SIDEBAR ──────────────────────────────────────────────────── */
const Sidebar = ({ activeCategory, setActiveCategory, priceMax, setPriceMax, minRating, setMinRating, onReset }) => (
  <aside style={{ width:"220px", flexShrink:0, position:"sticky", top:"80px", height:"fit-content" }}>
    <div style={{ background:"#fff", borderRadius:"20px", border:"1px solid #F0F0F0", padding:"20px", boxShadow:"0 2px 12px rgba(0,0,0,0.05)" }}>

      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"20px" }}>
        <p style={{ fontSize:"15px", fontWeight:700, color:"#111827", fontFamily:"'Montserrat',sans-serif", margin:0 }}>Filters</p>
        <button onClick={onReset} style={{ fontSize:"11px", fontWeight:600, color:"#E11C2A", background:"none", border:"none", cursor:"pointer", fontFamily:"'Montserrat',sans-serif" }}>
          Reset All
        </button>
      </div>

      {/* Categories */}
      <div style={{ marginBottom:"24px" }}>
        <p style={{ fontSize:"11px", fontWeight:700, color:"#6B7280", textTransform:"uppercase", letterSpacing:"1px", fontFamily:"'Montserrat',sans-serif", marginBottom:"10px" }}>Category</p>
        {CATEGORIES.map(c => (
          <button key={c} onClick={() => setActiveCategory(c)}
            style={{
              display:"flex", alignItems:"center", justifyContent:"space-between",
              width:"100%", padding:"8px 10px", borderRadius:"10px", marginBottom:"2px",
              border:"none", cursor:"pointer", textAlign:"left",
              background: activeCategory===c ? "#FEF2F2" : "transparent",
              color:       activeCategory===c ? "#E11C2A"  : "#374151",
              fontSize:"13px", fontWeight: activeCategory===c ? 600 : 400,
              fontFamily:"'Poppins',sans-serif", transition:"all 0.2s ease",
            }}
          >
            {c}
            {activeCategory===c && <FiCheck style={{ fontSize:"12px", color:"#E11C2A" }} />}
          </button>
        ))}
      </div>

      {/* Price */}
      <div style={{ marginBottom:"24px" }}>
        <p style={{ fontSize:"11px", fontWeight:700, color:"#6B7280", textTransform:"uppercase", letterSpacing:"1px", fontFamily:"'Montserrat',sans-serif", marginBottom:"8px" }}>
          Price: Up to ₹{priceMax}
        </p>
        <input type="range" min={20} max={900} value={priceMax} onChange={e => setPriceMax(Number(e.target.value))}
          style={{ width:"100%", accentColor:"#E11C2A" }} />
        <div style={{ display:"flex", justifyContent:"space-between", fontSize:"10px", color:"#9CA3AF", fontFamily:"'Poppins',sans-serif", marginTop:"4px" }}>
          <span>₹20</span><span>₹900</span>
        </div>
      </div>

      {/* Rating */}
      <div>
        <p style={{ fontSize:"11px", fontWeight:700, color:"#6B7280", textTransform:"uppercase", letterSpacing:"1px", fontFamily:"'Montserrat',sans-serif", marginBottom:"10px" }}>Min. Rating</p>
        {[4.5, 4.0, 3.5, 0].map(r => (
          <label key={r} style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"8px", cursor:"pointer", fontSize:"13px", color:"#374151", fontFamily:"'Poppins',sans-serif" }}>
            <input type="radio" name="rating" checked={minRating===r} onChange={() => setMinRating(r)} style={{ accentColor:"#E11C2A" }} />
            {r === 0 ? "All Ratings" : `${r}★ & above`}
          </label>
        ))}
      </div>
    </div>
  </aside>
);

/* ─── SHOP PAGE ────────────────────────────────────────────────── */
export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortIdx,        setSortIdx]        = useState(0);
  const [sortOpen,       setSortOpen]       = useState(false);
  const [priceMax,       setPriceMax]       = useState(900);
  const [minRating,      setMinRating]      = useState(0);
  const [search,         setSearch]         = useState("");
  const [loading,        setLoading]        = useState(true);
  const [sidebarOpen,    setSidebarOpen]    = useState(false);

  // Simulate skeleton for 800ms
  React.useEffect(() => { const t = setTimeout(() => setLoading(false), 800); return () => clearTimeout(t); }, []);

  const reset = () => { setActiveCategory("All"); setPriceMax(900); setMinRating(0); setSearch(""); setSortIdx(0); };

  const filtered = useMemo(() => {
    return ALL_PRODUCTS
      .filter(p => activeCategory === "All" || p.category === activeCategory)
      .filter(p => p.price <= priceMax)
      .filter(p => p.rating >= minRating)
      .filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()))
      .sort(SORTS[sortIdx].fn);
  }, [activeCategory, sortIdx, priceMax, minRating, search]);

  return (
    <div style={{ background:"#F9FAFB", minHeight:"100vh" }}>

      {/* ── Page header ── */}
      <div style={{ background:"#fff", borderBottom:"1px solid #F0F0F0", padding:"20px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 24px" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
            <div>
              <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(20px,3vw,28px)", fontWeight:700, color:"#111827", margin:"0 0 4px" }}>
                Our Products
              </h1>
              <p style={{ fontSize:"13px", color:"#9CA3AF", fontFamily:"'Poppins',sans-serif", margin:0 }}>
                Fresh groceries delivered in minutes
              </p>
            </div>

            {/* Search */}
            <div style={{ display:"flex", alignItems:"center", gap:"10px", background:"#F3F4F6", borderRadius:"14px", padding:"10px 16px", minWidth:"260px", flex:1, maxWidth:"420px" }}>
              <FiSearch style={{ color:"#9CA3AF", flexShrink:0 }} />
              <input
                type="text" placeholder="Search products..." value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ border:"none", background:"transparent", outline:"none", width:"100%", fontSize:"14px", color:"#374151", fontFamily:"'Poppins',sans-serif" }}
              />
              {search && <button onClick={() => setSearch("")} style={{ border:"none", background:"none", cursor:"pointer", color:"#9CA3AF", flexShrink:0 }}><FiX /></button>}
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"28px 24px" }}>

        {/* Sort + count bar */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"24px", flexWrap:"wrap", gap:"12px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
            {/* Mobile filter toggle */}
            <button
              onClick={() => setSidebarOpen(o => !o)}
              style={{ display:"none", alignItems:"center", gap:"6px", padding:"8px 14px", borderRadius:"12px", border:"1.5px solid #E5E7EB", background:"#fff", cursor:"pointer", fontSize:"13px", fontWeight:600, fontFamily:"'Montserrat',sans-serif", color:"#374151" }}
              className="mobile-filter-btn"
            >
              <FiSliders style={{ fontSize:"14px" }} /> Filters
            </button>

            <span style={{ fontSize:"14px", color:"#6B7280", fontFamily:"'Poppins',sans-serif" }}>
              <b style={{ color:"#111827" }}>{filtered.length}</b> items
            </span>
          </div>

          {/* Sort dropdown */}
          <div style={{ position:"relative" }}>
            <button
              onClick={() => setSortOpen(o => !o)}
              style={{ display:"flex", alignItems:"center", gap:"8px", padding:"8px 16px", borderRadius:"12px", border:"1.5px solid #E5E7EB", background:"#fff", cursor:"pointer", fontSize:"13px", fontWeight:600, fontFamily:"'Montserrat',sans-serif", color:"#374151", whiteSpace:"nowrap" }}
            >
              Sort: {SORTS[sortIdx].label} <FiChevronDown style={{ fontSize:"13px" }} />
            </button>
            {sortOpen && (
              <div style={{ position:"absolute", right:0, top:"calc(100% + 6px)", background:"#fff", border:"1px solid #F0F0F0", borderRadius:"16px", boxShadow:"0 8px 24px rgba(0,0,0,0.1)", zIndex:50, minWidth:"220px", overflow:"hidden" }}>
                {SORTS.map((s, i) => (
                  <button key={s.label} onClick={() => { setSortIdx(i); setSortOpen(false); }}
                    style={{ display:"block", width:"100%", textAlign:"left", padding:"11px 18px", fontSize:"13px", fontFamily:"'Poppins',sans-serif", background: sortIdx===i ? "#FEF2F2":"#fff", color: sortIdx===i ? "#E11C2A":"#374151", border:"none", cursor:"pointer", fontWeight: sortIdx===i ? 600:400 }}>
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Main layout ── */}
        <div style={{ display:"flex", gap:"24px", alignItems:"flex-start" }}>

          {/* Sidebar — desktop */}
          <div className="shop-sidebar-desktop">
            <Sidebar
              activeCategory={activeCategory} setActiveCategory={setActiveCategory}
              priceMax={priceMax} setPriceMax={setPriceMax}
              minRating={minRating} setMinRating={setMinRating}
              onReset={reset}
            />
          </div>

          {/* Mobile sidebar overlay */}
          {sidebarOpen && (
            <>
              <div onClick={() => setSidebarOpen(false)} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.4)", zIndex:100 }} />
              <div style={{ position:"fixed", left:0, top:0, bottom:0, width:"280px", background:"#fff", zIndex:101, overflowY:"auto", padding:"20px" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"16px" }}>
                  <span style={{ fontSize:"16px", fontWeight:700, fontFamily:"'Montserrat',sans-serif" }}>Filters</span>
                  <button onClick={() => setSidebarOpen(false)} style={{ background:"none", border:"none", cursor:"pointer" }}><FiX style={{ fontSize:"20px", color:"#374151" }} /></button>
                </div>
                <Sidebar
                  activeCategory={activeCategory} setActiveCategory={c => { setActiveCategory(c); setSidebarOpen(false); }}
                  priceMax={priceMax} setPriceMax={setPriceMax}
                  minRating={minRating} setMinRating={setMinRating}
                  onReset={reset}
                />
              </div>
            </>
          )}

          {/* Product grid */}
          <div style={{ flex:1, minWidth:0 }}>
            {loading ? (
              <div className="shop-grid">
                {Array(8).fill(0).map((_, i) => <Skeleton key={i} />)}
              </div>
            ) : filtered.length === 0 ? (
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"80px 20px", textAlign:"center" }}>
                <span style={{ fontSize:"56px", marginBottom:"16px" }}>🛒</span>
                <p style={{ fontSize:"20px", fontWeight:700, color:"#111827", fontFamily:"'Montserrat',sans-serif", marginBottom:"8px" }}>No products found</p>
                <p style={{ fontSize:"14px", color:"#9CA3AF", fontFamily:"'Poppins',sans-serif", marginBottom:"24px" }}>Try adjusting your filters or search term</p>
                <button onClick={reset} style={{ background:"linear-gradient(135deg,#E11C2A,#C91825)", color:"#fff", border:"none", borderRadius:"14px", padding:"12px 28px", fontSize:"14px", fontWeight:700, fontFamily:"'Montserrat',sans-serif", cursor:"pointer", boxShadow:"0 6px 20px rgba(225,28,42,0.28)" }}>
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="shop-grid">
                {filtered.map(p => <ShopCard key={p.id} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .shop-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .shop-sidebar-desktop { display: block; }
        .mobile-filter-btn    { display: none !important; }
        @media (max-width: 1024px) {
          .shop-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .shop-sidebar-desktop { display: none !important; }
          .mobile-filter-btn    { display: flex !important; }
          .shop-grid            { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
        }
        @media (max-width: 480px) {
          .shop-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}