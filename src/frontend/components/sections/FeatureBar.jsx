import React from "react";
import { FiRefreshCw, FiTruck, FiMapPin, FiHeadphones } from "react-icons/fi";

const features = [
  { icon: FiRefreshCw,   title: "Easy Returns",   text: "Money back guarantee"       },
  { icon: FiTruck,       title: "Free Shipping",  text: "On orders over ₹500"        },
  { icon: FiMapPin,      title: "Store Locator",  text: "Find your nearest store"    },
  { icon: FiHeadphones,  title: "24/7 Support",   text: "Here to help anytime"       },
];

const FeatureBar = () => (
  <section className="py-4 px-4 bg-white">
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div
        className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden"
        style={{ background: "#FFFFFF", border: "1px solid #EEEEEE", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
      >
        {features.map(({ icon: Icon, title, text }, i) => (
          <div
            key={title}
            className="feature-bar-item flex items-center gap-4 px-6 py-5 cursor-pointer group"
            style={{
              borderRight: i < 3 ? "1px solid #EEEEEE" : "none",
              borderBottom: i < 2 ? "1px solid #EEEEEE" : undefined,
            }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E11C2A]"
              style={{ background: "rgba(225,28,42,0.08)" }}
            >
              <Icon className="text-[#E11C2A] group-hover:text-white text-xl transition-colors duration-300" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#222222]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{title}</p>
              <p className="text-xs text-gray-400 mt-0.5">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureBar;