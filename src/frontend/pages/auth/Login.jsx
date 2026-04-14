import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading]   = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://pos.premierwebtechservices.com/api/login", {
        username: email, user_type: "user", password, login_type: "email",
      });
      if (res.data?.success === true) {
        localStorage.setItem("authToken", res.data.result?.token);
        localStorage.setItem("userData", JSON.stringify(res.data.result));
        toast.success("Welcome back! 🎉");
        setTimeout(() => navigate("/"), 1500);
      } else {
        toast.error(res.data?.message || "Login failed!");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex" style={{ background: "#F5F5F5" }}>
      {/* Left decorative panel */}
      <div className="hidden lg:flex flex-1 flex-col items-center justify-center p-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FFF5F5 0%, #FFFFFF 100%)", borderRight: "1px solid #EEEEEE" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(225,28,42,0.06) 0%, transparent 70%)" }} />
        <div className="relative z-10 text-center max-w-md">
          <img src="/wirsa-logo.png" alt="WIRSA" style={{height:"90px",width:"auto",objectFit:"contain",mixBlendMode:"multiply",margin:"0 auto 16px"}} />
          <p className="text-gray-500 text-lg leading-relaxed mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Your trusted destination for authentic Indian groceries & handcrafted sweets.
          </p>
          <div className="flex justify-center gap-6">
            {[["60M+", "Customers"], ["4.9★", "Rating"], ["30min", "Delivery"]].map(([val, label]) => (
              <div key={label} className="text-center">
                <p className="text-xl font-black text-[#E11C2A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{val}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="flex flex-1 items-center justify-center px-6 py-16 bg-white">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-3 mb-10 lg:hidden">
            <img src="/wirsa-logo.png" alt="WIRSA" style={{height:"38px",width:"auto",objectFit:"contain",mixBlendMode:"multiply"}} />
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#222222] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Welcome back</h2>
            <p className="text-gray-500 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>Sign in to your WIRSA account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block" style={{ fontFamily: "'Montserrat', sans-serif" }}>Email Address</label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl text-gray-700 text-sm focus:outline-none transition-all duration-300 bg-gray-50"
                  style={{ border: "1px solid #DDDDDD", fontFamily: "'Poppins', sans-serif" }}
                  onFocus={(e) => { e.target.style.borderColor = "#E11C2A"; e.target.style.boxShadow = "0 0 0 3px rgba(225,28,42,0.1)"; e.target.style.background = "#FFFFFF"; }}
                  onBlur={(e)  => { e.target.style.borderColor = "#DDDDDD"; e.target.style.boxShadow = "none"; e.target.style.background = "#F8F8F8"; }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Password</label>
                <Link to="/forgot-password" className="text-xs text-[#E11C2A] font-semibold hover:text-[#C91825] transition-colors duration-300">Forgot Password?</Link>
              </div>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type={showPass ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required
                  className="w-full pl-11 pr-12 py-3.5 rounded-xl text-gray-700 text-sm focus:outline-none transition-all duration-300 bg-gray-50"
                  style={{ border: "1px solid #DDDDDD", fontFamily: "'Poppins', sans-serif" }}
                  onFocus={(e) => { e.target.style.borderColor = "#E11C2A"; e.target.style.boxShadow = "0 0 0 3px rgba(225,28,42,0.1)"; e.target.style.background = "#FFFFFF"; }}
                  onBlur={(e)  => { e.target.style.borderColor = "#DDDDDD"; e.target.style.boxShadow = "none"; e.target.style.background = "#F8F8F8"; }}
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300">
                  {showPass ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <button type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:bg-[#C91825] hover:scale-[1.02] active:scale-[0.98] mt-2 disabled:opacity-70"
              style={{ background: "#E11C2A", fontFamily: "'Montserrat', sans-serif", boxShadow: "0 8px 25px rgba(225,28,42,0.25)" }}
            >
              {loading ? <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" /> : <><span>Sign In</span><FiArrowRight /></>}
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { logo: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg", label: "Google" },
              { logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png", label: "Facebook" },
            ].map(({ logo, label }) => (
              <button key={label} className="flex items-center justify-center gap-2.5 py-3 rounded-xl text-sm font-semibold text-gray-600 transition-all duration-300 hover:border-[#E11C2A] hover:text-[#E11C2A] bg-white" style={{ border: "1px solid #EEEEEE", fontFamily: "'Montserrat', sans-serif" }}>
                <img src={logo} alt={label} className="w-5 h-5" />{label}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#E11C2A] font-semibold hover:text-[#C91825] transition-colors duration-300">Create Account →</Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
