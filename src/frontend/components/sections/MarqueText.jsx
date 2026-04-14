import React from "react";

const items = [
  "🌿 Fresh Organic Produce",
  "🍬 Authentic Indian Sweets",
  "🌶️ Premium Spices & Masala",
  "🥛 Dairy & Dairy Products",
  "🛒 Fast 30-Min Delivery",
  "⭐ 4.9 Star Rated Service",
  "🎁 Exclusive Weekly Deals",
  "🏠 Doorstep Delivery",
];

const MarqueText = () => (
  <div className="overflow-hidden py-3" style={{ background: "#E11C2A" }}>
    <div className="flex gap-0 whitespace-nowrap animate-marquee" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {[...items, ...items].map((item, i) => (
        <span key={i} className="inline-flex items-center gap-2 px-6 text-white font-semibold text-xs tracking-wide uppercase">
          {item}<span className="text-white/40 mx-2">•</span>
        </span>
      ))}
    </div>
  </div>
);

export default MarqueText;