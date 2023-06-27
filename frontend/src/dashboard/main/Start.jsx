import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLink, FaBars, FaTimes, FaHome, FaSearch, FaLightbulb, FaBook, FaUsers } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar mb-2 shadow-lg bg-indigo-950 text-neutral-content fixed top-0 inset-x-0 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="px-2 text-2xl mb-6 mt-6">
          <span className="text-sky-500 tracking-tight">
            Mental<span className="text-green-50">Link </span>
            <FaLink className="inline pr-2 md:inline-block text-3xl" />
          </span>
        </div>
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link
            to="/house"
            className="text-base px-4 py-2 font-medium text-green-50"
          >
            <FaHome className="inline pr-1 text-2xl" />
            Home
          </Link>
          <Link
            to="/explore"
            className="text-base px-4 py-2 font-medium text-green-50"
          >
            <FaSearch className="inline pr-1 text-2xl" />
            Explore
          </Link>
          <Link
            to="/journal"
            className="text-base px-4 py-2 font-medium text-green-50"
          >
            <FaBook className="inline pr-1 text-2xl" />
            My Journal
          </Link>
          <Link
            to="/insights"
            className="text-base px-4 py-2 font-medium text-green-50"
          >
            <FaLightbulb className="inline pr-1 text-2xl" />
            Insights
          </Link>
          <Link
            to="/community"
            className="text-base px-4 py-2 font-medium text-green-50"
          >
            <FaUsers className="inline pr-1 text-2xl" />
            Community
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="container mx-auto px-6 my-4">
          <div className="border-t border-gray-300 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-base font-medium text-green-50"
            >
              <FaHome className="inline pr-1 text-2xl" />
              Home
            </Link>
            <Link
              to="/about"
              className="text-base font-medium text-green-50"
            >
              <FaLink className="inline pr-1 text-2xl" />
              About
            </Link>
            <Link
              to="/story"
              className="text-base font-medium text-green-50"
            >
              <FaBook className="inline pr-1 text-2xl" />
              Our Story
            </Link>
            <Link
              to="/works"
              className="text-base font-medium text-green-50"
            >
              <FaLightbulb className="inline pr-1 text-2xl" />
              How it Works
            </Link>
            <Link
              to="/community"
              className="text-base px-4 py-2 font-medium text-green-50"
            >
              <FaUsers className="inline pr-1 text-2xl" />
              Community
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
