import React from "react";
import BannerCard from "../common/BannerCard";

const promos = [
  { backgroundColor: "#FFF5F5", imageUrl: "/service/service_card_3.jpg", title: "Pharmacy at your doorstep!", description: "Cough syrups, pain relief, vitamins & more.", linkText: "Order Now", linkUrl: "/pharmacy", badge: "💊 Health" },
  { backgroundColor: "#FFFAF5", imageUrl: "/gallery/gallery_2_2.jpg",    title: "Pet Care supplies in minutes", description: "Food, treats, toys & accessories for your pets.", linkText: "Shop Now", linkUrl: "/pet-care", badge: "🐾 Pets" },
  { backgroundColor: "#F5F8FF", imageUrl: "/gallery/gallery_1_1.jpg",    title: "No time for a diaper run?", description: "Diapers, wipes, baby food & more.", linkText: "Order Now", linkUrl: "/baby-care", badge: "👶 Baby" },
];

const BannerSection = () => (
  <section className="wirsa-section bg-white">
    <div className="wirsa-container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {promos.map((p) => <BannerCard key={p.title} {...p} />)}
      </div>
    </div>
  </section>
);

export default BannerSection;