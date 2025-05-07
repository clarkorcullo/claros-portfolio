import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                  Certifications
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">
                Email: orculloclark@yahoo.com
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                Phone: 09506332965
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="https://github.com/clarkorcullo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
              >
                GitHub
              </a>
              <a
                href="https://www.facebook.com/orculloclark/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
              >
                Facebook
              </a>
              <a
                href="https://www.credly.com/users/clarosorcullo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
              >
                Credly
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Claros C. Orcullo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 