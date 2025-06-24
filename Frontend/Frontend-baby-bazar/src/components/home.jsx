import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  StarHalf,
  Truck,
  CreditCard,
  Shield,
  Heart,
  ShoppingBag,
  Plus,
} from "lucide-react";
import Navbar from "./Navbar.jsx";
import Footer from "./footer.jsx";
export default function BabyBazarHomepage() {
  const [activeTab, setActiveTab] = useState("New");
  //   const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProducts = [
    {
      id: 1,
      name: "Kitchen Set",
      price: "₹500",
      image: "/api/placeholder/300/300",
      rating: 4,
      category: "New",
    },
    {
      id: 2,
      name: "Baby Feeding Device",
      price: "₹799",
      image: "/api/placeholder/300/300",
      rating: 5,
      category: "Popular",
    },
    {
      id: 3,
      name: "Kid Toys",
      price: "₹799",
      image: "/api/placeholder/300/300",
      rating: 4,
      category: "New",
    },
    {
      id: 4,
      name: "Mamy Poko Pants",
      price: "₹300",
      image: "/api/placeholder/300/300",
      rating: 4,
      category: "Sale",
    },
    {
      id: 5,
      name: "Soft Plush Teddy",
      price: "₹450",
      image: "/api/placeholder/300/300",
      rating: 5,
      category: "Popular",
    },
    {
      id: 6,
      name: "Baby Shoes",
      price: "₹600",
      image: "/api/placeholder/300/300",
      rating: 3.5,
      category: "Sale",
    },
    {
      id: 7,
      name: "Wooden Puzzle",
      price: "₹350",
      image: "/api/placeholder/300/300",
      rating: 4,
      category: "New",
    },
    {
      id: 8,
      name: "Baby Shampoo",
      price: "₹250",
      image: "/api/placeholder/300/300",
      rating: 4.5,
      category: "Popular",
    },
    {
      id: 9,
      name: "Kitchen Set",
      price: "₹500",
      image: "/api/placeholder/300/300",
      rating: 4,
      category: "New",
    },
    {
      id: 10,
      name: "Baby Shampoo",
      price: "₹250",
      image: "/api/placeholder/300/300",
      rating: 4.5,
      category: "Popular",
    },
    {
      id: 11,
      name: "Baby Shoes",
      price: "₹600",
      image: "/api/placeholder/300/300",
      rating: 3.5,
      category: "Sale",
    },
    {
      id: 12,
      name: "Baby Shoes",
      price: "₹600",
      image: "/api/placeholder/300/300",
      rating: 3.5,
      category: "Sale",
    },
  ];

  const bestSellers = [
    {
      id: 1,
      name: "Mamy Poko Pants",
      price: "₹300",
      image: "/api/placeholder/300/300",
      rating: 4,
    },
    {
      id: 2,
      name: "Water Ducks",
      price: "₹800",
      image: "/api/placeholder/300/300",
      rating: 5,
    },
    {
      id: 3,
      name: "Baby Feeding",
      price: "₹1000",
      image: "/api/placeholder/300/300",
      rating: 4,
    },
    {
      id: 4,
      name: "Kids Shoe",
      price: "₹500",
      image: "/api/placeholder/300/300",
      rating: 4,
      sizes: ["S", "M", "L", "XL"],
      colors: ["pink", "blue", "green", "orange"],
    },
  ];

  const categories = [
    { name: "Baby Oil", image: "/api/placeholder/200/200" },
    { name: "Feeding Products", image: "/api/placeholder/200/200" },
    { name: "Diapers", image: "/api/placeholder/200/200" },
    { name: "Toys", image: "/api/placeholder/200/200" },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-pink-400 text-pink-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half" className="w-4 h-4 fill-pink-400 text-pink-400" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  const filteredProducts = featuredProducts.filter((product) =>
    activeTab === "New"
      ? product.category === "New"
      : activeTab === "Popular"
      ? product.category === "Popular"
      : activeTab === "Sale"
      ? product.category === "Sale"
      : true
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Navbar />
      <section className="relative bg-gradient-to-r from-white to-pink-50 min-h-[500px] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full flex items-center relative">
          {/* Left arrow */}
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pink-200 hover:bg-pink-300 p-3 rounded-full ">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Text Content */}
          <div className="flex-1 max-w-md ">
            <h1 className="text-5xl font-bold text-gray-900 mb-2">
              Spring Season
            </h1>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Sale For <span className="text-blue-500">Kids</span>
            </h2>
            <button className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors border border-pink-200">
              SHOP NOW
            </button>
          </div>

          {/* Banner Image */}
          <div className="flex-1 relative h-full">
            <img
              src="https://babyproducts.jbhtechinnovation.com/assets/images/hero/baby.webp"
              alt="Child playing with toys"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right arrow */}
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pink-200 hover:bg-pink-300 p-3 rounded-full ">
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-pink-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-white rounded-lg p-6 mb-4 group-hover:shadow-lg transition-shadow">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-32 h-32 object-cover mx-auto rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-pink-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Feature Products
          </h2>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-8">
              {["New", "Popular", "Sale"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xl font-semibold pb-2 ${
                    activeTab === tab
                      ? "text-pink-500 border-b-2 border-pink-500"
                      : "text-gray-700 hover:text-pink-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-pink-50">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    {renderStars(product.rating)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-pink-500">
                      {product.price}
                    </span>
                    <button className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="py-16 bg-pink-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* New Season Banner */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img
                  src="/api/placeholder/600/300"
                  alt="New Season Sale"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">New Season</h3>
                    <h4 className="text-xl mb-2">New Sale</h4>
                    <h4 className="text-xl font-bold mb-4">GET 30% OFF</h4>
                    <button className="bg-transparent border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition-colors">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* BodyCare Products Banner */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img
                  src="/api/placeholder/600/300"
                  alt="BodyCare Products"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
                  <div className="p-8 text-white">
                    <h3 className="text-xl mb-2">In All BodyCare Products</h3>
                    <h4 className="text-2xl font-bold mb-4">Get 30% OFF</h4>
                    <button className="bg-transparent border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition-colors">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 bg-pink-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Best Seller's
          </h2>

          <div className="relative">
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-pink-400 hover:bg-pink-500 text-white p-3 rounded-full z-10">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {bestSellers.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    {product.name === "Kids Shoe" && (
                      <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md">
                        <button className="bg-pink-500 text-white px-4 py-2 rounded mb-2 text-sm">
                          ADD TO CART
                        </button>
                        <button className="text-pink-500 text-sm block">
                          ADD TO WISHLIST
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-3">
                      {renderStars(product.rating)}
                    </div>
                    <div className="text-2xl font-bold text-pink-500 mb-4">
                      {product.price}
                    </div>

                    {product.sizes && (
                      <div className="mb-3">
                        <div className="text-sm text-gray-600 mb-2">
                          Size: {product.sizes.join(" ")}
                        </div>
                        <div className="text-sm text-gray-600">Color:</div>
                        <div className="flex space-x-2 mt-1">
                          {product.colors.map((color, index) => (
                            <div
                              key={index}
                              className={`w-4 h-4 rounded-full border-2 border-gray-300 bg-${color}-400`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-pink-400 hover:bg-pink-500 text-white p-3 rounded-full z-10">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Smile Banner */}
      <section className="py-16 bg-pink-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-pink-200 to-blue-200 rounded-lg overflow-hidden">
            <div className="flex items-center h-100">
              <div className="flex-1 p-12">
                <h2 className="text-4xl font-bold text-pink-600 mb-2">
                  Your Baby's Smile,
                </h2>
                <h3 className="text-4xl font-bold text-pink-600">
                  Our Delight.
                </h3>
              </div>
              <div className="flex-1">
                <img
                  src="/api/placeholder/600/300"
                  alt="Happy child with sunglasses"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-pink-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-pink-200 rounded-lg p-8 text-center">
              <Truck className="w-16 h-16 mx-auto mb-4 text-gray-700" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Free Shipping
              </h3>
              <p className="text-gray-700">Start from ₹200</p>
            </div>

            <div className="bg-pink-200 rounded-lg p-8 text-center">
              <CreditCard className="w-16 h-16 mx-auto mb-4 text-gray-700" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Money Back Guarantee
              </h3>
              <p className="text-gray-700">Back within 25 days</p>
            </div>

            <div className="bg-pink-200 rounded-lg p-8 text-center">
              <Shield className="w-16 h-16 mx-auto mb-4 text-gray-700" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Secure Payment
              </h3>
              <p className="text-gray-700">Payment Security</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
