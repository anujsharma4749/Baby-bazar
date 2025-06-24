import React, { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "./footer.jsx";
import Navbar from "./Navbar.jsx";

const ShopPage = () => {
  const [showItems, setShowItems] = useState(8);
  const [sortBy, setSortBy] = useState("Name Ascending");
  const [currentPage, setCurrentPage] = useState(1);

  const popularProducts = [
    {
      id: 1,
      name: "Mamy Poko Pants",
      originalPrice: 390,
      salePrice: 300,
      rating: 4.5,
      image: "https://via.placeholder.com/150x150/FF69B4/FFFFFF?text=Mamy+Poko",
    },
    {
      id: 2,
      name: "Water Ducks",
      originalPrice: 2100,
      salePrice: 800,
      rating: 4.5,
      image:
        "https://via.placeholder.com/150x150/32CD32/FFFFFF?text=Water+Ducks",
    },
    {
      id: 3,
      name: "Baby Feeding",
      originalPrice: 799,
      salePrice: 1000,
      rating: 4.5,
      image:
        "https://via.placeholder.com/150x150/87CEEB/FFFFFF?text=Baby+Feeding",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Kids Shoe",
      price: 500,
      rating: 3.5,
      image: "https://via.placeholder.com/280x200/40E0D0/FFFFFF?text=Kids+Shoe",
    },
    {
      id: 2,
      name: "Johnson Oil",
      price: 500,
      rating: 4.5,
      image:
        "https://via.placeholder.com/280x200/FFB6C1/FFFFFF?text=Johnson+Oil",
    },
    {
      id: 3,
      name: "Kitchen Set",
      price: 500,
      rating: 3,
      image:
        "https://via.placeholder.com/280x200/FF6347/FFFFFF?text=Kitchen+Set",
    },
    {
      id: 4,
      name: "Mamy Poko Pants",
      price: 300,
      rating: 3,
      image: "https://via.placeholder.com/280x200/4169E1/FFFFFF?text=Mamy+Poko",
    },
    {
      id: 5,
      name: "Water Ducks",
      price: 800,
      rating: 5,
      image:
        "https://via.placeholder.com/280x200/32CD32/FFFFFF?text=Water+Ducks",
    },
    {
      id: 6,
      name: "Baby Feeding",
      price: 1000,
      rating: 4,
      image:
        "https://via.placeholder.com/280x200/87CEEB/FFFFFF?text=Baby+Feeding",
    },
    {
      id: 7,
      name: "Baby Feeding Device",
      price: 799,
      rating: 5,
      image:
        "https://via.placeholder.com/280x200/DDA0DD/FFFFFF?text=Feeding+Device",
    },
    {
      id: 8,
      name: "Kid Toys",
      price: 799,
      rating: 4,
      image: "https://via.placeholder.com/280x200/90EE90/FFFFFF?text=Kid+Toys",
    },
    {
      id: 9,
      name: "Skily Girld Dress",
      originalPrice: 35,
      salePrice: 19,
      rating: 4.5,
      image:
        "https://via.placeholder.com/280x200/191970/FFFFFF?text=Girl+Dress",
    },
  ];

  const categories = [
    { name: "Shirt", count: 18 },
    { name: "Pants", count: 9 },
    { name: "Baby Oil", count: 5 },
    { name: "Toys", count: 3 },
    { name: "Feeding Products", count: 15 },
  ];

  const sizes = ["S", "M"];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-pink-400">
            ★
          </span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="text-pink-400">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-pink-100">
      <Navbar />
      {/* Header */}
      <div className="relative h-64 bg-gradient-to-r from-pink-200 to-purple-200 overflow-hidden">
        <img
          src="https://babyproducts.jbhtechinnovation.com/assets/images/hero/hero-1.jpg"
          alt="Baby banner"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Shop</h1>
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

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            {/* Popular Products */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                POPULAR PRODUCT
              </h3>
              <div className="space-y-4">
                {popularProducts.map((product) => (
                  <div key={product.id} className="flex items-center space-x-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">
                        {product.name}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-pink-500 font-semibold">
                          ₹{product.salePrice}
                        </span>
                        <span className="text-blue-400 line-through text-sm">
                          ₹{product.originalPrice}
                        </span>
                      </div>
                      <div className="flex">{renderStars(product.rating)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                PRICE
              </h3>
              <div className="relative">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-pink-400 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>₹0</span>
                  <span>₹1670</span>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                CATEGORY
              </h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-700">{category.name}</span>
                    <span className="text-gray-500 text-sm">
                      {category.count.toString().padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                SIZES
              </h3>
              <div className="space-y-2">
                {sizes.map((size, index) => (
                  <div key={index} className="text-gray-700">
                    {size}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Controls */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">Show:</span>
                <div className="relative">
                  <select
                    value={showItems}
                    onChange={(e) => setShowItems(Number(e.target.value))}
                    className="appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8 text-gray-700"
                  >
                    <option value={8}>8</option>
                    <option value={12}>12</option>
                    <option value={16}>16</option>
                    <option value={20}>20</option>
                    <option value={24}>24</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">Short by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8 text-gray-700"
                  >
                    <option>Name Ascending</option>
                    <option>Name Descending</option>
                    <option>Price Low to High</option>
                    <option>Price High to Low</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {products.slice(0, showItems).map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-w-16 aspect-h-12">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {product.originalPrice ? (
                          <>
                            <span className="text-pink-500 font-semibold text-lg">
                              ₹{product.salePrice}
                            </span>
                            <span className="text-red-400 line-through text-sm">
                              ₹{product.originalPrice}
                            </span>
                          </>
                        ) : (
                          <span className="text-pink-500 font-semibold text-lg">
                            ₹{product.price}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex">{renderStars(product.rating)}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-2">
              <button className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full font-medium transition-colors ${
                    currentPage === page
                      ? "bg-pink-400 text-white"
                      : "bg-white text-gray-700 hover:bg-pink-100"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;