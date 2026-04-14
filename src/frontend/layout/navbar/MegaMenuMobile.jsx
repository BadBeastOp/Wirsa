import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const menuData = [
  { title: "Fresh Fruits",  items: ["Apples", "Bananas", "Mangoes", "Pineapples", "Pear"] },
  { title: "Vegetables",    items: ["Broccoli", "Cauliflower", "Potatoes", "Tomato", "Spinach"] },
  { title: "Indian Sweets", items: ["Gulab Jamun", "Jalebi", "Barfi", "Ladoo"] },
  { title: "Bakery",        items: ["Cakes & Pies", "Bread", "Cookies"] },
];

const MegaMenuMobile = ({ onClose }) => {
  const [openSection, setOpenSection] = useState(null);
  return (
    <div className="overflow-y-auto bg-white">
      {menuData.map(({ title, items }) => (
        <div key={title} style={{ borderBottom: "1px solid #F0F0F0" }}>
          <button
            onClick={() => setOpenSection(openSection === title ? null : title)}
            className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-semibold text-gray-600 hover:text-[#E11C2A] transition-all duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {title}
            {openSection === title ? <FiChevronUp className="text-[#E11C2A]" /> : <FiChevronDown className="text-gray-400" />}
          </button>
          {openSection === title && (
            <div className="pb-3 px-4" style={{ background: "#F8F8F8" }}>
              {items.map((item) => (
                <a key={item} href="#" onClick={onClose}
                  className="block py-2 text-sm text-gray-500 hover:text-[#E11C2A] transition-all duration-200 pl-4"
                  style={{ fontFamily: "'Poppins', sans-serif", borderLeft: "2px solid #EEEEEE" }}>
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MegaMenuMobile;