import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';

// Logo Component
const Logo = () => (
  <div className="text-4xl font-bold flex items-center">
    <span className="text-[#2E7D32]">Gen</span>
    <span className="text-[#2E7D32]">Z</span>
    <span className="text-[#2E7D32]">sport</span>
  </div>
);

// NavLink Component
const NavLink = ({ href, label, active = false }) => (
  <a
    href={href}
    className={`text-base font-medium transition-colors duration-300 hover:text-[#2E7D32] ${
      active ? 'text-[#2E7D32]' : 'text-gray-700'
    }`}
  >
    {label}
  </a>
);

// Main Header Component
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Desktop Layout */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/" label="Home" active />
          <NavLink href="#" label="Shop" />
          <NavLink href="/Categories" label="Categories" />
          <NavLink href="/about" label="About" />
          <NavLink href="/Contact" label="Contact" />
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
            <User size={20} className="text-gray-700" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 relative transition-colors duration-300">
            <ShoppingCart size={20} className="text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-[#2E7D32] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink href="#" label="Home" active />
            <NavLink href="#" label="Shop" />
            <NavLink href="#" label="Categories" />
            <NavLink href="#" label="About" />
            <NavLink href="#" label="Contact" />

            {/* Mobile Account & Cart */}
            <div className="flex items-center space-x-4 pt-2 border-t">
              <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <User size={20} className="text-gray-700" />
                <span>Account</span>
              </button>
              <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 relative transition-colors duration-300">
                <ShoppingCart size={20} className="text-gray-700" />
                <span>Cart</span>
                <span className="absolute -top-1 -right-1 bg-[#2E7D32] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;