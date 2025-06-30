import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Layout, QuestionMarkCircle } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold text-gray-800 flex items-center">
          <Layout className="mr-2" size={30} />
          Stop Slouching
        </Link>
        <div className="flex items-center">
          <Link to="/" className="text-gray-600 hover:text-gray-800 px-3">
            Home
          </Link>
          <Link to="/products" className="text-gray-600 hover:text-gray-800 px-3">
            Products
          </Link>
          <a href="/#faq" className="text-gray-600 hover:text-gray-800 px-3 flex items-center">
            FAQs
          </a>
          <Link to="/cart" className="text-gray-600 hover:text-gray-800 flex items-center">
            <ShoppingCart className="mr-1" size={20} />
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
