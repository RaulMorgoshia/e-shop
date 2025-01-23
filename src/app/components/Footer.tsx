import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <div className="mt-4">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="/privacy" className="text-gray-400 hover:text-gray-200">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="text-gray-400 hover:text-gray-200">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-gray-200">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
