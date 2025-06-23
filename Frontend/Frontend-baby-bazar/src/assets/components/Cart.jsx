import React, { useState } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './footer';

export default function BabyCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Mamy Poko Pants',
      price: 300,
      quantity: 1,
      image: 'https://babyproducts.jbhtechinnovation.com/assets/images/product/product-1.jpg'
    },
    {
      id: 2,
      name: 'Water Ducks',
      price: 800,
      quantity: 1,
      image: 'https://babyproducts.jbhtechinnovation.com/assets/images/product/product-2.jpg'
    }
  ]);

  const [couponCode, setCouponCode] = useState('');

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8e8e8' }}>
      {/* Header with baby background */}
       <Navbar />
      <div 
        className="relative h-80 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url("https://babyproducts.jbhtechinnovation.com/assets/images/hero/hero-1.jpg")`,
          backgroundColor: '#f8e8e8',
          opacity: 0.5,
        }}
      >
        {/* Baby and toy illustrations overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-16 h-16 bg-blue-300 rounded-full"></div>
          <div className="absolute top-20 left-40 w-12 h-12 bg-green-300 rounded-full"></div>
          <div className="absolute top-15 left-60 w-10 h-10 bg-yellow-300 rounded-full"></div>
          <div className="absolute top-12 left-80 w-14 h-14 bg-pink-300 rounded-full"></div>
          <div className="absolute top-16 left-100 w-8 h-8 bg-orange-300 rounded-full"></div>
          
          <div className="absolute top-32 right-20 w-20 h-12 bg-blue-200 rounded-lg transform rotate-12"></div>
          <div className="absolute top-28 right-40 w-16 h-10 bg-green-200 rounded transform -rotate-6"></div>
          <div className="absolute bottom-20 left-16 w-12 h-8 bg-yellow-200 rounded-full"></div>
          <div className="absolute bottom-16 right-60 w-14 h-10 bg-pink-200 rounded transform rotate-45"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-green-400 to-yellow-400 rounded-full flex items-center justify-center mr-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full"></div>
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Cart</h1>
          <div className="text-gray-600 text-lg">
            <span className="hover:text-gray-800 cursor-pointer">Home</span>
            <span className="mx-3">/</span>
            <span className="text-gray-800 font-medium">Cart</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Cart Table Header */}
          <div className="grid grid-cols-6 gap-4 p-6 bg-gray-50 border-b text-sm font-semibold text-gray-600 uppercase tracking-wider">
            <div>IMAGE</div>
            <div>PRODUCT</div>
            <div>PRICE</div>
            <div>QUANTITY</div>
            <div>TOTAL</div>
            <div>REMOVE</div>
          </div>

          {/* Cart Items */}
          {cartItems.map((item) => (
            <div key={item.id} className="grid grid-cols-6 gap-4 p-6 border-b border-gray-100 items-center">
              {/* Product Image */}
              <div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-lg overflow-hidden">
                {item.name === 'Mamy Poko Pants' ? (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                    MAMY POKO
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-green-400 to-yellow-400 flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-4 h-6 bg-green-500 rounded-full"></div>
                      <div className="w-4 h-6 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Product Name */}
              <div className="text-gray-800 font-medium text-lg">{item.name}</div>

              {/* Price */}
              <div className="text-pink-500 font-semibold text-lg">₹{item.price}</div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <Minus className="w-4 h-4 text-gray-600" />
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                  className="w-16 h-10 text-center border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                  min="1"
                />
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {/* Total */}
              <div className="text-pink-500 font-semibold text-lg">₹{item.price * item.quantity}</div>

              {/* Remove Button */}
              <div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="w-8 h-8 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-start mt-8 gap-8">
          {/* Left Side - Buttons and Coupon */}
          <div className="flex-1">
            <div className="flex space-x-4 mb-8">
              <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors">
                UPDATE CART
              </button>
              <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors">
                CONTINUE SHOPPING
              </button>
            </div>

            {/* Coupon Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Coupon</h3>
              <p className="text-gray-600 mb-4">Enter your coupon code if you have one.</p>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
                <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors">
                  APPLY COUPON
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Cart Totals */}
          <div className="w-96">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Cart Totals</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">SUBTOTAL</span>
                  <span className="text-gray-800 font-semibold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-800 font-bold text-lg">TOTAL</span>
                  <span className="text-gray-800 font-bold text-xl">₹{subtotal}</span>
                </div>
              </div>

              <button className="w-full bg-gray-800 text-white py-4 rounded-full font-bold text-lg hover:bg-gray-700 transition-colors">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}