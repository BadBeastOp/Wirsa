import React from "react";
import { FiArrowRight } from "react-icons/fi";

const BannerCard = ({ backgroundColor, imageUrl, title, description, linkText, linkUrl = "#", badge }) => (
  <div
    className="relative rounded-2xl overflow-hidden flex flex-col justify-end h-56 md:h-64 group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
    style={{ backgroundColor: backgroundColor || "#FFF5F5", border: "1px solid #EEEEEE", boxShadow: "0 4px 15px rgba(0,0,0,0.08)" }}
  >
    {imageUrl && (
      <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    )}
    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)" }} />
    {badge && (
      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-white text-xs font-bold" style={{ background: "#E11C2A", fontFamily: "'Montserrat', sans-serif" }}>
        {badge}
      </div>
    )}
    <div className="relative z-10 p-5">
      <h3 className="text-lg font-bold text-white mb-1 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
      <p className="text-xs text-gray-200 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>{description}</p>
      <a
        href={linkUrl}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white text-xs font-bold transition-all duration-300 group-hover:gap-3 hover:bg-[#C91825]"
        style={{ background: "#E11C2A", fontFamily: "'Montserrat', sans-serif" }}
      >
        {linkText} <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  </div>
);

export default BannerCard;