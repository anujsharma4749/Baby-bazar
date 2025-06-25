import React, { useState } from 'react';
import { Minus, Plus, X, ShoppingBag, ArrowLeft, Tag, Truck, RefreshCw } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
export default function BabyCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Mamy Poko Pants',
      price: 300,
      quantity: 1,
      image: 'https://babyproducts.jbhtechinnovation.com/assets/images/product/product-1.jpg',
      category: 'Diapers',
      size: 'Medium (6-11kg)',
      color: 'Pink'
    },
    {
      id: 2,
      name: 'Water Ducks Bath Toy',
      price: 800,
      quantity: 1,
      image: 'https://babyproducts.jbhtechinnovation.com/assets/images/product/product-2.jpg',
      category: 'Bath Toys',
      size: 'Set of 5',
      color: 'Yellow'
    },
    {
      id: 3,
      name: 'Baby Organic Cotton Onesie',
      price: 1200,
      quantity: 2,
      image: 'https://babyproducts.jbhtechinnovation.com/assets/images/product/product-3.jpg',
      category: 'Clothing',
      size: '6-12 Months',
      color: 'White'
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const [couponMessage, setCouponMessage] = useState('');
  const [discount, setDiscount] = useState(0);

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
  const shipping = subtotal > 5000 ? 0 : 150;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax - discount;

  const applyCoupon = () => {
    setIsApplyingCoupon(true);
    // Simulate API call
    setTimeout(() => {
      if (couponCode.toLowerCase() === 'baby10') {
        setDiscount(subtotal * 0.1);
        setCouponMessage('10% discount applied!');
      } else if (couponCode.toLowerCase() === 'freeship') {
        setDiscount(shipping);
        setCouponMessage('Free shipping applied!');
      } else {
        setCouponMessage('Invalid coupon code');
      }
      setIsApplyingCoupon(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#fdf6fa]">
      {/* Header */}
      <Navbar/> 
      <header className="bg-gradient-to-r from-pink-400 to-purple-400 text-white py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-white/20 p-2 rounded-full mr-3">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">Baby Cart</h1>
          </div>
          <Link to="/shop">
          <button className="flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-all">
            <ArrowLeft className="h-5 w-5 mr-1" />
            <span className="hidden sm:inline">Continue Shopping</span>
          </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Your Baby Cart
              </h2>
              <p className="text-gray-600 max-w-xl">
                Review your selected baby products before checkout. Everything your little one needs!
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <div className="bg-white rounded-xl p-3 shadow-md">
                <div className="text-sm text-gray-500">Items</div>
                <div className="text-xl font-bold text-pink-500">{cartItems.length}</div>
              </div>
              <div className="bg-white rounded-xl p-3 shadow-md">
                <div className="text-sm text-gray-500">Total</div>
                <div className="text-xl font-bold text-pink-500">₹{total.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-200/30 rounded-full"></div>
        <div className="absolute top-20 left-10 w-24 h-24 bg-purple-200/30 rounded-full"></div>
        <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-blue-200/30 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            {/* Cart items header */}
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-white rounded-t-xl shadow-sm text-gray-500 font-medium">
              <div className="col-span-5">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-2 text-right">Subtotal</div>
            </div>

            {/* Cart Items */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="p-4 border-b border-gray-100 last:border-0"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    {/* Product Info */}
                    <div className="md:col-span-5 flex items-center">
                      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden mr-4">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className={`w-full h-full flex items-center justify-center ${
                            item.id === 1 ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 
                            item.id === 2 ? 'bg-gradient-to-br from-green-400 to-yellow-400' : 
                            'bg-gradient-to-br from-pink-300 to-orange-300'
                          }`}>
                            <div className="text-white text-xs font-bold text-center px-1">
                              {item.name.split(' ')[0]}
                            </div>
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{item.category}</span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">{item.size}</span>
                          <span className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded-full">{item.color}</span>
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="md:col-span-2 flex md:justify-center">
                      <div className="md:hidden text-sm text-gray-500 mr-2">Price:</div>
                      <div className="text-pink-500 font-semibold">₹{item.price}</div>
                    </div>

                    {/* Quantity */}
                    <div className="md:col-span-3 flex items-center justify-between md:justify-center">
                      <div className="md:hidden text-sm text-gray-500">Quantity:</div>
                      <div className="flex items-center">
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
                          className="w-12 h-10 mx-2 text-center border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                          min="1"
                        />
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    {/* Subtotal and Remove */}
                    <div className="md:col-span-2 flex items-center justify-between">
                      <div className="md:hidden text-sm text-gray-500">Subtotal:</div>
                      <div className="text-pink-500 font-semibold">₹{(item.price * item.quantity).toFixed(2)}</div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors ml-2"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Actions */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
              <div className="flex gap-3">
                <button className="flex items-center bg-white border border-gray-300 text-gray-700 px-5 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Update Cart
                </button>
                <button className="flex items-center bg-white border border-gray-300 text-gray-700 px-5 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Continue Shopping
                </button>
              </div>
              <button 
                className="bg-pink-500 text-white px-5 py-3 rounded-full font-medium hover:bg-pink-600 transition-colors"
                onClick={() => setCartItems([])}
              >
                Clear Cart
              </button>
            </div>

            {/* Coupon Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                    <Tag className="h-5 w-5 mr-2 text-pink-500" />
                    Have a coupon?
                  </h3>
                  <p className="text-gray-600 mt-1">Enter your coupon code if you have one.</p>
                </div>
                
                <div className="w-full md:max-w-md flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                  <button 
                    className={`bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors flex items-center justify-center ${
                      isApplyingCoupon ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    onClick={applyCoupon}
                    disabled={isApplyingCoupon}
                  >
                    {isApplyingCoupon ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Applying...
                      </span>
                    ) : (
                      'Apply Coupon'
                    )}
                  </button>
                </div>
              </div>
              
              {couponMessage && (
                <div className={`mt-4 p-3 rounded-lg ${
                  couponMessage.includes('applied') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {couponMessage}
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96">
            <div className="bg-white rounded-2xl shadow-lg sticky top-6 overflow-hidden">
              <div className="bg-gradient-to-r from-pink-400 to-purple-400 p-6">
                <h3 className="text-xl font-bold text-white">Order Summary</h3>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-800 font-medium">₹{subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-800 font-medium">₹{shipping.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tax (5%)</span>
                    <span className="text-gray-800 font-medium">₹{tax.toFixed(2)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Discount</span>
                      <span className="text-green-600 font-medium">-₹{discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 pt-4 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-bold text-lg">Total</span>
                      <span className="text-gray-800 font-bold text-xl">₹{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl font-bold text-lg hover:from-pink-600 hover:to-purple-600 transition-all mt-8 shadow-lg">
                  Proceed to Checkout
                </button>
                
                <div className="mt-6 flex items-center text-sm text-gray-600">
                  <Truck className="h-5 w-5 mr-2 text-pink-500" />
                  <span>Free shipping on orders over ₹5000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/> 
    </div>
  );
}