import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLink, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`navbar bg-white text-neutral-content ${
        isScrolled ? "fixed top-0 inset-x-0 z-50  shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="px-5 text-2xl mb-6 mt-6">
          <span className="text-green-500 tracking-tight">
            Mental<span className="text-gray-800 font-mono">Link</span>
            <FaLink className="inline pr-2 md:inline-block text-3xl" />
          </span>
        </div>
        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-green-700 hover:text-green-800 text-3xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="text-base px-4 py-2 font-medium text-gray-700 hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="text-base px-4 py-2 font-medium text-gray-700 hover:text-blue-400"
          >
            About
          </Link>
          <Link
            to="/story"
            onClick={handleLinkClick}
            className="text-base px-4 py-2 font-medium text-gray-700 hover:text-blue-400"
          >
            Our Story
          </Link>
          <Link
            to="/works"
            onClick={handleLinkClick}
            className="text-base px-4 py-2 font-medium text-gray-700 hover:text-blue-400"
          >
            How it Works
          </Link>
          <Link
            to="/signup"
            onClick={handleLinkClick}
            className="bg-blue-500 w-auto inline-block text-white rounded-lg text-base font-medium px-4 py-2 transition duration-300 hover:bg-blue-600"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            onClick={handleLinkClick}
            className="border-2 border-green-500 text-green-500 rounded-lg flex items-center justify-center text-base font-medium px-4 py-2 transition duration-300 hover:bg-green-500 hover:text-white"
          >
            <FaUser className="mr-2" />
            Login
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="container mx-auto px-6 my-4">
          <div className="border-t border-gray-300 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="text-base font-sans text-gray-700 hover:text-gray-800"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={handleLinkClick}
              className="text-base font-sans text-gray-700 hover:text-gray-800"
            >
              About
            </Link>
            <Link
              to="/story"
              onClick={handleLinkClick}
              className="text-base font-sans text-gray-700 hover:text-gray-800"
            >
              Our Story
            </Link>
            <Link
              to="/works"
              onClick={handleLinkClick}
              className="text-base font-sans text-gray-700 hover:text-gray-800"
            >
              How it Works
            </Link>
            <Link
              to="/signup"
              onClick={handleLinkClick}
              className="text-base font-sans text-blue-500 hover:text-blue-500"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              onClick={handleLinkClick}
              className="text-base font-sans text-green-500 hover:text-green-600 flex items-center"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
