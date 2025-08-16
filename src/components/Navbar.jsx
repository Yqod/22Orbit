import React, { useState } from "react";

const Navbar = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 fixed top-0 left-0 z-20 bg-[#1d2d44]/80 backdrop-blur-md shadow-lg">
      {/* Branding */}
      <div className="font-bebas text-2xl sm:text-3xl text-[#f0ebd8] tracking-widest">
        22Orbit
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8">
        {items.map((item, idx) => (
          <li key={idx}>
            <a
              href={item.href}
              className="text-[#f0ebd8] font-bebas text-lg tracking-wide hover:text-[#748cab] transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1 w-6 h-6 justify-center"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`h-0.5 bg-[#f0ebd8] transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-1.5' : 'w-6'
          }`}
        ></span>
        <span
          className={`h-0.5 bg-[#f0ebd8] transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : 'w-6'
          }`}
        ></span>
        <span
          className={`h-0.5 bg-[#f0ebd8] transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'w-6'
          }`}
        ></span>
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-[#1d2d44]/95 backdrop-blur-md border-t border-[#748cab]/20 md:hidden transition-all duration-300 ${
          isMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <ul className="py-4">
          {items.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className="block px-8 py-3 text-[#f0ebd8] font-bebas text-lg tracking-wide hover:text-[#748cab] hover:bg-[#3e5c76]/20 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
          style={{ top: '100px' }} // Startet unter der Navbar
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;