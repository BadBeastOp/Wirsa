import React from "react";

/* ─────────────────────────────────────────────────────────────────
   30 CATEGORIES — 5 rows × 6 cols
   All images from Unsplash (internet required)
───────────────────────────────────────────────────────────────── */
const categories = [
  /* ── ROW 1 — Fresh & Everyday ── */
  {
    name: "Fruits & Vegetables",
    img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#FFF7ED,#FFEDD5)",
    accent: "#EA580C",
    link: "/category/vegetables",
    tag: "Fresh Daily",
  },
  {
    name: "Dairy & Bread",
    img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#FEFCE8,#FEF9C3)",
    accent: "#CA8A04",
    link: "/category/dairy",
    tag: "Farm Fresh",
  },
  {
    name: "Snacks & Namkeen",
    img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#FFF1F2,#FFE4E6)",
    accent: "#E11C2A",
    link: "/category/snacks",
    tag: "Bestseller",
  },
  {
    name: "Indian Sweets",
    img: "https://images.unsplash.com/photo-1666189975743-c1e96c3d6f89?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#FDF4FF,#FAE8FF)",
    accent: "#A21CAF",
    link: "/category/sweets",
    tag: "Handcrafted",
  },
  {
    name: "Atta, Rice & Dal",
    img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#FEFDF0,#FEF9C3)",
    accent: "#92400E",
    link: "/category/staples",
    tag: "Daily Staple",
  },
  {
    name: "Masala & Spices",
    img: "https://images.unsplash.com/photo-1599909533730-3e4db1fe7c4b?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#FFF7ED,#FFEDD5)",
    accent: "#C2410C",
    link: "/category/masala-oil",
    tag: "Premium",
  },

  /* ── ROW 2 — Drinks & Breakfast ── */
  {
    name: "Cold Drinks & Juices",
    img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#EFF6FF,#DBEAFE)",
    accent: "#1D4ED8",
    link: "/category/drinks",
    tag: "Refreshing",
  },
  {
    name: "Tea & Coffee",
    img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#F5F0EB,#EDE0D4)",
    accent: "#78350F",
    link: "/category/tea-coffee",
    tag: "Energising",
  },
  {
    name: "Breakfast & Cereals",
    img: "https://images.unsplash.com/photo-1517673408565-40c4e56cc61c?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#FFFBF0,#FEF3C7)",
    accent: "#D97706",
    link: "/category/breakfast",
    tag: "Morning Fix",
  },
  {
    name: "Bakery & Biscuits",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#FFF8F0,#FFEDD5)",
    accent: "#B45309",
    link: "/category/bakery",
    tag: "Baked Fresh",
  },
  {
    name: "Frozen Foods",
    img: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#F0FEFF,#CFFAFE)",
    accent: "#0E7490",
    link: "/category/frozen",
    tag: "Quick Meals",
  },
  {
    name: "Instant Foods",
    img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#FFF1F2,#FFE4E6)",
    accent: "#BE123C",
    link: "/category/instant",
    tag: "Ready in 5 min",
  },

  /* ── ROW 3 — Meat, Sauces & Organic ── */
  {
    name: "Chicken & Meat",
    img: "https://images.unsplash.com/photo-1604503468506-a8da13d11d36?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#FFF4F4,#FFE4E6)",
    accent: "#DC2626",
    link: "/category/meat",
    tag: "Fresh Cut",
  },
  {
    name: "Pickles & Chutneys",
    img: "https://images.unsplash.com/photo-1583852151376-b7c84b8a5b27?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#F0FDF4,#DCFCE7)",
    accent: "#16A34A",
    link: "/category/pickles",
    tag: "Authentic",
  },
  {
    name: "Sauces & Spreads",
    img: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#F0FDF4,#DCFCE7)",
    accent: "#15803D",
    link: "/category/sauces",
    tag: "Tasty Additions",
  },
  {
    name: "Dry Fruits & Nuts",
    img: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#FDF8F0,#FEF3C7)",
    accent: "#92400E",
    link: "/category/dry-fruits",
    tag: "Nutritious",
  },
  {
    name: "Organic Living",
    img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#F0FDF4,#DCFCE7)",
    accent: "#166534",
    link: "/category/organic",
    tag: "100% Natural",
  },
  {
    name: "Lentils & Pulses",
    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#FEF9EC,#FEF3C7)",
    accent: "#A16207",
    link: "/category/pulses",
    tag: "Protein Rich",
  },

  /* ── ROW 4 — Health & Household ── */
  {
    name: "Pharma & Wellness",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#F0FFF4,#DCFCE7)",
    accent: "#059669",
    link: "/category/pharma",
    tag: "Stay Healthy",
  },
  {
    name: "Personal Care",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#F5F0FF,#EDE9FE)",
    accent: "#7C3AED",
    link: "/category/personal-care",
    tag: "Self Care",
  },
  {
    name: "Baby Care",
    img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#FFF0FB,#FCE7F3)",
    accent: "#DB2777",
    link: "/category/baby-care",
    tag: "Gentle & Safe",
  },
  {
    name: "Cleaning Essentials",
    img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#F0FAFF,#DBEAFE)",
    accent: "#0369A1",
    link: "/category/cleaning",
    tag: "Sparkling Clean",
  },
  {
    name: "Home & Kitchen",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#F8F0FF,#EDE9FE)",
    accent: "#6D28D9",
    link: "/category/home-kitchen",
    tag: "Must Have",
  },
  {
    name: "Pet Care",
    img: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#FFF7F0,#FFEDD5)",
    accent: "#C2410C",
    link: "/category/pet-care",
    tag: "For Your Pets",
  },

  /* ── ROW 5 — Specialty & Festive ── */
  {
    name: "Paan Corner",
    img: "https://images.unsplash.com/photo-1606491956391-6a10f77f91f8?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#F0FDF4,#DCFCE7)",
    accent: "#15803D",
    link: "/category/paan",
    tag: "Authentic",
  },
  {
    name: "Oils & Ghee",
    img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#FFFBEB,#FEF3C7)",
    accent: "#D97706",
    link: "/category/oils",
    tag: "Pure & Fresh",
  },
  {
    name: "Sweets & Chocolates",
    img: "https://images.unsplash.com/photo-1511381939415-e44f66e770f4?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#FDF4FF,#FAE8FF)",
    accent: "#9333EA",
    link: "/category/chocolates",
    tag: "Indulge",
  },
  {
    name: "Pooja & Agarbatti",
    img: "https://images.unsplash.com/photo-1627483262112-99c977f0e7ce?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#FFF7ED,#FEE2D5)",
    accent: "#EA580C",
    link: "/category/pooja",
    tag: "Spiritual",
  },
  {
    name: "Ice Cream & Desserts",
    img: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#FFF0FB,#FCE7F3)",
    accent: "#EC4899",
    link: "/category/desserts",
    tag: "Sweet Treats",
  },
  {
    name: "Eggs & Meat",
    img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80&fit=crop",
    bg: "linear-gradient(145deg,#FFF4F4,#FFE4E6)",
    accent: "#DC2626",
    link: "/category/eggs-meat",
    tag: "Protein Pack",
  },
];

/* ─── Card ─────────────────────────────────────────────────────── */
const CategoryCard = ({ name, img, bg, accent, link, tag }) => (
  <a
    href={link}
    className="group block relative overflow-hidden"
    style={{
      borderRadius: "14px",
      background: "white",
      boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
      transition: "all 0.32s cubic-bezier(0.4,0,0.2,1)",
      cursor: "pointer",
      textDecoration: "none",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = `0 18px 36px rgba(0,0,0,0.12), 0 0 0 2px ${accent}28`;
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.07)";
    }}
  >
    {/* Image */}
    <div
      className="relative overflow-hidden"
      style={{ background: bg, height: "120px", borderRadius: "14px 14px 0 0" }}
    >
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        onError={e => { e.currentTarget.style.opacity = "0"; }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 60%)" }}
      />
      {/* Tag chip */}
      <div
        className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-white"
        style={{
          background: accent,
          fontSize: "8.5px",
          fontWeight: 700,
          letterSpacing: "0.6px",
          fontFamily: "'Montserrat', sans-serif",
          textTransform: "uppercase",
        }}
      >
        {tag}
      </div>
    </div>

    {/* Label */}
    <div
      className="px-2 py-2.5 text-center"
      style={{ borderTop: `2px solid ${accent}15` }}
    >
      <p
        className="group-hover:text-[#E11C2A] transition-colors duration-300"
        style={{
          fontSize: "12.5px",
          fontWeight: 600,
          color: "#1F1F1F",
          fontFamily: "'Poppins', sans-serif",
          lineHeight: 1.3,
        }}
      >
        {name}
      </p>
    </div>
  </a>
);

/* ─── Section ───────────────────────────────────────────────────── */
const CategoryGrid = () => (
  <section style={{ padding: "64px 0", background: "#F8F8F8" }}>
    <div className="wirsa-container">

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "32px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
            <div style={{ width: "28px", height: "3px", borderRadius: "2px", background: "#E11C2A" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#E11C2A", fontFamily: "'Montserrat', sans-serif" }}>
              Browse
            </span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px,3vw,30px)", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2, margin: 0 }}>
            Main Categories
          </h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", color: "#888", marginTop: "6px" }}>
            Everything you need, all in one place
          </p>
        </div>
        <a
          href="/shop"
          style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, color: "#E11C2A", fontFamily: "'Montserrat', sans-serif", textDecoration: "none", transition: "gap 0.3s ease" }}
          onMouseEnter={e => { e.currentTarget.style.gap = "10px"; }}
          onMouseLeave={e => { e.currentTarget.style.gap = "6px"; }}
        >
          View All
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="#E11C2A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Grid — 6 cols × 5 rows */}
      <div className="category-main-grid" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "18px" }}>
        {categories.map(cat => (
          <CategoryCard key={cat.name} {...cat} />
        ))}
      </div>

    </div>

    <style>{`
      @media (max-width: 480px) {
        .category-main-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
      }
      @media (min-width: 481px) and (max-width: 768px) {
        .category-main-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 14px !important; }
      }
      @media (min-width: 769px) and (max-width: 1024px) {
        .category-main-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 16px !important; }
      }
    `}</style>
  </section>
);

export default CategoryGrid; 