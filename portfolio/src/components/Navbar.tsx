"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 sticky top-0 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Ilija Stojev</div>

        {/* Hamburger Icon */}
        <button
          className="text-gray-300 hover:text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <RxHamburgerMenu size={24} />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#about" className="text-gray-300 hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-300 hover:text-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-2">
          <li>
            <a href="#about" className="block text-gray-300 hover:text-white">
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block text-gray-300 hover:text-white"
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="block text-gray-300 hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
