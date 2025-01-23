"use client";

import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/" className="text-2xl font-bold">
            YourLogo
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/main" className="hover:text-gray-200">
                Main
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-200">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Call to Action Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            href="pages/user/login"
            className="px-6 py-2 bg-orange-500 rounded-md hover:bg-orange-600 text-white"
          >
            Login
          </Link>
          <Link
            href="pages/user/register"
            className="px-6 py-2 bg-orange-500 rounded-md hover:bg-orange-600 text-white"
          >
            Register
          </Link>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
