import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navItems = ["Home", "Facilities", "Gallery" , "Contact", "About"];

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle navigation and scroll to top
  const handleNavigation = () => {
    setIsMobileMenuOpen(false); // Close the mobile menu
    window.scrollTo(0, 0); // Scroll to top
  };

  return (
    <nav className="bg-green-600 text-white shadow-lg fixed top-0 w-full z-20">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}<Link to={'/'}>        <img                 onClick={handleNavigation}
 className="p-0 w-40 h-auto" src={assets.logo} alt="Logo" />
</Link>

        {/* Hamburger Icon for Mobile View */}
        {isMobile && (
          <button
            className="lg:hidden block text-white text-3xl"
            onClick={toggleMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? "×" : "☰"}
          </button>
        )}

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-8">
          {navItems.map((item, index) => (
            <li key={index} className="group relative overflow-hidden">
              <Link
                to={
                  item === "Contact"
                    ? "/contactus"
                    : item === "Facilities"
                    ? "/facilities"
                    : item === "Home"
                    ? "/"
                    : item === "Gallery"
                    ?"/gallery"
                    : item === "About"
                    ? "/about"
                    : "#"
                }
                className="block text-lg font-semibold group-hover:text-yellow-400 transition duration-300"
                onClick={handleNavigation}
              >
                {item.split("").map((letter, i) => (
                  <span
                    key={i}
                    className="inline-block transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300"
                    style={{ transitionDelay: `${i * 75}ms` }}
                  >
                    {letter}
                  </span>
                ))}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-green-600 text-white py-4 z-20`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={
                  item === "Contact"
                    ? "/contactus"
                    : item === "Facilities"
                    ? "/facilities"
                    : item === "Home"
                    ? "/"
                    : item === "Gallery"
                    ?"/gallery"
                    : item === "About"
                    ? "/about"
                    : "#"
                }
                className="block text-lg font-semibold group-hover:text-yellow-400 transition duration-300"
                onClick={handleNavigation} // Close menu and scroll to top
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
