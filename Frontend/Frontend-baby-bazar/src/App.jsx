 import React from 'react'
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import BabyBazarNavbar from './assets/components/Navbar.jsx'
 import BabyBazarFooter from './assets/components/footer.jsx'
  import BabyBazarHomepage from './assets/components/home.jsx'
  import Blog from './assets/components/Blog.jsx'
  import Navbar from './assets/components/Navbar.jsx'
  import Footer from './assets/components/footer.jsx'
  import Contactus from './assets/components/Contact.jsx'
  import BabyCart from './assets/components/Cart.jsx'
  import ShopPage from './assets/components/Shop.jsx'
  import LoginRegisterPage from './assets/components/login.jsx'
  import WishlistPage from './assets/components/Wishlist.jsx'
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
 
