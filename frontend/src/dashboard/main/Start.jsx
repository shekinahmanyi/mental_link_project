import React from "react";
import { Link } from "react-router-dom";
import { FaLink, FaHome, FaSearch, FaLightbulb, FaBook, FaUsers } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar mb-2 shadow-lg bg-indigo-950 text-neutral-content fixed top-0 inset-x-0 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="px-2 text-2xl mb-6 mt-6">
          <span className="text-sky-500 tracking-tight">
            Mental<span className="text-green-50 font-mono">Link</span>
            <FaLink className="inline pr-2 md:inline-block text-3xl" />
          </span>
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
      <div className="container mx-auto px-6 md:hidden bg-indigo-950 fixed bottom-0 inset-x-0 z-50">
        <div className="border-t border-gray-300  py-4 flex justify-between">
          <Link to="/" className="flex flex-col items-center justify-center text-base font-medium text-green-50">
            <FaHome className="inline text-2xl" />
          </Link>
          <Link to="/about" className="flex flex-col items-center justify-center text-base font-medium text-green-50">
            <FaLink className="inline text-2xl" />
          </Link>
          <Link to="/story" className="flex flex-col items-center justify-center text-base font-medium text-green-50">
            <FaBook className="inline text-2xl" />
          </Link>
          <Link to="/works" className="flex flex-col items-center justify-center text-base font-medium text-green-50">
            <FaLightbulb className="inline text-2xl" />
          </Link>
          <Link to="/community" className="flex flex-col items-center justify-center text-base font-medium text-green-50">
            <FaUsers className="inline text-2xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
