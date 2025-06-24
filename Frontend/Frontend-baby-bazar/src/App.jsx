 import React from 'react'
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import BabyBazarNavbar from './components/Navbar.jsx'
 import BabyBazarFooter from './components/footer.jsx'
  import BabyBazarHomepage from './components/home'
  import Blog from './components/Blog.jsx'
  import Navbar from './/components/Navbar.jsx'
  import Footer from './components/footer.jsx'
  import Contactus from './components/Contact'
  import BabyCart from './components/Cart'
  import ShopPage from './components/Shop'
  import LoginRegisterPage from './components/login'
  import WishlistPage from './components/Wishlist'
 export default function App() {
   return (
    <Router>
      <Routes>
        <Route path="/" element={<BabyBazarHomepage/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/cart" element={<BabyCart />} />
        <Route path="/login" element={<LoginRegisterPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </Router>
   )
 }
 
