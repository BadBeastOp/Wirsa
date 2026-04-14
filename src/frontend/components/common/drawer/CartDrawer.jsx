import React from "react";
import { FiX, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../../redux/cartSlice";

const CartDrawer = ({ cartOpen, setCartOpen }) => {
  const dispatch = useDispatch();
  const { items, delivery, handling, smallCart } = useSelector((state) => state.cart);

  const itemsTotal = items.reduce((total, item) => total + item.price * item.qty, 0);
  const grandTotal = itemsTotal + delivery + handling + smallCart;
  const isLoggedIn = false;

  return (
    <>
      {cartOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={() => setCartOpen(false)} />
      )}
      <div
        className="fixed top-0 right-0 h-full w-80 lg:w-96 shadow-2xl z-50 transform transition-transform duration-300 flex flex-col"
        style={{
          background: "#FFFFFF",
          borderLeft: "1px solid #EEEEEE",
          transform: cartOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid #EEEEEE" }}>
          <h2 className="text-xl font-semibold text-[#E11C2A]" style={{ fontFamily: "'Playfair Display', serif" }}>My Cart</h2>
          <button onClick={() => setCartOpen(false)} className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-all duration-300">
            <FiX className="text-gray-600" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {items.map((item) => (
            <div key={item.id} className="p-3 rounded-xl relative bg-gray-50" style={{ border: "1px solid #EEEEEE" }}>
              <button onClick={() => dispatch(removeItem(item.id))} className="absolute top-2 right-2 text-red-400 hover:text-red-600 transition-all duration-300">
                <FiTrash2 size={16} />
              </button>
              <p className="text-xs text-gray-400">Shipment of {item.qty} items</p>
              <div className="flex items-center mt-3 space-x-3">
                <img src={item.img} alt={item.name} className="w-16 h-14 object-cover rounded-lg" style={{ border: "1px solid #EEEEEE" }} />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-700">{item.name}</p>
                  <p className="mt-0.5 font-bold text-[#E11C2A] text-sm">₹{item.price * item.qty}</p>
                </div>
                <div className="flex items-center text-white px-2 py-1 rounded-lg gap-1" style={{ background: "#E11C2A" }}>
                  <FiMinus className="cursor-pointer text-xs" onClick={() => dispatch(decreaseQty(item.id))} />
                  <span className="mx-1.5 text-xs font-bold">{item.qty}</span>
                  <FiPlus className="cursor-pointer text-xs" onClick={() => dispatch(increaseQty(item.id))} />
                </div>
              </div>
            </div>
          ))}

          {/* Bill */}
          <div className="p-3 rounded-xl bg-gray-50" style={{ border: "1px solid #EEEEEE" }}>
            <p className="font-semibold mb-3 text-[#222222] text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>Bill details</p>
            <div className="text-sm space-y-2 text-gray-600">
              {[["Items total", itemsTotal], ["Delivery charge", delivery], ["Handling charge", handling], ["Small cart charge", smallCart]].map(([label, val]) => (
                <div key={label} className="flex justify-between"><span>{label}</span><span>₹{val}</span></div>
              ))}
              <hr style={{ borderColor: "#EEEEEE" }} />
              <div className="flex justify-between font-bold text-[#222222]"><span>Grand total</span><span>₹{grandTotal}</span></div>
            </div>
          </div>

          <div className="p-3 rounded-xl text-xs text-gray-400 bg-gray-50" style={{ border: "1px solid #EEEEEE" }}>
            Orders cannot be cancelled once packed for delivery.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white" style={{ borderTop: "1px solid #EEEEEE" }}>
          <button
            className="w-full text-white py-3 rounded-xl text-sm font-bold transition-all duration-300 hover:bg-[#C91825] hover:scale-[1.02]"
            style={{ background: "#E11C2A", fontFamily: "'Montserrat', sans-serif", boxShadow: "0 4px 15px rgba(225,28,42,0.25)" }}
          >
            {isLoggedIn ? "Proceed to Payment" : "Login to Proceed"}
          </button>
          <div className="flex justify-between items-center mt-3 font-semibold">
            <span className="text-sm text-gray-600">Total</span>
            <span className="text-xl font-black text-[#E11C2A]">₹{grandTotal}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;