import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    // Check if dark mode was previously enabled
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    // Update localStorage when dark mode changes
    localStorage.setItem('darkMode', isDark);
    // Toggle dark class on document
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          Claros
        </Link>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors">
              About
            </Link>
            <Link to="/projects" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors">
              Projects
            </Link>
            <Link to="/certifications" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors">
              Certifications
            </Link>
            <Link to="/resume" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors">
              Resume
            </Link>
            <Link to="/contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors">
              Contact
            </Link>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {isDark ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
} 