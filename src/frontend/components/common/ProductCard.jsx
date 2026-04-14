import React, { useState } from "react";
import { FiClock, FiHeart, FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import AddToCartBtn from "./AddToCartBtn";

const ProductCard = ({ image, name, deliveryTime, size, price, originalPrice, productId, id }) => {
  const [wishlisted, setWishlisted] = useState(false);
  const navigate = useNavigate();

  const cardId   = id || productId || name;
  const slug     = productId || name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const product  = { id: cardId, name, price: Number(price), image, weight: size };

  const goToProduct = () => navigate(`/product/${slug}`);

  return (
    <div
      onClick={goToProduct}
      className="wirsa-card group relative flex flex-col"
      style={{ width: "100%", minWidth: "140px", cursor: "pointer" }}
    >
      {/* Wishlist */}
      <button
        onClick={e => { e.stopPropagation(); setWishlisted(!wishlisted); }}
        className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        style={{ background: wishlisted ? "#E11C2A" : "rgba(255,255,255,0.9)", border: "1px solid #EEEEEE", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
      >
        <FiHeart className={`text-xs ${wishlisted ? "text-white" : "text-gray-400"}`} />
      </button>

      {/* Image */}
      <div className="product-img-wrap h-36 flex items-center justify-center p-3 relative" style={{ background: "#F8F8F8", borderBottom: "1px solid #EEEEEE" }}>
        <img src={image} alt={name} className="max-h-full object-contain" loading="lazy" />
        <div className="absolute bottom-0 left-0 right-0 py-2 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0" style={{ background: "rgba(255,255,255,0.92)" }}>
          <button className="text-[#E11C2A] hover:text-[#C91825] transition-colors duration-200"><FiEye className="text-sm" /></button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-3">
        <div className="flex items-center gap-1 mb-1.5">
          <FiClock className="text-[#E11C2A] text-xs flex-shrink-0" />
          <span className="text-[10px] text-gray-400 font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>{deliveryTime}</span>
        </div>
        <h3 className="text-xs font-semibold text-gray-700 leading-tight mb-1 flex-1 line-clamp-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {name}
        </h3>
        <p className="text-[11px] text-gray-400 mb-3">{size}</p>

        <div className="flex items-center justify-between mt-auto" onClick={e => e.stopPropagation()}>
          <div>
            <span className="text-sm font-bold text-[#E11C2A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>₹{price}</span>
            {originalPrice && <span className="text-[10px] text-gray-400 line-through ml-1">₹{originalPrice}</span>}
          </div>
          <AddToCartBtn product={product} size="sm" stopProp={true} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;