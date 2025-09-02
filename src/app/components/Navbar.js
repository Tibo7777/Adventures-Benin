"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

        {/* Mobile Hamburger (left on mobile) */}
        <button
          className="md:hidden absolute left-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Logo centered on mobile */}
        <a href="/" className="flex items-center mx-auto md:mx-0">
          <img src="/images/logo.png" alt="Benin Adventures Logo" className="h-10 mr-3" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-green-600 ml-auto">
          <li><a href="/" className="hover:text-red-600 transition">Home</a></li>
          <li><a href="/about" className="hover:text-red-600 transition">About</a></li>
          <li><a href="/destinations" className="hover:text-red-600 transition">Destinations</a></li>
          <li><a href="/blog" className="hover:text-red-600 transition">Blog</a></li>
          <li><a href="/contact" className="hover:text-red-600 transition">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-3 text-green-600 mt-2">
          <li><a href="/" className="hover:text-red-600 block">Home</a></li>
          <li><a href="/about" className="hover:text-red-600 block">About</a></li>
          <li><a href="/destinations" className="hover:text-red-600 block">Destinations</a></li>
          <li><a href="/blog" className="hover:text-red-600 block">Blog</a></li>
          <li><a href="/contact" className="hover:text-red-600 block">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
