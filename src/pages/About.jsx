import { motion } from "framer-motion";
import React, { useState } from "react";
import PDFViewer from "../components/PDFViewer";

export default function About() {
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  const skills = {
    "Cybersecurity": ["Network Security", "Penetration Testing", "Security Analysis", "Incident Response"],
    "Programming": ["Python", "JavaScript", "Bash Scripting", "SQL"],
    "Tools": ["Wireshark", "Metasploit", "Nmap", "Burp Suite"],
    "Certifications": [
      "AWS Academy Cloud Foundations",
      "Cisco Introduction to Cybersecurity"
    ]
  };

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      major: "Network & Cybersecurity",
      school: "Mapua Malayan Digital College under Mapua Malayan Colleges Laguna",
      year: "2022 - 2026",
      link: "https://www.mmdc.mcl.edu.ph/"
    },
    {
      degree: "Vocational Course in Computer Secretarial",
      school: "Holy Child Colleges of Butuan",
      year: "2006 - 2008",
      link: "https://hccb.edu.ph/",
      credential: true
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
            About Me
          </h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Bio
            </h2>
            <div className="space-y-6 text-justify">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in technology began during my six-year tenure at McDonald's Saudi Arabia (2013-2019), where I developed a passion for troubleshooting and maintaining various technological equipment. This hands-on experience with networking and technical systems in a fast-paced international environment sparked my interest in information technology and cybersecurity.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently pursuing a Bachelor of Science in Information Technology with a major in Network & Cybersecurity, I am a dedicated cybersecurity professional with a strong foundation in network security and Python development. My focus is on creating secure systems and developing tools that help organizations protect their digital assets. With hands-on experience in penetration testing and security analysis, I strive to stay at the forefront of cybersecurity innovation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Skills</h2>
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="mb-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Education</h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  {edu.major && <p className="text-gray-600 dark:text-gray-300">{edu.major}</p>}
                  <a 
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {edu.school}
                  </a>
                  <p className="text-gray-500 dark:text-gray-400">{edu.year}</p>
                  {edu.credential && (
                    <button
                      onClick={() => setIsPDFOpen(true)}
                      className="mt-2 text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                    >
                      View Credential
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <PDFViewer
        isOpen={isPDFOpen}
        onClose={() => setIsPDFOpen(false)}
        pdfUrl={`${process.env.PUBLIC_URL}/certifications/hccb-credential.pdf`}
      />
    </div>
  );
} 