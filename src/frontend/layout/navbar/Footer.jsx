import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaCopyright } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaEnvelope, FaArrowRight } from "react-icons/fa6";
import Newsletter from "../../components/common/Newsletter";
import { Link } from "react-router-dom";

const quickLinks = [
  ["About Us", "/aboutus"],
  ["Testimonials", "/project"],
  ["Help & FAQs", "/faq"],
  ["Blog", "/blog"],
  ["Contact Us", "/contact"],
];

const categories = [
  ["Fresh Vegetables", "/category/vegetables"],
  ["Dairy & Eggs", "/category/dairy"],
  ["Sweets & Mithai", "/category/sweets"],
  ["Snacks", "/category/snacks"],
  ["Spices & Masala", "/category/masala-oil"],
  ["Beverages", "/category/drinks"],
];

const socials = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaTwitter,   href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaWhatsapp,  href: "#" },
];

const contactItems = [
  { icon: FaLocationDot, text: "8502 Preston Rd. Inglewood, Maine 98380" },
  { icon: FaPhone,       text: "+(163)-2654-3564\n+(163)-2654-5432"       },
  { icon: FaEnvelope,    text: "help@wirsa.com"                           },
];

const FooterTitle = ({ children }) => (
  <div className="mb-5">
    <h4
      className="text-sm font-bold text-[#333333] uppercase tracking-widest mb-2"
      style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "2px" }}
    >
      {children}
    </h4>
    <div className="w-8 h-0.5 rounded-full" style={{ background: "#E11C2A" }} />
  </div>
);

const Footer = () => (
  <footer style={{ background: "#F5F5F5", borderTop: "1px solid #EEEEEE", fontFamily: "'Poppins', sans-serif" }}>
    <Newsletter />

    <div className="wirsa-container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <Link to="/" className="inline-block mb-5 group" style={{cursor:"pointer",transition:"all 0.2s ease"}}>
            <div className="group-hover:opacity-90 transition-opacity duration-200">
              <img
                src="/wirsa-logo.png"
                alt="WIRSA"
                style={{height:"42px",width:"auto",objectFit:"contain",mixBlendMode:"multiply"}}
              />
              <p className="text-[11px] text-gray-400 mt-1 tracking-wider" style={{letterSpacing:"1px",fontFamily:"'Poppins',sans-serif",fontWeight:400}}>
                Indian Groceries &amp; Sweets
              </p>
            </div>
          </Link>

          <p className="text-gray-500 text-sm leading-relaxed mb-6" style={{ maxWidth: "240px" }}>
            Your trusted destination for authentic Indian groceries and handcrafted sweets.
          </p>

          <div className="flex gap-2">
            {socials.map(({ icon: SocialIcon, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 transition-all duration-300 hover:bg-[#E11C2A] hover:text-white hover:scale-110 bg-white"
                style={{ border: "1px solid #EEEEEE" }}
              >
                <SocialIcon className="text-xs" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <FooterTitle>Quick Links</FooterTitle>
          <ul className="space-y-2.5">
            {quickLinks.map(([label, to]) => (
              <li key={label}>
                <Link
                  to={to}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#E11C2A] transition-all duration-300 group"
                >
                  <FaArrowRight className="text-[8px] text-[#E11C2A] opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all duration-300" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <FooterTitle>Categories</FooterTitle>
          <ul className="space-y-2.5">
            {categories.map(([label, to]) => (
              <li key={label}>
                <Link
                  to={to}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#E11C2A] transition-all duration-300 group"
                >
                  <FaArrowRight className="text-[8px] text-[#E11C2A] opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all duration-300" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <FooterTitle>Contact Us</FooterTitle>
          <div className="space-y-4">
            {contactItems.map(({ icon: ContactIcon, text }) => (
              <div key={text} className="flex gap-3 group">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-[#E11C2A] bg-white"
                  style={{ border: "1px solid #EEEEEE" }}
                >
                  <ContactIcon className="text-[#E11C2A] group-hover:text-white text-xs transition-colors duration-300" />
                </div>
                <p className="text-sm text-gray-500 whitespace-pre-line hover:text-gray-700 transition-colors duration-300">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Instagram gallery strip */}
          <div className="grid grid-cols-4 gap-1.5 mt-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="relative group overflow-hidden rounded-lg aspect-square">
                <img
                  src={`/widget/gallery_1_${n}.jpg`}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#E11C2A]/0 group-hover:bg-[#E11C2A]/40 transition-all duration-300 flex items-center justify-center">
                  <FaInstagram className="text-white opacity-0 group-hover:opacity-100 text-sm transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Copyright bar */}
    <div style={{ background: "#EEEEEE", borderTop: "1px solid #DDDDDD" }}>
      <div className="wirsa-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-500">
          Copyright <FaCopyright className="inline text-[10px]" /> 2025{" "}
          <Link to="/" className="font-semibold text-gray-600 hover:text-[#E11C2A] transition-colors duration-300">
            WIRSA Indian Groceries & Sweets
          </Link>
          . All Rights Reserved.
        </p>
        <img
          src="/normal/payment_methods.png"
          alt="Payment Methods"
          className="h-5 opacity-70 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  </footer>
);

export default Footer;
