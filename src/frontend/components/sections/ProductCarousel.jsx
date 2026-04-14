import React, { useRef, useState, useEffect } from "react";
import ProductCard from "../common/ProductCard";
import { FiChevronRight, FiChevronLeft, FiArrowRight } from "react-icons/fi";

const dairyProducts = [
  { image: "/product/category_2_1.png", name: "Verka Standard Fresh Milk",  deliveryTime: "15 MINS", size: "1 ltr",   price: "63",  originalPrice: "70" },
  { image: "/product/category_2_2.png", name: "Amul Gold Full Cream Milk",  deliveryTime: "15 MINS", size: "500 ml", price: "35" },
  { image: "/product/category_2_3.png", name: "Amul Shakti Fresh Milk",     deliveryTime: "15 MINS", size: "1 ltr",   price: "63",  originalPrice: "68" },
  { image: "/product/category_2_4.png", name: "Verka Cup Curd",             deliveryTime: "15 MINS", size: "350 g",  price: "33" },
  { image: "/product/category_2_5.png", name: "Amul Salted Butter",         deliveryTime: "15 MINS", size: "100 g",  price: "58",  originalPrice: "65" },
  { image: "/product/category_2_6.png", name: "Amul Masti Pouch Curd",      deliveryTime: "15 MINS", size: "1 kg",   price: "77" },
  { image: "/product/deal_card_1.jpg",  name: "Verka Dahi",                 deliveryTime: "15 MINS", size: "500 ml", price: "26" },
];

const ProductCarousel = ({ title = "Featured Products", seeAllLink = "#", subtitle }) => {
  const scrollRef  = useRef(null);
  const [canLeft,  setCanLeft]  = useState(false);
  const [canRight, setCanRight] = useState(false);

  const scroll = (offset) => scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  const check = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    check();
    el.addEventListener("scroll", check);
    window.addEventListener("resize", check);
    return () => { el.removeEventListener("scroll", check); window.removeEventListener("resize", check); };
  }, []);

  return (
    <section className="wirsa-section bg-white">
      <div className="wirsa-container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="wirsa-section-title">{title}</h2>
            {subtitle && <p className="wirsa-section-subtitle" style={{ marginBottom: 0 }}>{subtitle}</p>}
          </div>
          <a href={seeAllLink} className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#E11C2A] hover:gap-3 transition-all duration-300 group" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            See All <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        <div className="relative">
          {canLeft && (
            <button
              onClick={() => scroll(-320)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#E11C2A] hover:scale-110 group bg-white"
              style={{ border: "1px solid #EEEEEE", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
            >
              <FiChevronLeft className="text-gray-600 group-hover:text-white text-lg" />
            </button>
          )}
          <div ref={scrollRef} className="flex overflow-x-auto gap-4 pb-2 scroll-smooth" style={{ scrollbarWidth: "none" }}>
            {dairyProducts.map((p) => (
              <div key={p.name} className="flex-shrink-0" style={{ width: "calc((100% - 5 * 16px) / 6)" }}>
                <ProductCard {...p} />
              </div>
            ))}
          </div>
          {canRight && (
            <button
              onClick={() => scroll(320)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#E11C2A] hover:scale-110 group bg-white"
              style={{ border: "1px solid #EEEEEE", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
            >
              <FiChevronRight className="text-gray-600 group-hover:text-white text-lg" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;