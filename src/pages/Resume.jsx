import { motion } from "framer-motion";
import React from "react";
import SocialLinks from "../components/SocialLinks";

export default function Resume() {
  const skills = {
    "Security Tools": [
      "Wireshark",
      "Nmap",
      "Metasploit",
      "Burp Suite",
      "Kali Linux",
      "Snort"
    ],
    "Programming": [
      "Python",
      "Bash",
      "PowerShell",
      "SQL",
      "JavaScript",
      "C++"
    ],
    "Security Concepts": [
      "Network Security",
      "Penetration Testing",
      "Vulnerability Assessment",
      "Incident Response",
      "Security Architecture",
      "Risk Management"
    ],
    "Cloud Security": [
      "AWS Security",
      "Azure Security",
      "Cloud Security Architecture",
      "Container Security",
      "Serverless Security"
    ]
  };

  const experience = [
    {
      title: "Senior Security Engineer",
      company: "TechSecure Solutions",
      period: "2022 - Present",
      responsibilities: [
        "Lead security assessments and penetration testing for enterprise clients",
        "Develop and implement security policies and procedures",
        "Manage incident response team and security operations",
        "Conduct security training and awareness programs"
      ]
    },
    {
      title: "Security Analyst",
      company: "CyberDefense Inc.",
      period: "2020 - 2022",
      responsibilities: [
        "Performed vulnerability assessments and security audits",
        "Monitored and analyzed security logs and alerts",
        "Implemented security controls and countermeasures",
        "Assisted in incident response and investigation"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Mapua Malayan Digital College under Mapua Malayan Colleges Laguna",
      year: "2022 - 2026",
      details: "Major in Network & Cybersecurity",
      link: "https://www.mmdc.mcl.edu.ph/"
    },
    {
      degree: "Vocational Course in Computer Secretarial",
      school: "Holy Child Colleges of Butuan",
      year: "2006 - 2008",
      details: "Completed vocational training in computer secretarial skills",
      link: "https://hccb.edu.ph/"
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
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Resume
            </h1>
            <div className="flex space-x-4">
              <a
                href={process.env.PUBLIC_URL + "/resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                View Resume
              </a>
              <a
                href={process.env.PUBLIC_URL + "/resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                download="Claros_Orcullo_Resume.pdf"
              >
                Download PDF
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Contact & Skills */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a href="mailto:orculloclark@yahoo.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                      orculloclark@yahoo.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">09506332965</span>
                  </div>
                  <div className="mt-4">
                    <SocialLinks />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Skills
                </h2>
                <div className="space-y-4">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
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
              </div>
            </div>

            {/* Right Column - Experience & Education */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Professional Experience
                </h2>
                <div className="space-y-6">
                  {experience.map((job) => (
                    <div key={job.title} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {job.company} • {job.period}
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                        {job.responsibilities.map((responsibility, index) => (
                          <li key={index}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Education
                </h2>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.degree} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <a 
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {edu.school}
                      </a>
                      <p className="text-gray-600 dark:text-gray-300">
                        {edu.year}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 