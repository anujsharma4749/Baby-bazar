import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function BabyBazarFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-pink-100 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/api/placeholder/48/48" 
                alt="BabyBazar Logo" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold text-pink-500">BabyBazar</h2>
                <p className="text-xs text-gray-600">For Your Kids & Toddlers</p>
              </div>
            </div>
            
            <div className="space-y-3 text-gray-700">
              <p className="leading-relaxed">
                Badkhal Rd, Sector 29, Faridabad,<br />
                Haryana 121008
              </p>
              <p>+91 7042788393</p>
              <p>jbh.webstics@gmail.com</p>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">PRODUCTS</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Best Seller</a></li>
              <li><a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Trendy Items</a></li>
              <li><a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Best Deals</a></li>
              <li><a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">On Sale Products</a></li>
              <li><a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Featured Products</a></li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">INFORMATION</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">About us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Payment Method</a></li>
              <li><a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Product Warranty</a></li>
              <li><a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Return Process</a></li>
              <li><a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Payment Security</a></li>
            </ul>
          </div>

          {/* Terms & Policies Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Terms & Policies</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Payment Policy</a></li>
              <li><a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Account</a></li>
              <li><a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Log in</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-pink-500 pt-8">
          <p className="text-center text-gray-600 text-sm">
            ALL RIGHTS RESERVED Â©️2025 BY JBH TECH INNOVATIONS
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-pink-400 hover:bg-pink-500 text-white p-3 rounded-full shadow-lg transition-colors duration-300 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}