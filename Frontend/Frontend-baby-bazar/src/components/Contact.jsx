import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './footer.jsx'
import Hero3 from '../assets/images/hero/hero-1.webp';   
function Contactus() {
//   const [count, setCount] = useState(0);

  
  return (
    <div className="bg-red-200 min-h-screen">
        <Navbar />
      {/* Hero Section with Image, Overlay, and Text */}
      <div className="relative h-72 md:h-80 w-full">
        {/* Background Image */}
        <img
          src={Hero3}
          alt="Hero"
          className="h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

        {/* Text on image */}
        <div className="absolute top-1/2 left-0 md:left-9 transform -translate-y-1/2 text-black">
          <h1 className="text-3xl md:text-4xl font-semibold">Contact Us</h1>
           
        </div>
      </div>

      {/* Contact Content */}
      <div className="p-4 md:p-10 space-y-6">
        <h1 className="text-xl font-extrabold">Get in Touch</h1>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left Info */}
          <div className="md:w-1/2 space-y-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste porro iusto
              temporibus voluptatibus tenetur deleniti doloremque animi excepturi deserunt iure?
            </p>
            <div className="space-y-2">
              <div>
                <i className="fa fa-map-marker" /> &nbsp; Badkhal Rd, Sector 29, Faridabad, Haryana 121008
              </div>
              <div>
                <i className="fa fa-phone" /> &nbsp; <a href="tel:‪+917042788393‬">‪+91 7042788393‬</a>
              </div>
              <div>
                <i className="fa fa-globe" /> &nbsp; <a href="mailto:Jbh.webstics@gmail.com">Jbh.webstics@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-xl font-extrabold">Leave a message</h2>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-2 rounded-md bg-white border"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 rounded-md bg-white border"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-2 rounded-md bg-white border"
            ></textarea>
            <button className="bg-black text-white px-4 py-2 rounded-2xl font-semibold hover:bg-gray-800  w-30">
              Send
            </button>
          </div>
        </div>

        {/* Google Map at Bottom */}
        <div className="mt-8">
         
          <iframe
            className="w-full h-64 rounded-md border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.794362831062!2d77.29806295!3d28.4022201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb1e486911f1%3A0x27cfdc9dfd7de52e!2sSector%2029%2C%20Faridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1688482335012!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}



export default Contactus;
