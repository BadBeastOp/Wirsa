import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="w-full" style={{ background: "#FFFFFF", color: "#444444", fontFamily: "'Poppins', sans-serif" }}>

      {/* IMAGE + TEXT */}
      <div className="wirsa-section">
        <div className="wirsa-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src="/gallery/gallery_1_1.jpg"
              alt="groceries"
              className="rounded-2xl shadow-lg w-full"
              style={{ border: "1px solid #EEEEEE" }}
            />
            <div>
              <h2 className="wirsa-section-title mb-4 leading-tight">
                Your Destination for Quality Produce and Pantry Essentials
              </h2>
              <p className="text-gray-500 leading-relaxed text-base mt-6 mb-5">
                Freshness is our promise. From organic produce to daily essentials, everything is handpicked and verified to ensure top-notch quality.
              </p>
              <ul className="space-y-3 text-gray-600 text-base">
                {["Fresh & Organic Products", "Quick Delivery Service", "Affordable & Fair Pricing", "Trusted by Millions"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle className="text-[#E11C2A] flex-shrink-0" size={18} /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="wirsa-section-alt">
        <div className="wirsa-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-2xl overflow-hidden" style={{ border: "1px solid #EEEEEE", background: "#FFFFFF", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            {[
              { number: "60M+",  label: "Happy Customers"   },
              { number: "105M+", label: "Orders Delivered"  },
              { number: "80K+",  label: "Products Available"},
              { number: "80K+",  label: "Stores Connected"  },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                className="text-center py-10 px-4" style={{ borderRight: i < 3 ? "1px solid #EEEEEE" : "none" }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#E11C2A] hover:text-[#C91825] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.number}
                </h2>
                <p className="text-gray-500 mt-2 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* TEAM */}
      <div className="wirsa-section">
        <div className="wirsa-container">
          <div className="text-center mb-12">
            <h2 className="wirsa-section-title mx-auto">Meet Our Expert Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { img: "/blog/comment-author-1.jpg", name: "Samuel Alexander", role: "Senior Nutritionist" },
              { img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress", name: "Mia Catherine", role: "Quality Control Head" },
              { img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress", name: "William Parker", role: "Chief Procurement Officer" },
              { img: "https://images.pexels.com/photos/1136973/pexels-photo-1136973.jpeg?auto=compress", name: "Sophia Amelia", role: "Farm Relations Manager" },
            ].map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                className="wirsa-card text-center p-5 group"
              >
                <img src={m.img} alt={m.name} className="w-full rounded-xl object-cover mb-4 transition-transform duration-400 group-hover:scale-105" />
                <h3 className="font-semibold text-lg text-[#222222]" style={{ fontFamily: "'Playfair Display', serif" }}>{m.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="wirsa-section-alt">
        <div className="wirsa-container">
          <div className="text-center mb-12">
            <h2 className="wirsa-section-title mx-auto">Why You Choose Us?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "✓", title: "Organic Food Process",  text: "Natural produce handled with certified organic standards." },
              { icon: "✓", title: "Premium Food Services", text: "A smooth shopping experience with premium care." },
              { icon: "✓", title: "Doorstep Delivery",     text: "Fast, safe and hygienic deliveries at your home." },
              { icon: "✓", title: "Guaranteed Quality",    text: "Every item is inspected to ensure the highest standards." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                className="wirsa-card p-7 text-center"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full text-2xl font-bold mb-4 text-[#E11C2A]" style={{ background: "rgba(225,28,42,0.08)" }}>
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-[#222222] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM LOGO */}
      <div className="wirsa-section py-16">
        <div className="wirsa-container text-center">
          <img
            src="/wirsa-logo.png"
            alt="WIRSA logo"
            className="mx-auto h-16 w-auto"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
