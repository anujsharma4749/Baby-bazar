import React  from 'react';
import { Search, X, Heart, ShoppingCart, Facebook, Twitter, MessageCircle, Linkedin, Plus } from 'lucide-react';
import Footer from './footer.jsx';
import Navbar from './Navbar.jsx';
import bannerImage from '../assets/images/banner.jpg';  
import Author1 from '../assets/images/blog/author-1.webp';  
import Author2 from '../assets/images/blog/author-2.webp'; 
import Author3 from '../assets/images/blog/author-3.webp';
import BlogPost from '../assets/images/blog/single-blog.webp';  
import Author from '../assets/images/blog/blog-author-1.webp';
import BlogPost2 from '../assets/images/blog/blog-author-2.webp';

const Blog = () => {

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4CCCC' }}>
 <Navbar />
      {/* Page Banner */}
      <div className="relative py-20" style={{ backgroundColor: '#F4CCCC' }}>
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden h-70">
          <img
            src={bannerImage}
            alt="Banner"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative ">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              A Small Smile for a Beautiful Life
            </h1>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-16" style={{ backgroundColor: '#F4CCCC' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Sidebar - Now on the left */}
            <div className="w-full lg:w-1/4 px-4 mb-8">
              {/* Archive Widget */}
              <div className="rounded-lg shadow-lg p-6 mb-6" style={{ backgroundColor: '#F4CCCC' }}>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Archive</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-pink-600">July 2024</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-pink-600">June 2024</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-pink-600">May 2024</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-pink-600">April 2024</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-pink-600">March 2024</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-pink-600">February 2024</a></li>
                </ul>
              </div>

              {/* Popular Blog Widget */}
              <div className="rounded-lg shadow-lg p-6" style={{ backgroundColor: '#F4CCCC' }}>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Popular Blog</h4>
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <img
                      src={Author1}
                      alt="Blog Post"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <a href="#" className="text-sm font-medium text-gray-800 hover:text-pink-600 line-clamp-2">
                        Latest and new Trends for baby fashion
                      </a>
                      <span className="text-xs text-gray-500">25 June</span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <img
                      src={Author2}
                      alt="Blog Post"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <a href="#" className="text-sm font-medium text-gray-800 hover:text-pink-600 line-clamp-2">
                        New Collection New Trend all New Style
                      </a>
                      <span className="text-xs text-gray-500">25 June</span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <img
                      src={Author3}
                      alt="Blog Post"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <a href="#" className="text-sm font-medium text-gray-800 hover:text-pink-600 line-clamp-2">
                        Latest and new Trends for baby fashion
                      </a>
                      <span className="text-xs text-gray-500">25 June</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content - Now on the right */}
            <div className="w-full lg:w-3/4 px-4 mb-8">
              {/* Single Blog Post */}
              <article className="rounded-lg shadow-lg overflow-hidden mb-8" style={{ backgroundColor: '#F4CCCC' }}>
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-2 rounded-lg text-center">
                    <div className="text-sm">June</div>
                    <div className="text-2xl font-bold">25</div>
                  </div>
                  <img
                    src= {BlogPost}
                    alt="Blog Post"
                    className="w-full h-100 object-cover"
                  />
                </div>

                <div className="p-6">
                  {/* Meta Information */}
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <img
                        src={Author}
                        alt="Author"
                        className="w-8 h-8 rounded-full"
                      />
                      <span>Tripathi</span>
                    </div>
                    <span>25 Likes</span>
                    <span>05 Views</span>
                  </div>

                  {/* Content */}
                  <div className="prose max-w-none">
                    <p className="text-gray-700 mb-4">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere beatae minus voluptates fugiat velit tempora fuga veniam vel!
                    </p>
                    <p className="text-gray-700 mb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, soluta? Labore nobis facilis nihil voluptas ab officia accusamus fugit cum?
                    </p>

                    <blockquote className="border-l-4 border-pink-500 pl-4 py-2 my-6 italic text-gray-700" style={{ backgroundColor: 'white' }}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ex quae ea modi aperiam, explicabo est accusantium adipisci accusamus non!
                    </blockquote>

                    <p className="text-gray-700 mb-6">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, minus excepturi quod esse dolore suscipit est consequatur magni. Eos, eveniet?
                    </p>
                  </div>

                  {/* Blog Footer */}
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h4 className="font-semibold text-gray-800">Share:</h4>
                        <div className="flex space-x-2">
                          <a href="#" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                            <Facebook size={16} />
                          </a>
                          <a href="#" className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500">
                            <Twitter size={16} />
                          </a>
                          <a href="#" className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700">
                            <MessageCircle size={16} />
                          </a>
                          <a href="#" className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800">
                            <Linkedin size={16} />
                          </a>
                          <a href="#" className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                            <Plus size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Comments Section */}
              <div className="rounded-lg shadow-lg p-6" style={{ backgroundColor: '#F4CCCC' }}>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">3 Comments</h3>

                {/* Comment List */}
                <div className="space-y-6 mb-8">
                  {/* Comment 1 */}
                  <div className="border-b pb-6">
                    <div className="flex space-x-4">
                      <img
                        src={BlogPost2}
                        alt="Frank Warren"
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">Frank Warren</h4>
                        <p className="text-sm text-gray-600 mb-2">29/06/2024 - <a href="#" className="text-pink-600 hover:underline">reply</a></p>
                        <p className="text-gray-700">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi ut labore et dolo magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                      </div>
                    </div>

                    {/* Nested Comment */}
                    <div className="ml-16 mt-4 pt-4 border-t">
                      <div className="flex space-x-4">
                        <img
                          src={Author1}
                          alt="Ronald Black"
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">Ronald Black</h4>
                          <p className="text-sm text-gray-600 mb-2">29/06/2024 - <a href="#" className="text-pink-600 hover:underline">reply</a></p>
                          <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi ut labore et dolo magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comment 2 */}
                  <div>
                    <div className="flex space-x-4">
                      <img
                        src={BlogPost2}
                        alt="Beverly Cook"
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">Beverly Cook</h4>
                        <p className="text-sm text-gray-600 mb-2">29/06/2024 - <a href="#" className="text-pink-600 hover:underline">reply</a></p>
                        <p className="text-gray-700">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi ut labore et dolo magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comment Form */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Leave a Comment</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Name"
                        className="bg-white bw-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className=" bg-white w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className=" bg-white w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
