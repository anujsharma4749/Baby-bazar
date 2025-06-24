import React, { useState } from 'react';
import { Facebook, Twitter, Mail, MapPin, Linkedin } from 'lucide-react';
import Navbar from './Navbar.jsx';
import Footer from './footer.jsx';

export default function LoginRegisterPage() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', loginData);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted:', registerData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200">
        <Navbar />
      {/* Header Banner Section */}
      <div className="relative h-32 md:h-40 lg:h-48 overflow-hidden">
        {/* Banner Background Image */}
        <div className="absolute inset-0">
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-pink-100  ">
            <img 
            src="https://babyproducts.jbhtechinnovation.com/assets/images/hero/hero-1.jpg" 
            alt="Baby banner background" 
            className="w-full h-full object-cover opacity-50"
          />
          </div>
        </div>
        
        {/* Title */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 h-64 flex items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 drop-shadow-md">Login & Register</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Login Section */}
          <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Login</h2>
            
            <div className="space-y-4 md:space-y-6">
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username or Email"
                  value={loginData.username}
                  onChange={handleLoginChange}
                  className="w-full px-6 py-4 rounded-full border border-pink-300 bg-pink-50 bg-opacity-80 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="w-full px-6 py-4 rounded-full border border-pink-300 bg-pink-50 bg-opacity-80 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                />
              </div>
              
              <button
                onClick={handleLoginSubmit}
                className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
              >
                LOGIN
              </button>
            </div>
            
            <div className="mt-6 md:mt-8">
              <p className="text-gray-700 text-sm md:text-base mb-4">You Can Also Login With...</p>
              <div className="flex space-x-3">
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-pink-100 transition-colors">
                  <Facebook size={18} className="text-gray-600" />
                </button>
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-pink-100 transition-colors">
                  <Twitter size={18} className="text-gray-600" />
                </button>
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-pink-100 transition-colors">
                  <Mail size={18} className="text-gray-600" />
                </button>
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-pink-100 transition-colors">
                  <MapPin size={18} className="text-gray-600" />
                </button>
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-pink-100 transition-colors">
                  <Linkedin size={18} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Register Section */}
          <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Register</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={registerData.name}
                  onChange={handleRegisterChange}
                  className="w-full px-6 py-4 rounded-full border border-pink-300 bg-pink-50 bg-opacity-80 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                />
                <input
                  type="text"
                  name="username"
                  placeholder="User Name"
                  value={registerData.username}
                  onChange={handleRegisterChange}
                  className="w-full px-6 py-4 rounded-full border border-pink-300 bg-pink-50 bg-opacity-80 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  className="w-full px-6 py-4 rounded-full border border-pink-300 bg-pink-50 bg-opacity-80 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  className="w-full px-6 py-4 rounded-full border border-pink-300 bg-pink-50 bg-opacity-80 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="flex justify-center">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={registerData.confirmPassword}
                  onChange={handleRegisterChange}
                  className="w-full md:w-1/2 px-6 py-4 rounded-full border border-pink-300 bg-pink-50 bg-opacity-80 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleRegisterSubmit}
                  className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
                >
                  REGISTER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}