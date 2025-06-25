import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Hero1 from "../assets/images/hero/hero-2.webp"; // Adjust the import path as necessary
import Hero2 from "../assets/images/hero/baby.webp";
import Hero3 from "../assets/images/hero/hero.webp";

const banners = [
  {
    id: 1,
    image: Hero2,
    title: "Spring Season",
    subtitle: "Sale For Kids",
    buttonText: "SHOP NOW"
  },
  {
    id: 2,
    image: Hero3,
    title: "New Arrivals",
    subtitle: "Cute & Comfy",
    buttonText: "DISCOVER"
  },
  {
    id: 3,
    image:  Hero1,
    title: "Summer Collection",
    subtitle: "Cool & Comfortable",
    buttonText: "EXPLORE"
  }
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto slide every 5 seconds
  useEffect(() => {
    if (!isHovered) {
      startAutoSlide();
    }
    return () => clearTimeout(timeoutRef.current);
  }, [current, isHovered]);

  const startAutoSlide = () => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
    resetAutoSlide();
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    clearTimeout(timeoutRef.current);
  };

  const goToSlide = (index) => {
    setCurrent(index);
    resetAutoSlide();
  };

  return (
    <section 
      className="relative overflow-hidden bg-pink-50 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides wrapper */}
      <div className="relative overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="w-full flex-shrink-0 relative"
            >
              {/* Background Image */}
              <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
                <img
                  src={banner.image}
                  alt="Banner"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-pink-100/50" />

              {/* Text */}
              <div className="absolute inset-0 flex flex-row mt-45 justify-center items-center px-4 text-center md:items-start md:px-8 md:text-left z-20">
                <div className="max-w-xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 animate-fadeIn">
                    {banner.title}
                  </h1>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fadeIn">
                    {banner.subtitle}
                  </h2>
                  <button className="bg-white text-pink-500 px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-pink-100 transition-colors border border-pink-300 animate-fadeIn">
                    {banner.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2  bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all md:left-4"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2  bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all md:right-4"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 ">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-pink-500 scale-125" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}