import React, { useState } from "react";
import { FiMail, FiArrowRight, FiCheck } from "react-icons/fi";

const Newsletter = () => {
  const [email, setEmail]         = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); setEmail(""); }
  };

  return (
    <div className="newsletter-glow relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FFF5F5 0%, #FFFFFF 50%, #FFF8F8 100%)", borderTop: "1px solid #EEEEEE", borderBottom: "1px solid #EEEEEE" }}>
      <div className="absolute -left-10 top-0 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #E11C2A, transparent)" }} />
      <div className="absolute -right-10 bottom-0 w-48 h-48 rounded-full opacity-5" style={{ background: "radial-gradient(circle, #E11C2A, transparent)" }} />

      <div className="wirsa-container relative z-10 py-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-5 max-w-lg">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1" style={{ background: "rgba(225,28,42,0.08)", border: "1px solid rgba(225,28,42,0.15)" }}>
              <FiMail className="text-[#E11C2A] text-2xl" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#222222] leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                Get Exclusive Deals & Updates
              </h2>
              <p className="text-gray-500 text-sm mt-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Subscribe and be the first to know about our latest offers and seasonal specials.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-auto lg:min-w-[440px]">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-11 pr-4 py-4 rounded-xl text-gray-700 text-sm focus:outline-none transition-all duration-300 bg-white"
                  style={{ border: "1px solid #DDDDDD", fontFamily: "'Poppins', sans-serif" }}
                  onFocus={(e) => { e.target.style.borderColor = "#E11C2A"; e.target.style.boxShadow = "0 0 0 3px rgba(225,28,42,0.1)"; }}
                  onBlur={(e)  => { e.target.style.borderColor = "#DDDDDD"; e.target.style.boxShadow = "none"; }}
                />
              </div>
              <button type="submit"
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-sm text-white whitespace-nowrap transition-all duration-300 hover:bg-[#C91825] hover:scale-105 active:scale-95"
                style={{ background: "#E11C2A", fontFamily: "'Montserrat', sans-serif", boxShadow: "0 6px 20px rgba(225,28,42,0.25)" }}
              >
                {submitted ? <><FiCheck /> Subscribed!</> : <>Subscribe <FiArrowRight /></>}
              </button>
            </form>
            <p className="text-gray-400 text-xs mt-3 ml-1" style={{ fontFamily: "'Poppins', sans-serif" }}>🔒 We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;