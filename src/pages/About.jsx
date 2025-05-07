import { motion } from "framer-motion";
import React, { useState } from "react";
import PDFViewer from "../components/PDFViewer";

export default function About() {
  const [isPDFOpen, setIsPDFOpen] = useState(false);
  const [showEmploymentCert, setShowEmploymentCert] = useState(false);

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

  const employment = [
    {
      title: "On-the-Job Training",
      company: "JP Morgan",
      period: "March 2026 - May 2026",
      roles: [
        "Cybersecurity Analyst",
        "Network Engineer"
      ],
      responsibilities: [
        "Conducted vulnerability assessments and penetration testing on network infrastructure",
        "Implemented security controls and monitored network traffic for potential threats",
        "Assisted in incident response and security breach investigations",
        "Collaborated with senior security engineers on threat detection and prevention strategies",
        "Participated in security architecture reviews and risk assessments",
        "Developed and maintained security documentation and procedures"
      ]
    },
    {
      title: "First Assistant Manager (Store In-Charge)",
      company: "McDonald's Saudi Arabia (RICC)",
      companyLink: "https://www.mcdonalds.com/sa/en-sa/riyadh/ourcompany.html",
      period: "2013 - 2019",
      responsibilities: [
        "Led daily operations and managed a team of 30+ employees across multiple shifts",
        "Ensured high standards of customer service and food quality through regular audits and training",
        "Handled inventory management, staff scheduling, and performance evaluations",
        "Maintained compliance with company policies, food safety standards, and local regulations",
        "Implemented cost-control measures resulting in 15% reduction in operational expenses",
        "Conducted regular equipment maintenance and troubleshooting of POS systems",
        "Managed cash handling procedures and daily financial reporting",
        "Coordinated with suppliers and maintained vendor relationships",
        "Trained and mentored new managers and team leaders",
        "Achieved consistent high performance ratings and customer satisfaction scores"
      ],
      certificate: true
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

          {/* Employment History Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Employment History</h2>
            <div className="space-y-6">
              {employment.map((job, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 dark:text-white">{job.title}</h3>
                      {job.companyLink ? (
                        <a 
                          href={job.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {job.company}
                        </a>
                      ) : (
                        <p className="text-blue-600 dark:text-blue-400">{job.company}</p>
                      )}
                      <p className="text-gray-500 dark:text-gray-400">{job.period}</p>
                      {job.responsibilities && (
                        <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      )}
                      {job.roles && (
                        <div className="mt-2">
                          <p className="text-gray-600 dark:text-gray-300">Roles:</p>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                            {job.roles.map((role, idx) => (
                              <li key={idx}>{role}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    {job.certificate && (
                      <button
                        onClick={() => setShowEmploymentCert(true)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                      >
                        View Certificate
                      </button>
                    )}
                  </div>
                </div>
              ))}
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

      {/* School Credential Modal */}
      {isPDFOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl h-[80vh] relative">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">School Credential</h3>
              <button
                onClick={() => setIsPDFOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="h-[calc(100%-4rem)]">
              <PDFViewer
                url={`${process.env.PUBLIC_URL}/certifications/hccb-credential.pdf`}
                title="School Credential"
              />
            </div>
          </div>
        </div>
      )}

      {/* Employment Certificate Modal */}
      {showEmploymentCert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl h-[80vh] relative">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Employment Certificate</h3>
              <button
                onClick={() => setShowEmploymentCert(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="h-[calc(100%-4rem)]">
              <PDFViewer
                url={`${process.env.PUBLIC_URL}/certifications/coe_ricc.pdf`}
                title="Employment Certificate"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 