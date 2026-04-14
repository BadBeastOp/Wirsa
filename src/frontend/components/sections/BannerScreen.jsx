import React, { useState, useEffect } from "react";
import { FiArrowRight, FiTruck, FiClock, FiStar, FiShield } from "react-icons/fi";

const slides = [
  {
    title: "Premium Indian Groceries",
    highlight: "Delivered Fresh",
    tagline: "From farm-fresh vegetables to authentic sweets — everything you love, right at your door.",
    cta: "Shop Now",
    ctaLink: "/shop",
    badge: "New Arrivals",
    image: "/gallery/project_details.jpg",
    tag: "🌿 100% Organic",
  },
  {
    title: "Authentic Indian",
    highlight: "Sweets & Mithai",
    tagline: "Celebrate every occasion with our handcrafted sweets made with pure ingredients.",
    cta: "Explore Sweets",
    ctaLink: "/category/sweets",
    badge: "Best Seller",
    image: "/gallery/banner1.jpg",
    tag: "🍬 Freshly Made",
  },
];

const stats = [
  { icon: FiTruck,  value: "QUICK", label: "Delivery" },
  { icon: FiStar,   value: "4.9★",   label: "Rating"   },
  { icon: FiClock,  value: "24/7",   label: "Service"  },
  { icon: FiShield, value: "100%",   label: "Fresh"    },
];

/* ─── Dot-grid SVG background pattern ─── */
const DotGrid = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity: 0.45 }}
  >
    <defs>
      <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill="#E11C2A" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots)" />
  </svg>
);

/* ─── Premium right-side visual panel ─── */
const HeroVisual = ({ slide, animating }) => (
  <div className="flex-1 hidden md:flex justify-end items-center pr-4">
    <div
      className="relative"
      style={{
        width: "440px",
        height: "420px",
        opacity: animating ? 0 : 1,
        transition: "opacity 0.5s ease",
      }}
    >
      {/* ── Dot-grid card (background layer) ── */}
      <div
        className="absolute bottom-0 right-0 rounded-2xl overflow-hidden"
        style={{
          width: "390px",
          height: "380px",
          background: "#FFF5F5",
          border: "1px solid #F0D5D7",
        }}
      >
        <DotGrid />
      </div>

      {/* ── Decorative thin-line diamond accent ── */}
      <svg
        className="absolute"
        style={{ top: "10px", left: "10px", zIndex: 2 }}
        width="90" height="90" viewBox="0 0 90 90" fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="45" width="62" height="62" rx="4" transform="rotate(-45 1 45)"
          stroke="#E11C2A" strokeWidth="1.5" strokeDasharray="6 4" fill="none" opacity="0.35" />
        <rect x="10" y="45" width="49" height="49" rx="3" transform="rotate(-45 10 45)"
          stroke="#E11C2A" strokeWidth="1" strokeDasharray="4 5" fill="none" opacity="0.2" />
      </svg>

      {/* ── Main image card (foreground) ── */}
      <div
        className="absolute rounded-2xl overflow-hidden"
        style={{
          top: "20px",
          left: "0px",
          width: "380px",
          height: "340px",
          zIndex: 3,
          boxShadow: "0 24px 64px rgba(0,0,0,0.14), 0 4px 16px rgba(225,28,42,0.08)",
          border: "1px solid rgba(255,255,255,0.9)",
        }}
      >
        <img src={slide.image} alt="Hero" className="w-full h-full object-cover" />
        {/* Subtle bottom fade */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.32) 0%, transparent 55%)" }} />

        {/* Badge top-left */}
        <div
          className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-white text-xs font-bold"
          style={{ background: "#E11C2A", fontFamily: "'Montserrat', sans-serif", backdropFilter: "blur(4px)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
          {slide.badge}
        </div>
      </div>

      {/* ── Floating stat card — bottom right ── */}
      <div
        className="absolute flex items-center gap-3 px-4 py-3 rounded-2xl"
        style={{
          bottom: "12px",
          right: "0px",
          zIndex: 5,
          background: "rgba(255,255,255,0.96)",
          border: "1px solid #EEEEEE",
          boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
          backdropFilter: "blur(12px)",
          minWidth: "170px",
        }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
          style={{ background: "rgba(225,28,42,0.08)" }}
        >
          ⭐
        </div>
        <div>
          <p className="text-xs font-bold text-[#222222]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Trusted by 60M+
          </p>
          <p className="text-[10px] text-gray-400 mt-0.5">Happy customers</p>
        </div>
      </div>

      {/* ── Floating delivery pill — top right ── */}
      <div
        className="absolute flex items-center gap-2 px-3 py-2 rounded-xl text-white text-xs font-bold"
        style={{
          top: "8px",
          right: "0px",
          zIndex: 5,
          background: "linear-gradient(135deg, #E11C2A, #C91825)",
          boxShadow: "0 4px 16px rgba(225,28,42,0.35)",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        <FiTruck className="text-sm" />
        30-Min Delivery
      </div>

      {/* ── Corner geometric accent — bottom left ── */}
      <svg
        className="absolute"
        style={{ bottom: "8px", left: "4px", zIndex: 1 }}
        width="60" height="60" viewBox="0 0 60 60" fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="60" x2="60" y2="0" stroke="#E11C2A" strokeWidth="1" opacity="0.2" />
        <line x1="0" y1="44" x2="44" y2="0" stroke="#E11C2A" strokeWidth="1" opacity="0.15" />
        <line x1="0" y1="28" x2="28" y2="0" stroke="#E11C2A" strokeWidth="1" opacity="0.1" />
      </svg>
    </div>
  </div>
);

const HeroBanner = () => {
  const [current, setCurrent]     = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setAnimating(true);
      setTimeout(() => { setCurrent((p) => (p + 1) % slides.length); setAnimating(false); }, 300);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FFFAFA 0%, #FFFFFF 60%, #FFF8F8 100%)", minHeight: "500px" }}
    >
      {/* ── Subtle diagonal line pattern (left half) ── */}
      <svg
        className="absolute left-0 top-0 h-full pointer-events-none"
        style={{ width: "50%", opacity: 0.025 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="#E11C2A" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>

      {/* ── Top-right thin geometric frame ── */}
      <svg
        className="absolute top-0 right-0 pointer-events-none"
        width="320" height="320"
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.06 }}
      >
        <rect x="40" y="40" width="240" height="240" rx="8" stroke="#E11C2A" strokeWidth="1.5" />
        <rect x="80" y="80" width="160" height="160" rx="4" stroke="#E11C2A" strokeWidth="1" />
        <rect x="120" y="120" width="80" height="80" rx="2" stroke="#E11C2A" strokeWidth="0.75" />
        <line x1="40" y1="40" x2="280" y2="280" stroke="#E11C2A" strokeWidth="0.75" />
        <line x1="280" y1="40" x2="40" y2="280" stroke="#E11C2A" strokeWidth="0.75" />
      </svg>

      <div className="wirsa-container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 py-14 md:py-20">

          {/* ── Left: Text ── */}
          <div className="flex-1 max-w-xl">
            <div className={`transition-all duration-500 ${animating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
              <span className="wirsa-tag mb-5 inline-flex">{slide.tag}</span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-none mb-4 transition-all duration-500 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
              style={{ fontFamily: "'Playfair Display', serif", color: "#222222", transitionDelay: "0.05s" }}
            >
              {slide.title}
              <span className="block gradient-text mt-1">{slide.highlight}</span>
            </h1>

            <p
              className={`text-base md:text-lg leading-relaxed mb-8 transition-all duration-500 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
              style={{ color: "#666666", fontFamily: "'Poppins', sans-serif", transitionDelay: "0.1s", maxWidth: "460px" }}
            >
              {slide.tagline}
            </p>

            <div
              className={`flex items-center gap-4 flex-wrap transition-all duration-500 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
              style={{ transitionDelay: "0.15s" }}
            >
              <a href={slide.ctaLink} className="btn-wirsa flex items-center gap-2 text-base">
                {slide.cta} <FiArrowRight />
              </a>
              <a href="/shop" className="btn-wirsa-outline flex items-center gap-2 text-base">
                Browse All
              </a>
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-4 gap-4 mt-10 pt-8"
              style={{ borderTop: "1px solid #EEEEEE" }}
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex flex-col items-center gap-1 text-center">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-0.5"
                    style={{ background: "rgba(225,28,42,0.08)" }}
                  >
                    <Icon className="text-[#E11C2A] text-base" />
                  </div>
                  <p className="text-sm font-bold text-[#222222]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{value}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Premium visual ── */}
          <HeroVisual slide={slide} animating={animating} />
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-6 left-6 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300 rounded-full h-2"
              style={{
                width: current === i ? "28px" : "8px",
                background: current === i ? "#E11C2A" : "#DDDDDD",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;