import { motion } from "framer-motion";
import React from "react";

export default function Certifications() {
  const certifications = [
    {
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2023",
      credentialId: "COMP123456",
      image: "/certifications/security-plus.png",
      description: "Validates baseline skills for IT security professionals. Covers network security, compliance, operational security, threats and vulnerabilities, application security, and cryptography.",
      skills: [
        "Network Security",
        "Compliance",
        "Operational Security",
        "Threats & Vulnerabilities",
        "Application Security",
        "Cryptography"
      ]
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2023",
      credentialId: "CEH123456",
      image: "/certifications/ceh.png",
      description: "Professional certification that validates skills in ethical hacking and penetration testing. Covers various hacking techniques, tools, and methodologies used by ethical hackers.",
      skills: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Network Security",
        "Web Application Security",
        "System Hacking",
        "Social Engineering"
      ]
    },
    {
      title: "Cisco Certified Network Associate (CCNA) Security",
      issuer: "Cisco",
      date: "2023",
      credentialId: "CCNA-SEC123456",
      image: "/certifications/ccna-security.png",
      description: "Validates associate-level knowledge and skills required to secure Cisco networks. Focuses on security infrastructure, threat control, and secure access.",
      skills: [
        "Network Security",
        "Cisco Security Solutions",
        "VPN Technologies",
        "Firewall Configuration",
        "Intrusion Prevention",
        "Secure Access"
      ]
    },
    {
      title: "Certified Information Systems Security Professional (CISSP)",
      issuer: "ISC²",
      date: "2023",
      credentialId: "CISSP123456",
      image: "/certifications/cissp.png",
      description: "Advanced-level certification for information security professionals. Covers security and risk management, asset security, security architecture, and more.",
      skills: [
        "Security & Risk Management",
        "Asset Security",
        "Security Architecture",
        "Communication & Network Security",
        "Identity & Access Management",
        "Security Assessment"
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
            Professional Certifications
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-16 h-16 object-contain mr-4"
                    />
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        {cert.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {cert.description}
                  </p>
                  
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Skills:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Credential ID: {cert.credentialId}
                    </span>
                    <a
                      href={`https://verify.credential.net/${cert.credentialId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Verify Certificate
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