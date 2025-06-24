import React, { useState } from "react";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function BabyBazarNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-1 bg-white">
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
          display: inline-block;
        }
      `}</style>
      {/* Top Banner */}
      <div className="bg-pink-300 text-white py-2 px-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-sm font-medium">
            New Season New Products And New Sales With Happiness
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-Pink shadow-sm px-4 lg:px-8 py-4 sticky top-0 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://babyproducts.jbhtechinnovation.com/assets/images/logo.webp"
              alt="BabyBazar Logo"
              className="w-70 object-cover"
            />
             
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              HOME
            </Link>
            <Link
              to="/shop"
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              BABY OIL
            </Link>
            <Link
              to="/shop"
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              TOYS
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              BLOG
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              CONTACT
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            {/* Wishlist */}
            <Link to="/wishlist">
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                02
              </span>
            </button>
            </Link>

            {/* Cart */}
            <Link to="/cart">
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                02
              </span>
            </button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
              >
                HOME
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
              >
                BABY OIL
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
              >
                TOYS
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
              >
                BLOG
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
              >
                CONTACT
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
