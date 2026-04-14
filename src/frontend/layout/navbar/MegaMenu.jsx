import React from "react";
import { FiArrowRight } from "react-icons/fi";

const menuData = [
  { title: "Fresh Fruits",  items: ["Apples", "Bananas", "Mangoes", "Pineapples", "Pear", "Strawberries"] },
  { title: "Vegetables",    items: ["Broccoli", "Cauliflower", "Potatoes", "Tomato", "Spinach", "Onions"] },
  { title: "Bakery",        items: ["Cakes & Pies", "Bread", "Cookies", "Muffins", "Croissants"] },
  { title: "Indian Sweets", items: ["Gulab Jamun", "Jalebi", "Barfi", "Ladoo", "Rasgulla", "Halwa"] },
];

const MegaMenu = () => (
  <div
    className="absolute left-0 right-0 top-full z-50 animate-slideUp"
    style={{ background: "#FFFFFF", borderTop: "1px solid #EEEEEE", borderBottom: "1px solid #EEEEEE", boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
  >
    <div className="wirsa-container py-8">
      <div className="grid grid-cols-4 gap-8">
        {menuData.map(({ title, items }) => (
          <div key={title}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 rounded-full" style={{ background: "#E11C2A" }} />
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "2px" }}>
                {title}
              </h4>
            </div>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#E11C2A] transition-all duration-200 group" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <FiArrowRight className="text-[10px] text-[#E11C2A] opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 flex items-center justify-between" style={{ borderTop: "1px solid #F0F0F0" }}>
        <p className="text-xs text-gray-400">🔥 Explore <span className="text-[#E11C2A] font-semibold">200+</span> product categories</p>
        <a href="/shop" className="flex items-center gap-2 text-xs font-bold text-[#E11C2A] hover:gap-3 transition-all duration-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          View All <FiArrowRight />
        </a>
      </div>
    </div>
  </div>
);

export default MegaMenu;