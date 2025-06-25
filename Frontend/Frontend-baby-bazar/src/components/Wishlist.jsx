import React, { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import Navbar from './Navbar.jsx';
import Footer from './footer.jsx';
import Image1 from '../assets/images/categories/diapers.webp';
import Image2 from '../assets/images/categories/toy1.webp';
import Brand1 from '../assets/images/brands/brand-1.webp';
import Brand2 from '../assets/images/brands/brand-2.webp';  
import Brand3 from '../assets/images/brands/brand-3.webp';
import Brand4 from '../assets/images/brands/brand-4.webp';
import Brand5 from '../assets/images/brands/brand-5.webp';
import Brand6 from '../assets/images/brands/brand-6.webp';


const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Mamy Poko Pants',
      price: 300,
      quantity: 1,
      image: Image1, 
    },
    {
      id: 2,
      name: 'Water Ducks',
      price: 800,
      quantity: 1,
      image: Image2,
    }
  ]);

  const updateQuantity = (id, change) => {
    setWishlistItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  const addToCart = (id) => {
    // Add to cart functionality
    console.log(`Added item ${id} to cart`);
  };

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Hero Banner */}
      <Navbar />

      <div className="relative h-64 bg-gradient-to-r from-pink-200 to-purple-200 overflow-hidden">
        <img
          src="https://babyproducts.jbhtechinnovation.com/assets/images/hero/hero-1.jpg"
          alt="Baby banner"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Wishlist</h1>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-4 right-20">
          <div className="w-8 h-8 bg-blue-300 rounded-full opacity-70"></div>
        </div>
        <div className="absolute top-12 right-40">
          <div className="w-6 h-6 bg-green-300 rounded-full opacity-70"></div>
        </div>
        <div className="absolute bottom-8 right-32">
          <div className="w-10 h-10 bg-yellow-300 rounded-full opacity-70"></div>
        </div>
      </div>

      {/* Wishlist Table */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Table Header - Hidden on mobile, shown on desktop */}
          <div className="hidden md:grid md:grid-cols-12 gap-4 p-6 bg-gray-50 border-b font-semibold text-gray-700 text-sm uppercase tracking-wide">
            <div className="col-span-2">Image</div>
            <div className="col-span-3">Product</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-2">Quantity</div>
            <div className="col-span-2">Total</div>
            <div className="col-span-1">Remove</div>
          </div>

          {/* Wishlist Items */}
          <div className="divide-y divide-gray-100">
            {wishlistItems.map((item) => (
              <div key={item.id} className="p-4 md:p-6">
                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg bg-gray-100"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2">{item.name}</h3>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-pink-500">₹{item.price}</span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between ">
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden ">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-gray-50 transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-4 py-2 bg-gray-50 min-w-[50px] text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-gray-50 transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <button
                          onClick={() => addToCart(item.id)}
                          className="bg-black text-white px-4 py-2 rounded-full text-xs  hover:bg-gray-800 transition-colors"
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
                  <div className="col-span-2">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg bg-gray-100"
                    />
                  </div>
                  <div className="col-span-3">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  </div>
                  <div className="col-span-2">
                    <span className="text-2xl font-bold text-pink-500">₹{item.price}</span>
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden w-fit">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2 hover:bg-gray-50 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-2 bg-gray-50 min-w-[50px] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2 hover:bg-gray-50 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <button
                      onClick={() => addToCart(item.id)}
                      className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors w-full"
                    >
                      ADD TO CART
                    </button>
                  </div>
                  <div className="col-span-1 flex justify-center">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Logos Section */}
        <div className="mt-12">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src={Brand1} alt="Baby Care Brand 1" className="h-20 object-contain" />
            <img src={Brand2} alt="Baby Care Brand 2" className="h-20 object-contain ml-8" />
            <img src={Brand3} alt="Baby Care Brand 3" className="h-20 object-contain ml-8" />
            <img src={Brand4} alt="Baby Care Brand 4" className="h-20 object-contain ml-8" />
            <img src={Brand5} alt="Baby Care Brand 5" className="h-20 object-contain ml-8" />
            <img src={Brand6} alt="Baby Care Brand 6" className="h-20 object-contain ml-8" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;