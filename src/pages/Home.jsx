import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import CyberBackground from "../components/CyberBackground";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <CyberBackground />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <img
              src={process.env.PUBLIC_URL + "/profile.jpg"}
              alt="Claros C. Orcullo"
              className="relative w-48 h-48 rounded-full shadow-xl mb-8 mx-auto border-4 border-blue-500 object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.h1
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Claros C. Orcullo
          </motion.h1>

          <motion.p
            className="text-xl mb-6 text-gray-800 dark:text-blue-200 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Network & CyberSecurity 
          </motion.p>

          <motion.p
            className="max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Welcome to my portfolio! Explore my certified skills, open-source tools, and cybersecurity projects. 
            Built with passion and Python.
          </motion.p>

          {/* Animated skills */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {["Cybersecurity", "Network Security", "Python", "Penetration Testing"].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-blue-500/20 text-gray-800 dark:text-blue-200 rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-colors cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Action buttons */}
          <motion.div
            className="flex justify-center space-x-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/projects"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 