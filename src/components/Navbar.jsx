import React from "react";

const Navbar = ({ items }) => (
  <nav className="w-full flex items-center justify-between px-8 py-6 fixed top-0 left-0 z-20 bg-[#1d2d44]/80 backdrop-blur-md shadow-lg">
    {/* Branding */}
    <div className="font-bebas text-2xl sm:text-3xl text-[#f0ebd8] tracking-widest">
      22Orbit
    </div>
    {/* Navigation */}
    <ul className="flex gap-8">
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
  </nav>
);

export default Navbar;