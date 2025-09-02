"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSnapchatGhost,
  FaTiktok
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Discover Africa</h2>
          <p className="text-sm">
            Connecting the world with the beauty of Africa through curated travel
            experiences, cultural tours, safaris, and unforgettable memories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/destinations" className="hover:text-white transition">Destinations</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:info@adventuresbenin.bj" className="hover:text-white transition">info@adventuresbenin.bj</a></li>
            <li>Phone: <a href="tel:+2290154419781" className="hover:text-white transition">+229 0154419781</a></li>
            <li>Location: Cotonou, Benin</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="transition hover:text-[#1877F2]">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="transition hover:text-[#E4405F]">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="X" className="transition hover:text-[#1DA1F2]">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="transition hover:text-[#FF0000]">
              <FaYoutube size={20} />
            </a>
            <a href="#" aria-label="TikTok" className="transition hover:text-black">
              <FaTiktok size={20} />
            </a>
            <a href="#" aria-label="Snapchat" className="transition hover:text-[#FFFC00]">
              <FaSnapchatGhost size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-white">
        © {new Date().getFullYear()} Discover Africa. All rights reserved.
      </div>
    </footer>
  );
}
