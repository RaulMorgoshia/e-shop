'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Authentication checking logic
  useEffect(() => {
    const updateAuthStatus = () => {
      setIsAuthenticated(!!localStorage.getItem('authToken'));
    };

    updateAuthStatus(); // Check on mount
    window.addEventListener('authChange', updateAuthStatus); // Listen for auth changes

    return () => {
      window.removeEventListener('authChange', updateAuthStatus); // Cleanup
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    window.dispatchEvent(new Event('authChange')); // Notify other components
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          YourLogo
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            {['/', '/main', '/about', '/contact'].map((path, index) => (
              <li key={index}>
                <Link href={path} className="hover:text-gray-200">
                  {['მთავარი', 'მთავარი გვერდი', 'ჩვენს შესახებ', 'კონტაქტი'][index]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-500 rounded-md hover:bg-red-600"
            >
              გამოსვლა
            </button>
          ) : (
            <>
              {['/pages/user/login', '/pages/user/register'].map((path, index) => (
                <Link
                  key={index}
                  href={path}
                  className="px-6 py-2 bg-orange-500 rounded-md hover:bg-orange-600"
                >
                  {['ავტორიზაცია', 'რეგისტრაცია'][index]}
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
