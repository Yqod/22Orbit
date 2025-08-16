import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth Scroll Funktion
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100; // Navbar Höhe berücksichtigen
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false); // Mobile Menu schließen
  };

  // Scroll to top Funktion
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", href: "/", type: "home" },
    { label: "Unser Team", href: "team-section", type: "scroll" },
    { label: "Portfolio", href: "portfolio-section", type: "scroll" },
    { label: "Kontakt", href: "/kontakt", type: "route" },
  ];

  const handleClick = (item, e) => {
    if (item.type === "scroll") {
      e.preventDefault();
      
      // Wenn wir nicht auf der Landingpage sind, erst dahin navigieren
      if (location.pathname !== "/") {
        window.location.href = "/#" + item.href;
      } else {
        scrollToSection(item.href);
      }
    } else if (item.type === "home") {
      e.preventDefault();
      
      // Wenn wir bereits auf der Landingpage sind, nur nach oben scrollen
      if (location.pathname === "/") {
        scrollToTop();
      } else {
        // Sonst zur Landingpage navigieren und dann nach oben scrollen
        navigate("/");
        setTimeout(() => scrollToTop(), 100);
      }
    }
  };

  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 fixed top-0 left-0 z-20 bg-[#1d2d44]/80 backdrop-blur-md shadow-lg">
      {/* Branding */}
      <button
        onClick={(e) => handleClick({ type: "home" }, e)}
        className="font-bebas text-2xl sm:text-3xl text-[#f0ebd8] tracking-widest hover:text-[#748cab] transition-colors cursor-pointer"
      >
        22Orbit
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8">
        {navItems.map((item, idx) => (
          <li key={idx}>
            {item.type === "route" ? (
              <Link
                to={item.href}
                className="text-[#f0ebd8] font-bebas text-lg tracking-wide hover:text-[#748cab] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <button
                onClick={(e) => handleClick(item, e)}
                className="text-[#f0ebd8] font-bebas text-lg tracking-wide hover:text-[#748cab] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            )}
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
          {navItems.map((item, idx) => (
            <li key={idx}>
              {item.type === "route" ? (
                <Link
                  to={item.href}
                  className="block px-8 py-3 text-[#f0ebd8] font-bebas text-lg tracking-wide hover:text-[#748cab] hover:bg-[#3e5c76]/20 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={(e) => handleClick(item, e)}
                  className="block w-full text-left px-8 py-3 text-[#f0ebd8] font-bebas text-lg tracking-wide hover:text-[#748cab] hover:bg-[#3e5c76]/20 transition-all duration-200"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
          style={{ top: '100px' }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;