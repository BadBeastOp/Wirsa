import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FiArrowRight, FiTag } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";

const deals = [
  { id: 1, title: "Fresh Vegetables",  img: "/hero/hero_2_1.png",          desc: "Farm-fresh organic vegetables with amazing discounts.", discount: "20% OFF" },
  { id: 2, title: "Seasonal Fruits",   img: "/hero/hero_2_3.png",          desc: "Sweet and juicy fruits for your healthy lifestyle.",   discount: "15% OFF" },
  { id: 3, title: "Spices & Herbs",    img: "/hero/hero_1_3.png",          desc: "Add aroma and flavor to your meals.",                  discount: "25% OFF" },
  { id: 4, title: "Grocery Combos",    img: "/service/service_card_3.jpg", desc: "Curated combo packs — save more this week!",          discount: "30% OFF" },
  { id: 5, title: "Daily Essentials",  img: "/gallery/gallery_2_2.jpg",    desc: "Everything your kitchen needs in one place.",         discount: "10% OFF" },
];

const DealCard = ({ deal, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    viewport={{ once: true }}
    className="wirsa-card group cursor-pointer h-full"
  >
    <div className="relative product-img-wrap h-44 overflow-hidden" style={{ background: "#F8F8F8" }}>
      <img src={deal.img} alt={deal.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-white text-xs font-bold" style={{ background: "#E11C2A", fontFamily: "'Montserrat', sans-serif" }}>
        {deal.discount}
      </div>
    </div>
    <div className="p-4 flex flex-col flex-1">
      <h3 className="text-base font-bold text-[#222222] mb-2 group-hover:text-[#E11C2A] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
        {deal.title}
      </h3>
      <p className="text-xs text-gray-500 mb-4 leading-relaxed flex-1">{deal.desc}</p>
      <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold text-white transition-all duration-300 group-hover:gap-3 hover:bg-[#C91825]" style={{ background: "#E11C2A", fontFamily: "'Montserrat', sans-serif" }}>
        Shop Now <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  </motion.div>
);

const WeeklyDeals = () => (
  <section className="wirsa-section-alt">
    <div className="wirsa-container">
      <div className="flex items-end justify-between mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <FiTag className="text-[#E11C2A] text-lg" />
            <span className="wirsa-tag">Limited Time</span>
          </div>
          <h2 className="wirsa-section-title">Weekly Deals</h2>
          <p className="wirsa-section-subtitle" style={{ marginBottom: 0 }}>Handpicked offers — updated every week, just for you</p>
        </div>
        <a href="/shop" className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#E11C2A] hover:gap-3 transition-all duration-300 group" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          All Deals <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{ 480: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}
        className="pb-12"
      >
        {deals.map((deal, i) => (
          <SwiperSlide key={deal.id} className="h-auto flex"><DealCard deal={deal} index={i} /></SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default WeeklyDeals;