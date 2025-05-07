import { motion } from "framer-motion";
import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Network Vulnerability Scanner",
      description: "Advanced network scanning tool that identifies security vulnerabilities, open ports, and misconfigurations in network infrastructure.",
      technologies: ["Python", "Scapy", "Nmap Integration", "SQLite"],
      github: "https://github.com/yourusername/network-vuln-scanner",
      demo: "https://demo.network-vuln-scanner.com",
      image: "/projects/network-scanner.png",
      features: [
        "Port scanning and service detection",
        "Vulnerability assessment",
        "Custom scan profiles",
        "Report generation"
      ]
    },
    {
      title: "Security Log Analyzer",
      description: "Real-time log analysis tool for detecting security incidents, suspicious activities, and potential breaches in system logs.",
      technologies: ["Python", "Elasticsearch", "Machine Learning", "Docker"],
      github: "https://github.com/yourusername/log-analyzer",
      demo: "https://demo.log-analyzer.com",
      image: "/projects/log-analyzer.png",
      features: [
        "Real-time log monitoring",
        "Anomaly detection",
        "Pattern recognition",
        "Alert system"
      ]
    },
    {
      title: "Password Security Suite",
      description: "Comprehensive password security tool for analyzing, generating, and managing secure passwords with advanced encryption.",
      technologies: ["Python", "Cryptography", "Regex", "SQLite"],
      github: "https://github.com/yourusername/password-suite",
      demo: "https://demo.password-suite.com",
      image: "/projects/password-suite.png",
      features: [
        "Password strength analysis",
        "Secure password generation",
        "Encrypted storage",
        "Policy enforcement"
      ]
    },
    {
      title: "Network Traffic Analyzer",
      description: "Advanced network traffic analysis tool for monitoring, capturing, and analyzing network packets for security threats.",
      technologies: ["Python", "Wireshark Integration", "Pandas", "Matplotlib"],
      github: "https://github.com/yourusername/traffic-analyzer",
      demo: "https://demo.traffic-analyzer.com",
      image: "/projects/traffic-analyzer.png",
      features: [
        "Packet capture and analysis",
        "Traffic visualization",
        "Protocol analysis",
        "Threat detection"
      ]
    },
    {
      title: "Security Policy Generator",
      description: "Automated tool for generating and managing security policies based on industry standards and best practices.",
      technologies: ["Python", "YAML", "Markdown", "Jinja2"],
      github: "https://github.com/yourusername/policy-generator",
      demo: "https://demo.policy-generator.com",
      image: "/projects/policy-generator.png",
      features: [
        "Policy template management",
        "Custom policy generation",
        "Compliance checking",
        "Document export"
      ]
    },
    {
      title: "Incident Response Tool",
      description: "Comprehensive incident response tool for managing and automating security incident handling processes.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
      github: "https://github.com/yourusername/incident-response",
      demo: "https://demo.incident-response.com",
      image: "/projects/incident-response.png",
      features: [
        "Incident tracking",
        "Automated response",
        "Team collaboration",
        "Report generation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Security Projects
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Features:
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Technologies:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 