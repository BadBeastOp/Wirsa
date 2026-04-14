import React from "react";

const UserProfile = () => (
  <div className="min-h-screen p-4 flex justify-center" style={{ background: "#F5F5F5" }}>
    <div className="w-full max-w-5xl rounded-3xl p-6 bg-white" style={{ border: "1px solid #EEEEEE", boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}>

      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl shadow-sm" style={{ background: "#F8F8F8", border: "1px solid #EEEEEE" }}>
        <div className="flex flex-col items-center">
          <div className="relative">
            <img src="https://via.placeholder.com/150" alt="profile" className="w-36 h-36 rounded-full object-cover shadow-lg" style={{ border: "4px solid #E11C2A" }} />
            <span className="absolute bottom-1 right-1 px-3 py-1 rounded-xl text-white text-xs shadow cursor-pointer transition-all duration-300 hover:scale-105" style={{ background: "#E11C2A" }}>Edit</span>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#222222]" style={{ fontFamily: "'Playfair Display', serif" }}>John Doe</h2>
          <p className="text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>john@example.com</p>
          <div className="mt-4 flex gap-2 flex-wrap">
            <span className="px-4 py-2 rounded-full text-white shadow" style={{ background: "#E11C2A", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>Active</span>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <h3 className="text-xl font-semibold text-[#222222] mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Personal Information</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-2xl" style={{ background: "#F8F8F8", border: "1px solid #EEEEEE" }}>
        {[
          { label: "Full Name", value: "John Doe" },
          { label: "Email Address", value: "john@example.com" },
          { label: "Phone Number", value: "+91 9876543210" },
          { label: "Password", value: "XXXXXXXXX" },
        ].map((item, i) => (
          <div key={i}>
            <label className="text-gray-500 text-sm block mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>{item.label}</label>
            <input
              type="text"
              defaultValue={item.value}
              className="w-full p-3 rounded-xl text-gray-700 text-sm transition-all duration-300 focus:outline-none bg-white"
              style={{ border: "1px solid #DDDDDD" }}
              onFocus={(e) => { e.target.style.borderColor = "#E11C2A"; e.target.style.boxShadow = "0 0 0 3px rgba(225,28,42,0.1)"; }}
              onBlur={(e)  => { e.target.style.borderColor = "#DDDDDD"; e.target.style.boxShadow = "none"; }}
            />
          </div>
        ))}
        <div className="sm:col-span-2">
          <label className="text-gray-500 text-sm block mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Address</label>
          <input
            type="text"
            defaultValue="123, Green Street, Jalandhar"
            className="w-full p-3 rounded-xl text-gray-700 text-sm transition-all duration-300 focus:outline-none bg-white"
            style={{ border: "1px solid #DDDDDD" }}
            onFocus={(e) => { e.target.style.borderColor = "#E11C2A"; e.target.style.boxShadow = "0 0 0 3px rgba(225,28,42,0.1)"; }}
            onBlur={(e)  => { e.target.style.borderColor = "#DDDDDD"; e.target.style.boxShadow = "none"; }}
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-4">
        <button className="px-6 py-2.5 rounded-xl text-sm font-semibold text-gray-600 transition-all duration-300 hover:bg-gray-200 bg-gray-100" style={{ border: "1px solid #EEEEEE" }}>Cancel</button>
        <button className="px-6 py-2.5 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:bg-[#C91825] hover:scale-105" style={{ background: "#E11C2A", fontFamily: "'Montserrat', sans-serif", boxShadow: "0 4px 15px rgba(225,28,42,0.25)" }}>
          Save Changes
        </button>
      </div>
    </div>
  </div>
);

export default UserProfile;