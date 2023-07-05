import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaLink,
  FaHome,
  FaSignal,
  FaLightbulb,
  FaBook,
  FaUsers,
  FaCog,
} from "react-icons/fa";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar mb-2 shadow-lg bg-white text-neutral-content fixed top-0 inset-x-0 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="px-2 text-2xl mb-6 mt-6">
          <span className="text-green-500 tracking-tight">
            Mental<span className="text-gray-800 font-mono">Link</span>
            <FaLink className="inline pr-2 md:inline-block text-3xl" />
          </span>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link
            to="/dashboard"
            className={`text-base px-4 py-2 font-medium ${
              location.pathname === "/dashboard"
                ? "text-blue-500"
                : `text-gray-500 hover:text-blue-500`
            }`}
          >
            <FaHome className="inline pr-1 text-2xl" />
            Home
          </Link>
          <Link
            to="/dashboard/explore"
            className={`text-base px-4 py-2 font-medium ${
              location.pathname === "/dashboard/explore"
                ? "text-blue-500"
                : `text-gray-500 hover:text-blue-500`
            }`}
          >
            <FaSignal className="inline pr-1 text-2xl" />
            Explore
          </Link>
          <Link
            to="/dashboard/journal"
            className={`text-base px-4 py-2 font-medium ${
              location.pathname === "/dashboard/journal"
                ? "text-blue-500"
                : `text-gray-500 hover:text-blue-500`
            }`}
          >
            <FaBook className="inline pr-1 text-2xl" />
            My Journal
          </Link>
          <Link
            to="/dashboard/insights"
            className={`text-base px-4 py-2 font-medium ${
              location.pathname === "/dashboard/insights"
                ? "text-blue-500"
                : `text-gray-500 hover:text-blue-500`
            }`}
          >
            <FaLightbulb className="inline pr-1 text-2xl" />
            Insights
          </Link>
          <Link
            to="/dashboard/community"
            className={`text-base px-4 py-2 font-medium ${
              location.pathname === "/dashboard/community"
                ? "text-blue-500"
                : `text-gray-500 hover:text-blue-500`
            }`}
          >
            <FaUsers className="inline pr-1 text-2xl" />
            Community
          </Link>
        </div>
        <Link
          to="/dashboard/settings"
          className={`text-base px-4 py-2 font-medium ${
            location.pathname === "/dashboard/settings"
              ? "text-blue-500"
              : `text-gray-500 hover:text-blue-500`
          }`}
        >
          <FaCog className="inline pr-1 text-2xl" />
        </Link>
      </div>
      <div className="container mx-auto px-6 md:hidden bg-white fixed bottom-0 inset-x-0 z-50">
        <div className="py-4 flex justify-between">
          <Link
            to="/dashboard"
            className={`flex flex-col items-center justify-center text-base font-medium ${
              location.pathname === "/dashboard"
                ? "text-blue-500"
                : `text-gray-500 hover:text-blue-500`
            }`}
          >
            <FaHome className="inline text-2xl" />
          </Link>
          <Link
            to="/dashboard/explore"
            className={`flex flex-col items-center justify-center text-base font-medium ${
              location.pathname === "/dashboard/explore"
                ? "text-blue-500"
                : `text-gray-500 hover:text-blue-500`
            }`}
          >
            <FaSignal className="inline text-2xl" />
          </Link>
          <Link
            to="/dashboard/journal"
            className={`flex flex-col items-center justify-center text-base font-medium ${
              location.pathname === "/dashboard/journal"
                ? "text-blue-500"
                : `text-gray-500 hover:text-blue-500`
            }`}
          >
            <FaBook className="inline text-2xl" />
          </Link>
          <Link
            to="/dashboard/insights"
            className={`flex flex-col items-center justify-center text-base font-medium ${
              location.pathname === "/dashboard/insights"
                ? "text-blue-500"
                : `text-gray-500 hover:text-blue-500`
            }`}
          >
            <FaLightbulb className="inline text-2xl" />
          </Link>
          <Link
            to="/dashboard/community"
            className={`flex flex-col items-center justify-center text-base font-medium ${
              location.pathname === "/dashboard/community"
                ? "text-blue-500"
                : `text-gray-500 hover:text-blue-500`
            }`}
          >
            <FaUsers className="inline text-2xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
