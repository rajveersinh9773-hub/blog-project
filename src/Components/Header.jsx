import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="text-3xl font-bold cursor-pointer">
            MY<span className="text-cyan-500">BLOG</span>
          </div>


          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 font-medium text-slate-700">

              <li className="cursor-pointer hover:text-cyan-500 transition">
                Home
              </li>

              <li className="cursor-pointer hover:text-cyan-500 transition">
                Blogs
              </li>

              <li className="cursor-pointer hover:text-cyan-500 transition">
                Categories
              </li>

              <li className="cursor-pointer hover:text-cyan-500 transition">
                About
              </li>

              <li className="cursor-pointer hover:text-cyan-500 transition">
                Contact
              </li>

            </ul>
          </nav>


          {/* Actions */}
          <div className="flex items-center gap-4">

            <button className="w-11 h-11 rounded-full bg-slate-100 hover:bg-cyan-500 hover:text-white transition flex items-center justify-center">
              <FaSearch className="text-lg" />
            </button>


            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2.5 rounded-xl font-semibold transition hover:scale-105">
              Subscribe
            </button>

          </div>


        </div>
      </div>
    </header>
  );
}   