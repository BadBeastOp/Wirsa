import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiPhone, FiMail, FiLock, FiMapPin, FiBriefcase, FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";

export default function Signup() {
  const navigate  = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading]   = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); navigate("/login"); }, 1500);
  };

  const inputStyle = {
    background: "#F8F8F8", border: "1px solid #DDDDDD", fontFamily: "'Poppins', sans-serif",
  };
  const focusStyle = (e) => { e.target.style.borderColor = "#E11C2A"; e.target.style.boxShadow = "0 0 0 3px rgba(225,28,42,0.1)"; e.target.style.background = "#FFFFFF"; };
  const blurStyle  = (e) => { e.target.style.borderColor = "#DDDDDD"; e.target.style.boxShadow = "none"; e.target.style.background = "#F8F8F8"; };

  const Field = ({ icon: Icon, label, type = "text", placeholder, required = true, fullWidth = false, textarea = false }) => (
    <div className={fullWidth ? "col-span-2" : "col-span-1"}>
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block" style={{ fontFamily: "'Montserrat', sans-serif" }}>{label}</label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" style={textarea ? { top: "18px" } : {}} />
        {textarea ? (
          <textarea placeholder={placeholder} rows={3} required={required}
            className="w-full pl-11 pr-4 py-3 rounded-xl text-gray-700 text-sm focus:outline-none transition-all duration-300 resize-none"
            style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
        ) : (
          <input type={type === "password" ? (showPass ? "text" : "password") : type}
            placeholder={placeholder} required={required}
            className="w-full pl-11 pr-4 py-3 rounded-xl text-gray-700 text-sm focus:outline-none transition-all duration-300"
            style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}
          />
        )}
        {type === "password" && (
          <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300">
            {showPass ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16" style={{ background: "#F5F5F5" }}>
      <div className="w-full max-w-xl">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
            <img src="/wirsa-logo.png" alt="WIRSA" style={{height:"40px",width:"auto",objectFit:"contain",mixBlendMode:"multiply"}} />
          </Link>
          <h2 className="text-3xl font-bold text-[#222222] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Create Your Account</h2>
          <p className="text-gray-500 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>Join millions of happy customers</p>
        </div>

        <div className="rounded-2xl p-8 bg-white" style={{ border: "1px solid #EEEEEE", boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <Field icon={FiUser}      label="Full Name"  placeholder="John Doe" />
              <Field icon={FiPhone}     label="Mobile"     type="tel"      placeholder="+91 9876543210" />
              <Field icon={FiMail}      label="Email"      type="email"    placeholder="you@example.com" />
              <Field icon={FiLock}      label="Password"   type="password" placeholder="Create password" />
              <Field icon={FiMapPin}    label="Address"    placeholder="Your full address" fullWidth textarea />
              <Field icon={FiBriefcase} label="GST Number (optional)" placeholder="GST number" required={false} fullWidth />

              <div className="col-span-2">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block" style={{ fontFamily: "'Montserrat', sans-serif" }}>Account Type</label>
                <select className="w-full px-4 py-3 rounded-xl text-gray-700 text-sm focus:outline-none transition-all duration-300 appearance-none" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}>
                  <option>Customer</option>
                  <option>Retailer</option>
                  <option>Distributor</option>
                </select>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-5">
              <input type="checkbox" id="terms" required className="mt-1 accent-[#E11C2A]" />
              <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                I agree to the <Link to="/terms" className="text-[#E11C2A] hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-[#E11C2A] hover:underline">Privacy Policy</Link>
              </label>
            </div>

            <button type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:bg-[#C91825] hover:scale-[1.02] active:scale-[0.98] mt-6 disabled:opacity-70"
              style={{ background: "#E11C2A", fontFamily: "'Montserrat', sans-serif", boxShadow: "0 8px 25px rgba(225,28,42,0.25)" }}
            >
              {loading ? <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" /> : <><span>Create Account</span><FiArrowRight /></>}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Already have an account? <Link to="/login" className="text-[#E11C2A] font-semibold hover:text-[#C91825] transition-colors duration-300">Sign In →</Link>
        </p>
      </div>
    </section>
  );
}
